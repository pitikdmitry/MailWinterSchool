from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from psycopg2.extras import RealDictCursor
from psycopg2.pool import ThreadedConnectionPool


class PostgresDataContext(object):

    def __init__(self):
        self._pool = ThreadedConnectionPool(1, 12, database="forum_server", user="forum_server",
                                            password="forum_server", host="localhost", port="5454")

    def _get_connection(self):
        return self._pool.getconn()

    def put_connection(self, conn):
        self._pool.putconn(conn)

    def create_connection(self):
        conn = self._get_connection()
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        return conn, cursor
