from django.shortcuts import render
from django.db.utils import IntegrityError
from query import query_with_fetchall


from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from random import *
import random

# Create your views here.


def oxhack_view(request):
    """Serve the html file for the oxhack"""
    return render(request, "oxhack.html")


@api_view(["GET"])
def get_skills_and_relevant_skills(request):
    """Return skills and relevant skills"""

    all_skills = query_with_fetchall("SELECT * FROM oxhack_skills")

    frequent_skills = query_with_fetchall(
        "SELECT skill FROM (SELECT skill, count(skill) FROM oxhack_role_skills GROUP BY skill ORDER BY count(skill) DESC LIMIT 5) AS TMP"
    )

    response = {}
    response["all_skills"] = all_skills
    response["frequent_skills"] = frequent_skills

    return Response(response, status=status.HTTP_200_OK)


@api_view(["POST"])
def get_move(request):
    """get the list of skills and return the json from emilia on messenger"""

    # Get body of the request
    data = request.data

    # probability of picking a random move, easy -> 60%, medium -> 40%, hard -> 20%
    rand_move_prob = [0.5, 0.3, 0.05][difficulty - 1]

    # making a random move with the set probability
    prob = random.uniform(0, 1)
    if prob <= rand_move_prob:
        # repeat while find a non empty column
        while 1:
            # select a random column
            col = randrange(state.game_grid.nr_cols)
            # if this column is empty try again
            if state.game_grid.is_empty_column(col):
                continue
            else:
                # otherwise take the top of this column and return the answer
                next_state = state.move(col)
                return Response(next_state.to_dict(), status=status.HTTP_200_OK)

    # same depth for all difficulties
    AI_DEPTH = 4
    # Calculate optimal move using the AIs
    node = Node(state, None, 0, False)
    AI = MiniMax(AI_DEPTH)
    AI.eval(node)
    # Get the state after the AI move
    next_state = node.next_best_node.state
    # Return the new state
    return Response(next_state.to_dict(), status=status.HTTP_200_OK)


@api_view(["POST"])
def save_score_view(request):
    """ask for a role (like software engineer) and return the data about the specific role"""
    role = request.data

    role_data = query_with_fetchall(
        'SELECT * FROM oxhack_roles WHERE role = "{0}"'.format(role)
    )

    return Response(role_data[0], status=status.HTTP_200_OK)
