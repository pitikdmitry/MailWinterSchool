from flask import Blueprint, request, make_response, jsonify, json
from flask_cors import CORS, cross_origin

from app.repositories.users_repository import UsersRepository

users_blueprint = Blueprint('users', __name__)
users_repository = UsersRepository()

STATUS_CODE = {
    'OK': 200,
    'CREATED': 201,
    'NOT_FOUND': 404,
    'UNAUTHORIZED': 401,
    'CONFLICT': 409
}


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

    if status_code == STATUS_CODE['OK']:
        return get_by_nickname(data['nickname'])

    return make_response("", status_code)


@users_blueprint.route('/login', methods=['POST'])
@cross_origin()
def login():
    bytes_data = request.data
    data = json.loads(bytes_data)

    user, status_code = users_repository.get_by_nickname_or_email(data['nickname_or_email'])
    if user is None:
        return make_response("", status_code)

    if user['password'] == data['password']:
        return make_response(jsonify(user), STATUS_CODE['OK'])
    else:
        return make_response("", STATUS_CODE['UNAUTHORIZED'])


@users_blueprint.route('/best', methods=['GET'])
def get_best_players():

    users, status_code = users_repository.get_best_players()
    return make_response(jsonify(users), status_code)


@users_blueprint.route('/<nickname>/profile', methods=['GET'])
def get_by_nickname(nickname: str):

    user, status_code = users_repository.get_by_nickname(nickname)
    return make_response(jsonify(user), status_code)
