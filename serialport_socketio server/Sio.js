var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
   // socket.emit('echo', { hello: 'world' });//发json格式的数据
    socket.emit('echo', 5);
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
});
server.listen(3000);

