from django.shortcuts import render
from .query import query_with_fetchall


from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .calculate_percentages_on_skills import calculate_percentages

from random import *

# Create your views here.


def oxhack_view(request):
    """Serve the html file for the oxhack"""
    return render(request, "oxhack.html")


@api_view(["GET"])
def get_skills_and_relevant_skills_view(request):
    """Return skills and relevant skills"""

    all_skills = query_with_fetchall("SELECT * FROM oxhack_skills")

    frequent_skills = query_with_fetchall(
        "SELECT skill FROM (SELECT skill, count(skill) FROM oxhack_role_skills GROUP BY skill ORDER BY count(skill) DESC LIMIT 5) AS TMP"
    )

    get_skills = lambda x: x["skill"]
    response = {}
    response["skills"] = list(map(get_skills, all_skills))
    response["top_skills"] = list(map(get_skills, frequent_skills))

    return Response(response, status=status.HTTP_200_OK)


@api_view(["POST"])
def get_percentages_view(request):
    """get the list of skills and return the json from emilia on messenger"""

    skills = request.data["skills"]
    percentages = calculate_percentages(skills)
    return Response(percentages, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_role_data_view(request):
    """ask for a role (like software engineer) and return the data about the specific role"""
    role = request.data

    role_data = query_with_fetchall(
        'SELECT * FROM oxhack_roles WHERE role = "{0}"'.format(role)
    )

    return Response(role_data[0], status=status.HTTP_200_OK)
