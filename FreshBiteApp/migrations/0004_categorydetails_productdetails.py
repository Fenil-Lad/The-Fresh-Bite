# Generated by Django 4.1.7 on 2023-04-01 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FreshBiteApp', '0003_remove_user_last_login'),
    ]

    operations = [
        migrations.CreateModel(
            name='categoryDetails',
            fields=[
                ('categoryId', models.CharField(max_length=36, primary_key=True, serialize=False)),
                ('categoryTitle', models.CharField(max_length=18)),
                ('categoryBy', models.CharField(max_length=36)),
            ],
        ),
        migrations.CreateModel(
            name='productDetails',
            fields=[
                ('productId', models.CharField(max_length=36, primary_key=True, serialize=False)),
                ('productCategoryId', models.CharField(max_length=36)),
                ('productBy', models.CharField(max_length=36)),
                ('productPrice', models.IntegerField()),
                ('productName', models.CharField(max_length=48)),
                ('productDesc', models.TextField()),
                ('productVeg', models.BooleanField()),
            ],
        ),
    ]
