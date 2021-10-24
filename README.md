# Blogging-API
Backend APIs for a blogging website.

# Getting Started
## Prerequisite
- nodejs
- mongodb

## Running the server
```bash
git clone https://github.com/ayush-rathore/Blogging-API
cd Blogging-API && npm i && node app.js
```

# Routes
## User Routes
- **/user/signup**: Create a new user.

    Send a POST request with JSON Body like:

```JSON
{
    "firstName": "Mark",
    "lastName": "Smith",
    "email": "mark@user.com",
    "password": "12345678",
    "dob": "1623105753"
}
```

- **/user/login**: Login a user.

    Send a GET request with JSON Body like:
```JSON
{
    "email": "mark@user.com",
    "password": "12345678"
}
```

- **/user/getUser**: Find a user.

    Send a GET request to URL like `/user/getUser/<userId>`.

- **/user/postBlog**: Post a blog.

    Send a POST request with JSON Body like:
```JSON
{
    "heading": "About me!",
    "blog": "Lorem ipsum",
    "userId": "<userId>"
}
```

- **/user/getBlog**: Find a blog.

    Send a GET request to URL like `/user/getBlog/<userId>`.

## Admin Routes
- **/admin/signup**: Create a new admin.

    Send a POST request with JSON Body like:

```JSON
{
    "firstName": "Dean",
    "lastName": "Altar",
    "email": "dean@admin.com",
    "password": "12345678"
}
```

- **/admin/login**: Login an admin.

    Send a GET request with JSON Body like:
```JSON
{
    "email": "dean@admin.com",
    "password": "12345678"
}
```

