angular.module('mimicMe', []);
//
//****
// controller.js:
//****
angular.module('mimicMe').controller('MainController', ['$scope', 'SockService', function ($scope, SockService) {
  $scope.players = [];
  $scope.waitModelVisible = false;
  SockService.onPlayer(function (statement) {
    // console.log("in the onPlayer");
    returnStatement= JSON.parse(statement)
    // console.log(returnStatement.action === "wait")
    if (returnStatement.action === "wait") {

      $scope.waitModelVisible = true;
      // console.log($scope.waitModelVisible)
      $scope.$apply();


    } else if (returnStatement.action === "startGame") {
      // $scope.players.push(returnStatement.player1).push(returnStatement.player2);
      // console.log($scope.players);

      $scope.waitModelVisible = false;

      startMultiGame();
      $scope.$apply();
    } else if (returnStatement.action === "endGame") {
      console.log("endGame",returnStatement.winner);
      document.getElementById('level').innerHTML = returnStatement.winner+"Won!";

      // console.log("returnStatement: ", returnStatement)
      // theEnd(returnStatement.winner);



        // document.getElementById('level').innerHTML = returnStatement.winner+"Won!";
        // document.getElementById('quitGameButton').innerHTML = "Done";
        // document.getElementById('quitGameButton').style.margin = "60px 0 0 -73px";
        // document.getElementById('playAgainButton').style.display = "none";
        // document.getElementById('successDes').innerHTML = "Click the done button and choose a new topic.";

        //
        // document.getElementById('playAgainButton').innerHTML = "Start Over";
        // document.getElementById('playAgainButton').onclick = function (){
        //   startOver();
        //   whichTopic(topic);
        //   init();
        //
        // };

        // $('#success').show();
        // $scope.$apply();




    //
    // } else if (returnStatement.action === 'nextLevel') {
    //   // $scope.successModel= true;
    //   document.getElementById('level').innerHTML = "Level " + level + " Complete!";
    //   $('#success').show();
    //   level++;
    //   $scope.$apply();

    //
    }
    // $scope.players.push(player);
    // console.log("These are our players: ", $scope.players)
    // $scope.$apply();
  });

  // $scope.playGame = function () {
  //   var obj = {}
  //   obj.action = "playGame";
  //   SockService.onopen(obj)
  // };


  $scope.clickGameButton = function (topic){
    console.log("clickGameButton pressed")
    $scope.nameModelVisible = true;
    // $scope.currentTopic = topic;
  };


  $scope.newPlayer = function () {
    $scope.nameModelVisible = false;
    // b = birds.length;
    // $scope.players.push($scope.name);
    // console.log($scope.players);


    var obj = {}
    obj.action = "introduce";
    obj.name = $scope.name;
    // obj.topic = $scope.currentTopic;
    // console.log("topic New Player",$scope.currentTopic);
    SockService.onopen($scope.name);

  };

  $scope.multiPlayAgainButton = function () {
    var obj = {}
    obj.action = "increase level";
    obj.name = $scope.name;
    SockService.sendMessage(JSON.stringify(obj));
  };

}]);
//
//****
// // service.js
//****
angular.module('mimicMe').service('SockService', [function () {
//
  var onPlayerCallback;


  function onopen (name) {
    var socket = new WebSocket('ws://localhost:8080');
    socket.onopen = function () {
      var obj = {};
      obj.action = "introduce";
      obj.name = name
      // obj.topic = topic
      socket.send(JSON.stringify(obj));
    };
    socket.onmessage = function (event) {
      console.log("Player received:", event.data);
      if (onPlayerCallback) {
        onPlayerCallback(event.data);
      }
    };
  };



  var onPlayer = function (callback) {
    console.log("callback is being set")
    onPlayerCallback = callback;
  };

  var sendMessage = function (name) {
    if (socket) {
      socket.send(name);
    }

  };

  return {
    onPlayer: onPlayer,
    sendMessage: sendMessage,
    // newPlayer: newPlayer,
    onopen: onopen
  };
//
}]);
