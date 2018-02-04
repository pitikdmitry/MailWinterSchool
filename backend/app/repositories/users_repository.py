from typing import Tuple

from app.connect_db import PostgresDataContext

STATUS_CODE = {
    'OK': 200,
    'CREATED': 201,
    'NOT_FOUND': 404,
    'CONFLICT': 409
}


class UsersRepository:

    def __init__(self):
        self._data_context = PostgresDataContext()
        pass

    def create(self, content) -> int:
        connect, cursor = self._data_context.create_connection()
        print(content['nickname'])

        sql = "INSERT INTO users (nickname, first_name, surname, about, email, password) VALUES (%s, %s, %s, %s, %s, %s);"
        try:
            cursor.execute(sql, [content['nickname'], content['first_name'], content['surname'], content['about'],
                            content['email'], content['password']])

            cursor.close()
            return STATUS_CODE['OK']

        except BaseException as e:
            print(e)
            cursor.close()
            return STATUS_CODE['CONFLICT']

    def get_by_id(self, nickname: str) -> Tuple:
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT nickname, first_name, surname, about, email, password FROM users WHERE nickname=%s;"
        try:
            cursor.execute(sql, [nickname, ])
            self._data_context.put_connection(connect)

            user = cursor.fetchone()
            cursor.close()

            return user, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['CONFLICT']
