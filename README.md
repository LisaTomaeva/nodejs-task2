How to run the app & the PoistgreSQL database:

- npm i 
- move to the nodejs-task2 folder to run the task
- run local database:
    - run "psql -U postgres" (database login, password, port and host can be changed in .env file);
    - use "\i db.sql" to run the database script
- npm start

How to use API. Routes.

To login:

- POST - /api/login

For all these requests you will need the authorisation token in request headers (key is "token").

For User table: 

- GET 
    - /api/users
    - /api/users/active/?loginSubstring=a&length=2
    - /api/users/[id]
- POST - /api/users Request body example: ({
    "login": "name",
    "password": "password",
    "age": 19
})

- PUT - /api/users/[id] Request body example: ({
    "login": "Linda",
    "password": "securePswrd123",
    "age": 19
})
- DELETE - /api/users/[id]

For Group table: 

- GET 
    - /api/groups
    - /api/users/[id]
- POST - /api/groups Request body example: ({
    "groupName": "USER",
    "roles": ["READ"]
})

- PUT - /api/groups Request body example: ({
    "groupName": "USER",
    "roles": ["READ"]
})
- DELETE - /app/groups/[id]

For UserGroup table:

- GET - /api/users-groups

- POST - /api/users-groups Request body example: ({
    "groupId": "1",
    "users": [
        "4",
        "5"
    ]
})

To run the test: 
- "npm run test"
