from rest_framework import serializers
from FreshBiteApp.models import *

class PdSerializer(serializers.ModelSerializer):
    class Meta:
        model = productDetail
        fields = '__all__'

class CdSerializer(serializers.ModelSerializer):
    class Meta:
        model = categoryDetail
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'