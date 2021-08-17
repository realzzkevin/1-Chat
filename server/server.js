const express = require('express');
const path = require('path');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
// start apollo server
async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });

    await server.start();
    server.applyMiddleware({ app });
};

startApolloServer();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const httpServer = app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`socke.io running on port ${PORT}`);
});

/*
const socketIo = require('socket.io');
const httpServer = app.listen(PORT);
const io = socketIo(httpServer);
*/
//var express = require('express'),
//app = express(),
//const Server = require('http').createServer(app);
//   io = require('socket.io').listen(server),

//const httpServer = require("http").createServer(app);
//httpServer.listen(PORT);

//initial socket.io

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        //methods: ["GET", "POST"],
    },
});

let users = [];

const addUser = (userId, socketId) => {
    /*users.forEach(user => {
        if (user.userId === userId){
            return;
        }
    });
    users.push({ userId, socketId });*/
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};
const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    /*users.forEach(user => {
        if (user.userId === userId) {
            return user;
        }
        return;
    });*/
    return users.find((user) => user.userId === userId);
};

io.on("connection", (Socket) => {
    console.log(`user ${Socket.id} connected`);

    Socket.on("addUser", (userId) => {
        addUser(userId, Socket.id);
        io.emit("getUsers", users);
    });

    Socket.on("sendMessage", ({ senderId, receiverId, payload }) => {
        const user = getUser(receiverId);
        console.log(user);
        /*
        io.to(user.socketId).emit("getMessage", {
            senderId,
            payload,
        });*/
        io.emit("getMessage", {
            senderId,
            payload,
        });
        //console.log(user.socketId);
        console.log(`sender: ${senderId} receiver: ${receiverId} payload: ${payload}`);
    });

    Socket.on("disconnect", () => {
        console.log(`user ${Socket.id} disconnected!`);
        removeUser(Socket.id);
        io.emit("getUsers", users);

    });
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

db.once('open', () => {
    httpServer;
});
/*db.once('open', () =>{
    /*app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});*/
