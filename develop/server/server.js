const express = require ('express')
const io = require('socket.io')(3000)
// import cors from 'cors'
// import GraphQLServer from './graphql/schema'
const http = require ('http')




const port = process.env.PORT || 4000;
const users = {}

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})

let app = express() 

let httpServer = http.Server()


// app.use(cors())
// GraphQLServer.applyMiddleware({ app, path: '/graphql' })

httpServer.listen(port, async () => { // I don't see your `port`
  if (process.env.NODE_ENV !== 'production') {
    console.log('Listening on port ' + port)
  }
})


// export default app


