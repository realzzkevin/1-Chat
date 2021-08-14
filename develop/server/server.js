const express = require('express');
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const { ApolloServer } = require ('apollo-server-express');
const path = require('path');


const db = require('./config/connection');
const { Socket } = require('dgram');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const httpServer = require("http").createServer(app);
httpServer.listen(PORT);
//const options = { };
const io = require("socket.io")(httpServer, options);

io.on("connection", Socket => {

})
=======
=======
>>>>>>> Stashed changes
const path = require('path');
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
        context: authMiddleware
    });
    await server.start();
    server.applyMiddleware({ app });
};

startApolloServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const httpServer = app.listen(PORT,() => {
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
//   server = require('http').createServer(app),
//   io = require('socket.io').listen(server),

//const httpServer = require("http").createServer(app);
//httpServer.listen(PORT);

//initial socket.io
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:8080",
    },
});

let users = [];

const addUser = (userId, socketId) => {
    if (!users.some((user) => user.userId === userId)) {
        users.push({ userId, socketId });
    }
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
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
        io.to(user.SocketId).emit("getMessage", {
            senderId,
            payload,
        });
    });

    Socket.on("disconnect", () => {
        console.log(`user ${Socket.id} disconnected!`);
        removeUser(Socket.id);
        io.emit("getUsers", users);
    });
});
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes


if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

db.once('open', () =>{
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
