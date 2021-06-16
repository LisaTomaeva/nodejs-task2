 DROP DATABASE users;
 CREATE DATABASE users; 
 \c users; 
 CREATE TABLE users (
    id varchar(255) PRIMARY KEY,   
    username varchar(255) UNIQUE,
    age int, 
    pswd varchar(255),
    isdeleted boolean
);

CREATE TYPE roleType AS ENUM ('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES');

 CREATE TABLE groups (
    id varchar(255) PRIMARY KEY,   
    group_name varchar(255) UNIQUE,
    roles roleType[]
);

CREATE TABLE user_group (
  id varchar(255) PRIMARY KEY, 
  userId varchar(255) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
  groupId varchar(255) REFERENCES groups (id) ON UPDATE CASCADE  ON DELETE CASCADE
);

INSERT INTO users (id, username, age, pswd, isdeleted) VALUES
    ('1', 'Ann', 46, '123', false),
    ('2', 'Jack', 39, '123', false),
    ('3', 'John', 22, '123', false),
    ('4', 'Mary', 28, '123', false),
    ('5', 'Irene', 19, '123', false),
    ('6', 'Carl', 21, '123', false),
    ('7', 'Karen', 32, '123', false);

INSERT INTO groups (id, group_name, roles) VALUES
    ('1', 'ADMIN', '{"READ", "WRITE", "DELETE", "SHARE", "UPLOAD_FILES"}'),
    ('2', 'USER', '{"READ", "WRITE"}'),
    ('3', 'GUEST', '{"READ", "SHARE"}');

INSERT INTO user_group (id, userId, groupId) VALUES
    ('1', '1', '1'),
    ('2', '1', '2'),
    ('3', '2', '1');


