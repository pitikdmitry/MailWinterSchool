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

    def create_user(self, content) -> int:
        connect, cursor = self._data_context.create_connection()

        sql = "INSERT INTO users (nickname, first_name, surname, about, email, password) VALUES (%s, %s, %s, %s, %s, %s);"
        try:
            cursor.execute(sql,
                           [content['nickname'], content['first_name'], content['surname'], content['about'],
                            content['email'], content['password']])
            self._data_context.put_connection(connect)
            cursor.close()
            return STATUS_CODE['OK']

        except BaseException:
            cursor.close()
            return STATUS_CODE['CONFLICT']
