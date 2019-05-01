CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS todos (
    id serial PRIMARY KEY,
    user_id integer NOT NULL,
    name VARCHAR(100) NOT NULL,
    done boolean NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);