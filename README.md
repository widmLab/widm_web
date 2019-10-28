# WIDM_WEB

## How to install project

### Client
```
cd client
npm install
npm start
```
### Server
```
cd server
npm install
npm run devstart
```
open your browser and goto localhost:8080/ to connect to server
also you can use postman to test the api

## api document

### user

```=javascript
{
  url : '/api/member'
  method : 'get'
  body : {
    "sid" : "null for all,type for specific"
  }
  description : you can use this api to get all member
}
{
  url : '/api/member'
  method : 'post'
  body : {
    "sid":"123",  #char
    "name":"test", #char
    "email":"test@gmail.com", #char
    "sex":0, #int
    "website":"no", #char
    "hobby":"play game", #char
    "introduction":"my name is sam", #char
    "degree": 0, #int
    "start_date":"2019/09/09", #YYYY/MM/DD
    "end_date":"2021/06/06", #YYYY/MM/DD
    "program":"software engineering" #char
  }
  description : you can use this api to insert member
}
{
  url : '/api/member'
  method : 'delete'
  body : {
    "sid" : " sid which will be delete"
  }
  description : you can use this api to get all member
}
```
