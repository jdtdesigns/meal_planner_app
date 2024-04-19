\c postgres;

DROP DATABASE IF EXISTS student_course_db;
CREATE DATABASE student_course_db;

\c student_course_db;

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  type VARCHAR(200) NOT NULL
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);























-- DROP TABLE users;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   email VARCHAR(250) NOT NULL,
--   password VARCHAR(250) NOT NULL
-- );