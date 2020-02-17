const app = require('express')();
const http = require('http').Server(app);
global.io = require('socket.io')(http);
const util = require('util');
const port = 1337;
const clients = [];

// Start the server
http.listen(port, () => {
  console.log('listening on *:' + port);
});

// Serve web client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

const ForceMessages = {
  MapInfo: require("./ForceMessage/MapInfo"),
  Join: require("./ForceMessage/Join"),
  MatchReady: require("./ForceMessage/MatchReady"),
  StartMatch: require("./ForceMessage/StartMatch"),
  StartTurn: require("./ForceMessage/StartTurn"),
};

// When a client connects, bind each desired event to the client socket
io.on('connection', socket => {
	//track connected clients via log
	clients.push(socket.id);
  const clientConnectedMsg = `User connected with socket.id=${socket.id}, total: ${clients.length}`;
	io.emit('server_info', clientConnectedMsg);
	console.log("CLIENT CONNECTED: ", clientConnectedMsg);

  // Callback for any received message
  socket.use((packet, next) => {
    console.log("PACKET RECEIVED: ", packet);
    return next();
  });

	// track disconnected clients via log
	socket.on('disconnect', () => {
		clients.pop(socket.id);
    const clientDisconnectedMsg = `User disconnected with socket.id=${socket.id}, total: ${clients.length}`;
		io.emit('server_info', clientDisconnectedMsg);
		console.log("CLIENT DISCONNECTED: ", clientDisconnectedMsg);
	})

	// special event to make the server give its next message
  // modify this for custom responses
	socket.on('next_command', (msg, callback) => {
    const next = { a: { a: { a: 1 } }, b: 2 };
		io.emit('next_command', next);
    console.log("NEXT SENT: ", next);
    if (callback instanceof Function) callback(next);
	});

  for (let forceMessage of Object.values(ForceMessages))
    socket.on(`force_${forceMessage.event}`, forceMessage.emit);
});
