var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.emit('echo', { hello: 'world' });
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
});
server.listen(3000);

