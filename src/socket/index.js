module.exports = app => {
    const io = require('socket.io')(app)
    require('./socketManager')(io)
}