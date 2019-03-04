const EVENTS = require('./events')
const MessageModel = require('../app/models/messages')

module.exports = io => {
    io.on('connection', (socket) => {
        console.log(`A client has been connected. ID ${socket.client.id}`)        
    
        socket.on('disconnect', (data) => {
            console.log(`A client has ben disconected ID ${socket.client.id}`)
        });
    });
}