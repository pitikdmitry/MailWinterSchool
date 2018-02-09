from typing import Tuple

from app.connect_db import PostgresDataContext

STATUS_CODE = {
    'OK': 200,
    'CREATED': 201,
    'NOT_FOUND': 404,
    'CONFLICT': 409
}


class TeamsRepository:

    def __init__(self):
        self._data_context = PostgresDataContext()

    def get_by_title(self, title: str) -> Tuple:
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT title, games_win, games_lose, games_draw FROM teams WHERE title=%s;"
        try:
            cursor.execute(sql, [title, ])
            self._data_context.put_connection(connect)

            team = cursor.fetchone()
            cursor.close()

            return team, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']

