from django.db import models


class Roles(models.Model):
    role = models.CharField(max_length=100, default="")
    role_id = models.IntegerField(default=0)
    category = models.CharField(max_length=100, default="")
    jobs_2019 = models.IntegerField(default=0)
    jobs_2020 = models.IntegerField(default=0)
    jobs_2021 = models.IntegerField(default=0)
    jobs_2022 = models.IntegerField(default=0)
    jobs_2023 = models.IntegerField(default=0)
    jobs_2024 = models.IntegerField(default=0)
    jobs_2025 = models.IntegerField(default=0)
    jobs_2026 = models.IntegerField(default=0)
    jobs_2027 = models.IntegerField(default=0)
    jobs_2028 = models.IntegerField(default=0)
    jobs_2029 = models.IntegerField(default=0)
    jobs_2030 = models.IntegerField(default=0)
    salary = models.IntegerField(default=0)


class Role_skills(models.Model):
    role = models.CharField(max_length=100, default="")
    role_id = models.IntegerField(default=0)
    skill = models.CharField(max_length=100, default="")


class Role_companies(models.Model):
    role = models.CharField(max_length=100)
    role_id = models.IntegerField()
    company_name = models.CharField(max_length=100)
    link = models.CharField(max_length=500)


class Skills(models.Model):
    skill = models.CharField(max_length=100)
