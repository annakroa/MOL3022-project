# Generated by Django 2.2.7 on 2020-04-16 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bioinfapp', '0002_auto_20200416_0831'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testmodelcorona',
            name='discovered',
            field=models.DateField(),
        ),
    ]
