class Users(object):

    def __init__(self, id, nickname, first_name, surname, about, email, password):
        self._id = id
        self._nickname = nickname
        self._first_name = first_name
        self._surname = surname
        self._about = about
        self._email = email
        self._password = password

    @property
    def id(self):
        return self._id

    @property
    def nickname(self):
        return self._nickname

    @property
    def first_name(self):
        return self._first_name

    @property
    def surname(self):
        return self._surname

    @property
    def about(self):
        return self._about

    @property
    def email(self):
        return self._email

    @property
    def password(self):
        return self._password
