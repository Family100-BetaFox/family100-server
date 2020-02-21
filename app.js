const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const { GeneralTopic, LogicTopic, RiddleTopic, Room, Player } = require('./models')
const { Op } = require('sequelize')
const cors = require('cors')

app.use(cors())

io.on('connection', (socket) => {
    socket.on('fetchRooms', () => {
        Room.findAll({
            attributes: ['id', 'name', 'player']
        })
        .then(rooms => {
            socket.emit('showRooms', rooms)
        })
        .catch(err => {
            socket.emit('showError', err)
            console.log(err)
        })
    })

    socket.on('gameStart', (payload) => {
        io.to(payload[0].room_id).emit('startingGame', payload[0].room_id)
    })

    socket.on('joinRoom', (payload) => {
        const { room, username } = payload
        Player.findOne({
            where: {
                [Op.and]: [
                    {
                        username
                    },
                    {
                        room_id: room.id
                    }
                ]
            }
        })
        .then(player => {
            if (player) {
                io.emit('joinedUser', player)
                socket.join(room.id);
            } else {
                Player.create({
                    username,
                    room_id: room.id
                })
                .then(player => {
                    io.emit('joinedUser', player)
                    socket.join(room.id);
                })
                .catch(err =>{
                    console.log(err)
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    })

    socket.on('fetchPlayers', (payload) => {
        Player.findAll({
            where: {
                room_id: payload.id
            }
        })
        .then(players => {
            socket.emit('getPlayers', {
                players,
                room: payload
            })
        })
        .catch(err => {
            console.log(err)
        })
    })

    socket.on('fetchLogicTopic', () => {
        LogicTopic.findAll()
            .then(questions => {
                socket.emit('showLogicTopic', questions)
            })
            .catch(err => {
                socket.emit('showError', err)
            })
    })

    socket.on('fetchGeneralTopic', () => {
        GeneralTopic.findAll()
            .then(questions => {
                socket.emit('showGeneralTopic', questions)
            })
            .catch(err => {
                socket.emit('showError', err)
            })
    })

    socket.on('fetchRiddleTopic', () => {
        RiddleTopic.findAll()
            .then(questions => {
                socket.emit('showRiddleTopic', questions)
            })
            .catch(err => {
                socket.emit('showError', err)
            })
    })
})

http.listen(3000, () => {
    console.log('connect to 3000')
})