module.exports = io => {
    io.on('connection', (socket) => {
        console.log(`A client has been connected. ID ${socket.client.id}`)        
    
        socket.on('SOCKET_LOGIN', (data) => {
            console.log(`${data.username} is trying to connect...`)
        });

        socket.on('disconnect', (socket) => {
            console.log('A client has been disconected')
        });
    });
}