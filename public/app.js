var myApp = angular.module('mimicMe', []);
//
// controller.js:
myApp.controller('MainController', ['$scope', 'SockService', function ($scope, SockService) {
  console.log("Things are awesome")
  $scope.players = [];

  SockService.onPlayer(function (player) {
    $scope.players.push(player);
    console.log("These are our players: ", $scope.players)
    $scope.$apply();
  });

  $scope.test = "Wabba wabba wack wack do wop wop shimmy"

  $scope.newPlayer = function () {
    console.log("we are in new player")
    var obj = {}
    obj.action = "introduce";
    obj.name = $scope.name
    SockService.onopen(obj)
  };
}]);
//
// // service.js
myApp.service('SockService', [function () {
//
  var onPlayerCallback;


  function onopen (name) {
    var socket = new WebSocket('ws://localhost:8080');
    socket.onopen = function () {
      var obj = {};
      obj.action = "introduce";
      obj.name = name
      socket.send(JSON.stringify(obj));
    };
  };

  socket.onmessage = function (event) {
    console.log("Player received:", event.data);
    if (onPlayerCallback) {
      onPlayerCallback(event.data);
    }
  };

  var onPlayer = function (callback) {
    onPlayerCallback = callback;
  };

  var sendMessage = function (name) {
    socket.send(name);
  };

  return {
    onPlayer: onPlayer,
    sendPlayer: sendPlayer,
    // newPlayer: newPlayer,
    onopen: onopen
  };
//
}]);
