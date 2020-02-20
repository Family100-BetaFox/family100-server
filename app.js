const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const { GeneralTopic, LogicTopic, RiddleTopic, Room } = require('./models')
const cors = require('cors')

app.use(cors())

io.on('connection', (socket) => {
    
})

http.listen(3000, () => {
    console.log('connect to 3000')
})