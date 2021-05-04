 DROP DATABASE users;
 CREATE DATABASE users; 
 \c users; 
 CREATE TABLE users (
    id varchar(255) PRIMARY KEY,   
    username varchar(255),
    age int, 
    pswd varchar(255),
    isdeleted boolean
);

INSERT INTO users (id, username, age, pswd, isdeleted) VALUES
    ('1', 'Ann', 46, '123', false),
    ('2', 'Jack', 39, '123', false),
    ('3', 'John', 22, '123', false),
    ('4', 'Mary', 28, '123', false),
    ('5', 'Irene', 19, '123', false),
    ('6', 'Carl', 21, '123', false),
    ('7', 'Karen', 32, '123', false);

