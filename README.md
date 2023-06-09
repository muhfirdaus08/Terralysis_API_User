# API Documentation

![banner.](/public/images/banner1.png)

##### base url : `https://<cloudrun_service_name>.a.run.app/`
### - Register

- Path :
  - `/register`
- Method:
  - `POST`
- Request
  - `name as string`
  - `email as string: must be unique`
  - `password as string`
- Response
  ```
  {
      "error": false,
      "message": "Register success",
      "user": {
          "createdAt": "2023-06-03T17:11:01.523Z",
          "updatedAt": "2023-06-03T17:11:01.525Z",
          "userId": "0f223698-30aa-499a-9f84-28d44aee2dbd",
          "name": "example",
          "email": "example@bangkit.academy",
          "password": "$2b$10$.r52zrTTvLIrfmao//6sheR/T89.hB.h2VqqEZVM9KDKQ7sT7UG8q"
      }
  }
  ```
### - Login

- Path :
  - `/login`
- Method:
  - `POST`
- Request
  - `email as string`
  - `password as string`
- Response
  ```
  {
      "error": false,
      "message": "login success",
      "loginResult": {
          "userId": "427add20-5504-4d23-81d2-66d3acfdfc2f",
          "name": "example",
          "email": "example@bangkit.academy",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MjdhZGQyMC01NTA0LTRkMjMtODFkMi02NmQzYWNmZGZjMmYiLCJpYXQiOjE2ODU4MDQ2OTd9.PPAwrrwhXDNjZGjzoFFkSa_rQ3RJnf6lHmaA9UW2MFQ"
      }
  }
  ```

### - Get All User (Admin)

- Path :
  - `/users`
- Method:
  - `GET`
- Response
  ```
  {
      "error": false,
      "message": "Get All User Success",
      "data": [
          {
              "userId": "0f223698-30aa-499a-9f84-28d44aee2dbd",
              "name": "example",
              "email": "example@bangkit.academy",
              "password": "$2b$10$.r52zrTTvLIrfmao//6sheR/T89.hB.h2VqqEZVM9KDKQ7sT7UG8q",
              "createdAt": "2023-06-03T17:11:01.000Z",
              "updatedAt": "2023-06-03T17:11:01.000Z"
          },
          {
              "userId": "427add20-5504-4d23-81d2-66d3acfdfc2f",
              "name": "example",
              "email": "example@bangkit.academy",
              "password": "$2b$10$rtOLDrKPicqb8ra7D06ljuMsRapU2pttHv7SGrzhKgecZEmeocK3G",
              "createdAt": "2023-06-03T14:28:24.000Z",
              "updatedAt": "2023-06-03T14:28:24.000Z"
          },
          ...
      ]
  }
  ```

### - Get User by Id

- Path :
  - `/users/:userId`
- Method:
  - `GET`
- Header
  - `Authorization: Bearer <token>`
- Response
  ```
  {
      "error": false,
      "message": "Get User Success",
      "data": {
          "userId": "0f223698-30aa-499a-9f84-28d44aee2dbd",
          "name": "example",
          "email": "example@bangkit.academy",
          "password": "$2b$10$.r52zrTTvLIrfmao//6sheR/T89.hB.h2VqqEZVM9KDKQ7sT7UG8q",
          "createdAt": "2023-06-03T17:11:01.000Z",
          "updatedAt": "2023-06-03T17:11:01.000Z"
      }
  }
  ```

### - Update User by Id

- Path :
  - `/users/:userId`
- Method:
  - `PATCH`
- Header
  - `Authorization: Bearer <token>`
- Request
  - `name as string (optional)`
  - `email as string: must be unique (optional)`
  - `password as string (optional)`
- Response
  ```
  {
      "error": false,
      "message": "Update User Success",
      "data": {
          "userId": "0f223698-30aa-499a-9f84-28d44aee2dbd",
          "data": {
              "name": "optional",
              "email": "optional",
              "password": "optional",
          }
      }
  }
  ```

### - Delete User by Id

- Path :
  - `/users/:userId`
- Method:
  - `DELETE`
- Header
  - `Authorization: Bearer <token>`
- Response
  ```
  {
      "error": false,
      "message": "Delete User Success",
      "data": {
          "userId": "b5eeeab9-f9e5-4678-ba07-029757e15760",
          "name": "example",
          "email": "example@gmail.com",
          "password": "$2b$10$xcrXOZtxQefIt7dDM/pjNuoAriWH7zfvGRmmXGOv0Irzms2B8.H1i",
          "createdAt": "2023-05-30T14:34:24.000Z",
          "updatedAt": "2023-05-30T16:55:58.000Z"
      }
  }
  ```

### - Logout

- Path :
  - `/logout`
- Method:
  - `POST`
- Header
  - `Authorization: Bearer <token>`
- Response
  ```
  {
      "error": false,
      "message": "Logout success"
  }
  ```# Terralysis_API_User
