const express = require('express');
const { ApolloServer } = require ('apollo-server-express');
const path = require('path');


const db = require('./config/connection');
//const { Socket } = require('dgram');

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


if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

db.once('open', () =>{
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})
