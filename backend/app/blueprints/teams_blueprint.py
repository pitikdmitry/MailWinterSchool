from flask import Blueprint, request, make_response, jsonify, json
from flask_cors import CORS, cross_origin

from app.repositories.teams_repository import TeamsRepository

teams_blueprint = Blueprint('teams', __name__)
teams_repository = TeamsRepository()

STATUS_CODE = {
    'OK': 200,
    'CREATED': 201,
    'NOT_FOUND': 404,
    'UNAUTHORIZED': 401,
    'CONFLICT': 409
}


@teams_blueprint.route('/<title>/profile', methods=['GET'])
def get_by_nickname(title: str):

    team, status_code = teams_repository.get_by_title(title)
    return make_response(jsonify(team), status_code)

