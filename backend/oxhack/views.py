from django.shortcuts import render
from django.db.utils import IntegrityError


from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from random import *
import random

# Create your views here.


def oxhack_view(request):
    """Serve the html file for the oxhack"""
    return render(request, 'oxhack.html')


@api_view(["GET"])
def get_skills_and_relevant_skills(request):
    """Return skills and relevant skills"""
    return Response(StateGenerator.randomState(6, 5).to_dict(), status=status.HTTP_200_OK)


@api_view(["POST"])
def get_move(request):
    """Get the state of the game, perform an action based on the difficulty and return the new state"""

    # Get body of the request
    data = request.data
    # Convert data into a state
    state = state_from_dict(data)
    # read the difficulty
    difficulty = data["difficulty"]

    # probability of picking a random move, easy -> 60%, medium -> 40%, hard -> 20%
    rand_move_prob = [0.5, 0.3, 0.05][difficulty - 1]

    # making a random move with the set probability
    prob = random.uniform(0, 1)
    if (prob <= rand_move_prob):
        # repeat while find a non empty column
        while(1):
            # select a random column
            col = randrange(state.game_grid.nr_cols)
            # if this column is empty try again
            if (state.game_grid.is_empty_column(col)):
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
    """Save score of the user. The body of the POST request should contain two lists, 
        player_scores and computer_scores (they should contain the same number of elements)"""
    data = request.data
    user = request.user
    try:
        # Save score
        object = StacksGameScoreModel(all_scores=user, **data)
        object.save()

        # Update score of the user
        user.overall_score += object.score
        # Increase the umber of gae completed
        user.games_completed += 1
        user.save()
    except IntegrityError:
        # May raise an error if the body of the request is not correct
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)