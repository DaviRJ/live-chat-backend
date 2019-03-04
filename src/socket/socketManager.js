const EVENTS = require('./events')

const users = [];

module.exports = io => {
    io.on('connection', (socket) => {

        console.log(`A client has been connected. ID ${socket.client.id}`)        
    
        socket.on(EVENTS.EVENT_LOGIN, (data) => {
            console.log(`${data.username} is trying to login...`)
        });

        socket.on('disconnect', (data) => {
            console.log(`A client has ben disconected ID ${socket.client.id}`)
        });
    });
}