# Generated by Django 4.1.7 on 2023-04-08 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FreshBiteApp', '0005_rename_categorydetails_categorydetail_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='cartDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('orderId', models.CharField(max_length=36)),
                ('productId', models.CharField(max_length=36)),
                ('productCategoryId', models.CharField(max_length=36)),
                ('productQuantity', models.IntegerField(max_length=24)),
                ('productPrice', models.IntegerField()),
            ],
        ),
        migrations.RenameField(
            model_name='user',
            old_name='is_marketplace',
            new_name='is_merchant',
        ),
    ]
