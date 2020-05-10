## Another MERN Chat application

Chat application based on MERN(Mongo, Express, React, Node) stack, I chose this stack because it allows us to write Javascript code on the backend and frontend and also I like writing code for the client with React.

### Description

Is a very basic chat application, my intention here is to create an http server without the need to follow Restful constraints or anything, it helped me to understand nodejs and express features and more important to have fun. Also I tried to keep the client application simple, so it doesn't use any CSS-in-JS library and as I don't have plans to scale this application or use it in the real world I did't write tests.(You should write them)

### Deployed

It is deployed on heroku you can take a look at this [link](https://another-mern-chat.herokuapp.com/)

### Preview

<div style="display: flex; flex-direction: row;">
<img src="./images/users.png"
     alt="users"
     style="width: 200px" />
<img src="./images/chats.png"
     alt="chats"
     style="width: 200px; margin: 0 0.2rem" />
<img src="./images/channel.png"
     alt="channel"
     style="width: 200px" />

</div>

### Run it locally

#### Run the server

1- Create mongo database: I used the [mongodb altas](https://www.mongodb.com/cloud/atlas) platform for creating and managing one.Later you will need to create a user/password in order to connect the server with the DB.

2- Create `.env` in the root path `/` file and your variables

```
DB_NAME=core-xyz.gcp.mongodb.net
DB_USER=db_user_value
DB_PASSWORD=db_password_value
```

2- Install node packages and then run

```
npm install
npm run dev:server
```

#### Run the server

1- Move to client project `cd ./client` and then create a `.env` file like the following

```
DEV_API="http://localhost:8000"
PROD_API="https://esquinazi-nodejs-react-chat.herokuapp.com"
```

2- Install dependencies and run de project.

```
npm install
npm start
```

### Reference

Based and inspired on a [nodejs](https://platzi.com/clases/backend-js/) platzi course.
