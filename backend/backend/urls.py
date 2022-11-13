"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from oxhack.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", oxhack_view, name="oxhack_view"),
    path(
        "get-skills-and-relevant-skills",
        get_skills_and_relevant_skills_view,
        name="get_skills_and_relevant_skills",
    ),
    path("categories", get_percentages_view, name="get_percentages_view"),
    path("role/<int:role>", get_role_data_view, name="get_role_data_view"),
]
