CREATE TABLE users
(
    id serial primary key,
    nickname TEXT NOT NULL,
    first_name TEXT NOT NULL,
    surname TEXT NOT NULL,
    about TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
