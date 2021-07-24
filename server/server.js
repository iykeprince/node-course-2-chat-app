const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publiPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publiPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'mike@example.com',
        text: 'Hey, What is going on?',
        createdAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail)
    });

    //asssignment
    socket.emit('newMessage', {
        from: 'Jon Snow',
        text: 'Can we meet up at 6pm',
        createdAt: '2020-09-29'
    })

    socket.on('createMessage', (message) => {
        console.log(message)
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});



server.listen(port, () => console.log('Server is up on port 3000'))