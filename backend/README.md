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