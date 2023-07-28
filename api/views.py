from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate

from FreshBiteApp.models import *
from .serializers import *


def getUserProfile(request):
    userMap = {
        '0': 'admin',
        '1': 'merchant',
        '2': 'student',
        '9': 'unauthenticated'
    }
    if not request.user.is_authenticated:
        return userMap['9']
    elif request.user.is_superuser == True:
        return userMap['0']
    elif request.user.is_student == False and request.user.is_merchant == True:
        return userMap['1']
    elif request.user.is_student == True and request.user.is_merchant == False:
        return userMap['2']

@api_view(['GET'])
def test(request):
    res = {'status': 'success', 'endpoint': 'test'}
    return Response(res)

@api_view(['GET'])
def menu(request):

    match getUserProfile(request):
        case "unauthenticated":
            return Response({'status': 'failed', 'error_code': 'unauthorized', 'message': 'Unauthenticated Request'})
        case "admin":
            return Response({'status': 'follow_url', 'return_url': 'admin/'})
        
        case "merchant":
            res = {'status': 'success', 'user_profile': 'merchant', 'merchants':[]}
            res['merchants'].append({
                'merchantId': request.user.userId,
                'merchantCategories': []
            })

            categorySet = categoryDetail.objects.filter(categoryBy=request.user.userId)
            for category in categorySet:
                cSet = {
                    'categoryId': category.categoryId,
                    'categoryTitle': category.categoryTitle,
                    'items': []
                }
                prodSet = productDetail.objects.filter(productCategoryId=category.categoryId)
                for product in prodSet:
                    itemSet = {
                        'itemTitle': product.productName,
                        'itemDescription': product.productDesc,
                        'itemPrice': product.productPrice,
                        'currency': 'inr',
                        'veg': product.productVeg,
                        'itemId': product.productId,
                    }
                    cSet['items'].append(itemSet)
                res['merchants'][0]['merchantCategories'].append(cSet)
            return Response(res)
        
        case "student":
            res = {'status': 'success', 'user_profile': 'student', 'availableMerchants': []}
            merchantSet = User.objects.filter(is_merchant=True)
            for mrch in merchantSet:
                mSet = {
                    'merchantId': mrch.userId,
                    'merchantCategories': []
                }
                categorySet = categoryDetail.objects.filter(categoryBy=mrch.userId)
                for category in categorySet:
                    cSet = {
                        'categoryId': category.categoryId,
                        'categoryTitle': category.categoryTitle,
                        'items': []
                    }
                    prodSet = productDetail.objects.filter(productCategoryId=category.categoryId)
                    for product in prodSet:
                        itemSet = {
                            'itemTitle': product.productName,
                            'itemDescription': product.productDesc,
                            'itemPrice': product.productPrice,
                            'currency': 'inr',
                            'veg': product.productVeg,
                            'itemId': product.productId,
                        }
                        cSet['items'].append(itemSet)
                    mSet['merchantCategories'].append(cSet)
                res['availableMerchants'].append(mSet)
            return Response(res)

        case default:
            return Response({'status': 'failed', 'error_code': 'UserNotFound', 'message': 'Authenticated User not found in the system.'})