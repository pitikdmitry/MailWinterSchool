from flask import Blueprint, request, make_response, jsonify, json
from flask_cors import CORS, cross_origin

from app.repositories.users_repository import UsersRepository

users_blueprint = Blueprint('users', __name__)
users_repository = UsersRepository()


@users_blueprint.route('/create', methods=['POST'])
@cross_origin()
def create():
    content = request.get_json(silent=True)
    # content2 = request.get_json()
    # s = json.dumps(variables)
    bytes_data = request.data
    data = json.loads(bytes_data)
    if 'about' not in data:
        data['about'] = ""

    status_code = users_repository.create(data)
    return make_response("", status_code)


@users_blueprint.route('/<nickname>/profile', methods=['GET'])
def get_by_id(nickname: str):

    user, status_code = users_repository.get_by_id(nickname)
    return make_response(jsonify(user), status_code)
