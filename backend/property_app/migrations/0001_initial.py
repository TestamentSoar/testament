# Generated by Django 2.2.7 on 2019-11-09 12:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('heir', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClaimProperty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bank', models.CharField(max_length=200)),
                ('branch', models.CharField(max_length=200)),
                ('account_type', models.CharField(choices=[(0, 'saving account'), (1, 'current account'), (2, 'fixed account')], max_length=200)),
                ('account_number', models.IntegerField()),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='OthersProperty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='RealEstateProperty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=200)),
                ('floor_count', models.IntegerField()),
                ('floor_plan', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
                ('heir', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='heir.Heir')),
            ],
        ),
    ]
