const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const { GeneralTopic, LogicTopic, RiddleTopic, Room } = require('./models')
const cors = require('cors')

app.use(cors())

io.on('connection', (socket) => {
    // socket.on('fetchRooms', () => {
    //     Room.findAll({
    //         attributes: ['id', 'name', 'player']
    //     })
    //         .then(rooms => {
    //             socket.emit('showRooms', rooms)
    //         })
    //         .catch(err => {
    //             socket.emit('showError', err)
    //         })
    // })

    // socket.on('joinRoom', (roomId) => {
    //     socket.join(roomId, () => {
    //         io.to(roomId).emit('someoneJoined', roomId)
    //     })
    // })

    // socket.on('fetchLogicTopic', () => {
    //     LogicTopic.findAll()
    //         .then(questions => {
    //             socket.emit('showLogicTopic', questions)
    //         })
    //         .catch(err => {
    //             socket.emit('showError', err)
    //         })
    // })

    socket.on('fetchQuestions', () => {
        console.log('asodhasdhasdhasdhaida')
        RiddleTopic.findAll()
            .then(questions => {
                socket.emit('showQuestions', questions)
            })
            .catch(err => {
                socket.emit('showError', err)
            })
    })

    // socket.on('fetchRiddleTopic', () => {
    //     RiddleTopic.findAll()
    //         .then(questions => {
    //             socket.emit('showRiddleTopic', questions)
    //         })
    //         .catch(err => {
    //             socket.emit('showError', err)
    //         })
    // })
})

http.listen(3000, () => {
    console.log('connect to 3000')
})