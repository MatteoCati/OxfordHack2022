from django.db import models


class Roles(models.Model):
    role = models.CharField(max_length=100)
    role_id = models.IntegerField()
    q1_2021_nr_jobs = models.IntegerField()
    q2_2021_nr_jobs = models.IntegerField()
    q3_2021_nr_jobs = models.IntegerField()
    q4_2021_nr_jobs = models.IntegerField()
    q1_2022_nr_jobs = models.IntegerField()
    q2_2022_nr_jobs = models.IntegerField()
    q3_2022_nr_jobs = models.IntegerField()
    q4_2022_nr_jobs = models.IntegerField()
    salary = models.IntegerField()


class Role_skills(models.Model):
    role = models.CharField(max_length=100)
    role_id = models.IntegerField()
    skill = models.CharField(max_length=100)
    

class Role_companies(models.Model):
    role = models.CharField(max_length=100)
    role_id = models.IntegerField()
    company_name = models.CharField(max_length=100)
    link = models.CharField(max_length=100)

class Skills(models.Model):
    skill = skill = models.CharField(max_length=100)