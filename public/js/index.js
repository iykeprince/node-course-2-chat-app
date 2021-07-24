var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey, This is Andrew'
    // });

    socket.on('newMessage', (message) => {
        console.log(message);
    })
    
    socket.emit('createMessage', {
        from: 'David Lannister', 
        text: 'Hey Jon, I\'m going to kill you bastard.'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email){
    console.log('New email', email);
})