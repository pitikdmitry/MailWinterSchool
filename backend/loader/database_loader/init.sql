CREATE TABLE users
(
    id serial primary key,
    nickname TEXT NOT NULL,
    first_name TEXT NOT NULL,
    surname TEXT NOT NULL,
    about TEXT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    kills INT DEFAULT 0,
    deaths INT DEFAULT 0,
    team_id INT
);

CREATE TABLE teams
(
    team_id serial primary key,
    title TEXT NOT NULL,
    games_win INT DEFAULT 0,
    games_lose INT DEFAULT 0,
    games_draw INT DEFAULT 0
);

INSERT INTO teams (title, games_win, games_lose, games_draw) VALUES ('aba', 1, 2, 3);
