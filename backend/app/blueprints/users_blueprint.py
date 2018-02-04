from flask import Blueprint, request, make_response, jsonify

from app.repositories.users_repository import UsersRepository

users_blueprint = Blueprint('users', __name__)
users_repository = UsersRepository()


@users_blueprint.route('/create', methods=['POST'])
def create_user():
    content = request.get_json(silent=True)

    status_code = users_repository.create_user(content)
    return make_response('good', status_code)


@users_blueprint.route('/test', methods=['GET'])
def test_send():

    return make_response('hello world')
