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
var games = [];
// var playersAnimals = [];
// var playersFood = [];
// var playersSchool = [];
// var playersSpace = [];
var players = [];
// var winner = [];
var numberOfPlayers = 2

// var currenctGameOpen = function () {
//
// };

wss.on('connection', function (ws) {
  // THIS CODE RUNS WHEN A NEW CONNECTION IS MADE
  console.log("Client connected.");

  ws.on('message', function (name) {

    var obj = JSON.parse(name);
    console.log("Received player from client:", obj.name);
    if (obj.action === "introduce") {
      var player = {};
      player.info = obj.name;
      // player.topic = obj.topic;
      player.level = 0;
      player.conn = ws;
      var responseObj = {};
      players.push(player);

      if (players.length === numberOfPlayers) {
        games.push(players);
        responseObj.action = "startGame";


        broadcast(JSON.stringify(responseObj));

      } else {
        responseObj.action = "wait";
        ws.send(JSON.stringify(responseObj));
      }



    // } else if (obj.action === "levelWon") {
    //
  } else if (obj.action === "increase level") {
    for (var i = 0; i < games.length; i++) {
      if (obj.name === games[i].name) {
        games[i].level += 1;
        if (games[i].level === 1) {
          responseObj.action = "endGame";
          responseObj.winner = game[i].name;
          broadcast(JSON.stringify(responseObj));
        } else {
          responseObj.action = "nextLevel";
          ws.send(JSON.stringify(responseObj));
        }
      }
    }



  }

  });

  ws.on('close', function () {
    // THIS CODE RUNS WHEN THIS CONNECTION IS CLOSED
    players = [];
    console.log("Client disconnected.");
  });
});
