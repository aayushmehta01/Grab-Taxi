# User Registration Endpoint

## Endpoint
`POST /api/users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response Body
The response body will be a JSON object with the following fields:

- `token`: A JSON Web Token (JWT) string
- `user`: An object containing:
  - `_id`: The user's unique identifier
  - `fullname`: An object containing:
    - `firstname`: The user's first name
    - `lastname`: The user's last name
  - `email`: The user's email address
  - `password`: The encrypted user's password

Example:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_pass_using_bcryptjs"
  }
}
```

## Error Response
If any of the required fields are missing, the response body will be a JSON object with the following fields:

Example:
```json
{
  "errors": [
    {
      "msg": "All fields are required"
    }
  ]
}
```

<br><br><br>

# User Login Endpoint

## Endpoint
`POST /api/users/login`

## Description
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response Body
The response body will be a JSON object with the following fields:

- Status Code: `200 OK`
- Respone Body:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_pass_using_bcryptjs"
  }
}
```

## Validation Errors
- Status Code: `400 Bad Request`
- Respone Body:

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Invalid Credentials
- Status Code: `401 Unauthorized`
- Respone Body:
```json
{
  "message": "Invalid email or password"
}
```

<br><br><br>

# User Profile Endpoint

## Endpoint
`GET /api/users/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated user.

## Response
### Success

- Status Code: `200 OK`
- Response Body:
```json
{
  "_id": "USER_ID_HERE",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

## Unauthorized

- Status Code: `401 Unauthorized`
- Respone Body:
```json
{
  "message": "Authentication required"
}
```

<br><br><br>

# User Logout Endpoint

## Endpoint
`GET /api/users/logout`

## Description
This endpoint is used to log out the authenticated user by clearing the authentication token.

## Response
### Success

- Status Code: `200 OK`
- Response Body:
```json
{
  "message": "Logout successfully"
}
```

## Unauthorized

- Status Code: `401 Unauthorized`
- Respone Body:
```json
{
  "message": "Authentication required"
}
```