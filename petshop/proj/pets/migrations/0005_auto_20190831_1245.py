# Generated by Django 2.2.4 on 2019-08-31 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0004_auto_20190831_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='petu',
            name='available',
            field=models.BooleanField(),
        ),
    ]
