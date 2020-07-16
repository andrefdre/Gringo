var express = require ('express');
var app = express();
var serv =require('http').Server(app);

app.get('/',function(req,res) {
res.sendFile(__dirname + '/client/index.html');
});

app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);	

var io =require('socket.io')(serv,{});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('join',function(data){
	  console.log(data.reason);
  });
});



