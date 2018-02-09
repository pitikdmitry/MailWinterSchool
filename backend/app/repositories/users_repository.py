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

    def create(self, content) -> int:
        connect, cursor = self._data_context.create_connection()
        print(content['nickname'])

        sql = "INSERT INTO users (nickname, first_name, surname, email, password, team_id) VALUES (%s, %s, %s, %s, %s, %s);"
        try:
            team_id, status_code = self.get_team_id_by_title(content['team'])

            cursor.execute(sql, [content['nickname'], content['first_name'], content['surname'],
                            content['email'], content['password'], team_id])

            cursor.close()
            return STATUS_CODE['OK']

        except BaseException as e:
            print(e)
            cursor.close()
            return STATUS_CODE['CONFLICT']

    def create_with_kills(self, content) -> int:
        connect, cursor = self._data_context.create_connection()
        print(content['nickname'])

        sql = "INSERT INTO users (nickname, first_name, surname, email, password, kills, deaths, team_id) VALUES (%s, %s, %s, %s, %s, %i, %i, %i);"
        try:
            team_id, status_code = self.get_team_id_by_title(content['team'])

            cursor.execute(sql, [content['nickname'], content['first_name'], content['surname'],
                            content['email'], content['password'], content['kills'], content['deaths'], team_id])

            cursor.close()
            return STATUS_CODE['OK']

        except BaseException as e:
            print(e)
            cursor.close()
            return STATUS_CODE['CONFLICT']

    def get_by_nickname(self, nickname: str) -> Tuple:
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT nickname, first_name, surname, about, email, password, kills, deaths, team_id FROM users WHERE nickname=%s;"
        try:
            cursor.execute(sql, [nickname, ])
            self._data_context.put_connection(connect)

            user = cursor.fetchone()
            cursor.close()

            team, status_code = self.get_team_by_id(user['team_id'])
            team_title = team['title']
            if status_code == STATUS_CODE['OK']:
                user['team'] = team_title
            else:
                user['team'] = None

            return user, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']

    def get_by_nickname_or_email(self, nickname_or_email: str) -> Tuple:
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT nickname, first_name, surname, about, email, password, kills, deaths, team_id FROM users WHERE nickname=%s or email=%s;"
        try:
            cursor.execute(sql, [nickname_or_email, nickname_or_email])
            self._data_context.put_connection(connect)

            user = cursor.fetchone()
            cursor.close()

            team, status_code = self.get_team_by_id(user['team_id'])
            team_title = team['title']
            if status_code == STATUS_CODE['OK']:
                user['team'] = team_title
            else:
                user['team'] = None

            return user, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']

    def get_best_players(self) -> Tuple:
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT nickname, kills, title FROM users u" \
              " JOIN teams t ON u.team_id=t.team_id" \
              " ORDER BY kills LIMIT 20;"
        try:
            cursor.execute(sql)
            self._data_context.put_connection(connect)

            users = cursor.fetchall()
            for user in users:
                user['team'] = user['title']
            cursor.close()

            return users, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']

    def get_team_id_by_title(self, title: str):
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT team_id FROM teams WHERE title=%s;"
        try:
            cursor.execute(sql, [title, ])
            self._data_context.put_connection(connect)

            team_id_dict = cursor.fetchone()
            team_id = team_id_dict['team_id']
            cursor.close()

            return team_id, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']

    def get_team_by_id(self, team_id: int):
        connect, cursor = self._data_context.create_connection()

        sql = "SELECT title, games_win, games_lose, games_draw FROM teams WHERE team_id=%s;"
        try:
            cursor.execute(sql, [team_id, ])
            self._data_context.put_connection(connect)

            team = cursor.fetchone()
            cursor.close()

            return team, STATUS_CODE['OK']

        except BaseException as e:
            cursor.close()
            return None, STATUS_CODE['NOT_FOUND']
