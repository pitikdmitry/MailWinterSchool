from flask import Blueprint, request, make_response, jsonify

from app.repositories.users_repository import UsersRepository

users_blueprint = Blueprint('users', __name__)
users_repository = UsersRepository()


@users_blueprint.route('/create', methods=['POST'])
def create():
    content = request.get_json(silent=True)

    status_code = users_repository.create(content)
    return make_response("", status_code)


@users_blueprint.route('/<nickname>/profile', methods=['GET'])
def get_by_id(nickname: str):

    user, status_code = users_repository.get_by_id(nickname)
    return make_response(jsonify(user), status_code)
