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

 CREATE TABLE groups (
    id varchar(255) PRIMARY KEY,   
    group_name varchar(255) UNIQUE,
    roles text[]
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
    ('2', 'Jack', '{"READ", "WRITE"}'),
    ('3', 'John', '{"READ", "SHARE"}');


