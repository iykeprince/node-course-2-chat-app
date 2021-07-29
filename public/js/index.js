var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.on('newMessage', (message) => {
        console.log('newMessage', message);
        var li = jQuery('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        jQuery('#messages').append(li);
    })
    
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email){

   jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]');

    console.log('message form',jQuery('[name=message]').val());
    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function(){
        messageTextbox.val('')
    });
})

var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function(position){
       socket.emit('createLocationMessage', {
           latitude: position.coords.latitude,
           longitude: position.coords.longitude
       })
    }, function(error){
        alert('Unable to fetch location');
    })
})