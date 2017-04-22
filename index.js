var express = require('express');
var WebSocket = require('ws');


var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));

// EXPRESS ROUTES GO HERE:
// ...

var server = app.listen(app.get('port'), function () {
  console.log("Server listening on port", app.get('port'));
});

var wss = new WebSocket.Server({ server: server });

// WEBSOCKET COMMUNICATION GOES HERE:
//

var broadcast = function (player) {
  wss.clients.forEach(function (ws) {
    ws.send(player);
  });
};
// var gameNumber = 1;
// var games = [];
var players = [];

// var currenctGameOpen = function () {
//
// };

wss.on('connection', function (ws) {
  // THIS CODE RUNS WHEN A NEW CONNECTION IS MADE
  console.log("Client connected.");

  ws.on('message', function (name) {
    console.log("Received player from client:", name);
    var obj = JSON.parse(name);
    if (obj.action === "introduce") {
      var players = {}
      players.info = obj;
      players.conn = ws;
      players.push(name);
    }
    broadcast(name);
  });

  ws.on('close', function () {
    // THIS CODE RUNS WHEN THIS CONNECTION IS CLOSED
    console.log("Client disconnected.");
  });
});
