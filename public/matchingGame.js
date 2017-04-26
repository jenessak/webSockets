var pictures = [];
var done = [];
var order = [];
var level = 1;
var checkCards = $("#checkButton");
var bannerMessage = $("#bannerMessage");
var correctCards = {};
var spotsFilled = 0;
$('#success').hide();
$("#checkButton").hide();
document.getElementById("animalNav").style.borderBottom = "solid white 3px";
// $('#nameModel').hide();
$('#multiPlayAgainButton').hide();

// $('#MulticheckButton').hide();
// $("#topbar").hide();
var topic = '';


function showCheckButton () {
  if (spotsFilled >= 5) {
    $("#checkButton").show();
    // console.log('showCheckButton');
  };

};


function whichTopic(theme){
  topic = theme;
  // console.log("this is which topic" + theme);
  for (var i = 0; i < data.length; i++) {
    if (data[i].topic == theme){
      pictures.push(data[i]);
    }
  }
  if (theme == "animals"){
    document.getElementById('headerTitle').innerHTML = "Animales";
    document.getElementById("headerTitle").style.marginLeft = "36px";

  } else if (theme == "space") {
    document.getElementById('headerTitle').innerHTML = "Ciencia";
    document.getElementById("headerTitle").style.marginLeft = "50px";


  } else if (theme == "school") {
    document.getElementById('headerTitle').innerHTML = "Escuela";
    document.getElementById("headerTitle").style.marginLeft = "50px";

  } else {
    document.getElementById('headerTitle').innerHTML = "Comida";
    document.getElementById("headerTitle").style.marginLeft = "50px";


    // //header
    // $('.st0').style.fill = //boarder
    // $('.st2').style.fill = //banner boarder
    // $('.st3').style.fill = ""; //banner fill
    // $('.st4').style.fill = //back boarder
    // $('.st5').style.fill = "";//back button fill
    //
    // // footer
    // $('#topFooter').style.background-color = //boarder
    // $('#bottomFooter').style.background-color = ""; //fill
    // $('#checkButton:hover').style.background-color =
    // $('#checkButton').style.background-color =
    //
    //
    // // model
    // $('.st7').style.fill =   //x quit
    // $('#playAgainButton').style.background-color =  "";//? fill color
    // $('#quitGameButton').style.color = //font color
    // $('#quitGameButton').style.border =  "2px solid";
    // $('#successMessage h1').style.background-color = ""; //fill
    // $('#successTop').style.background-color =  //boarder
    //
  }
  // console.log("copied pictures", pictures);
};

var animalsLink = document.getElementById("animalsStartGame");
animalsLink.onclick = function (event) {
  event.preventDefault();
  // $("#thePlayers").hide();

  whichTopic('animals');
  document.getElementById("theGame").style.display = "block";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";




  document.getElementById('buttonHeader').onclick = function (event) {
    event.preventDefault();
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    $('#moreSlots').html( '' );
    $("#topbar").show();
    $("#homeFooter").show();

    level = 1;
    spotsFilled = 0;
    pictures = [];
    order = [];
    document.getElementById("animalSubject").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    for (var i = 0; i < pictures.length; i++) {
      pictures.shift();
    };
  }
  init();

};


var schoolLink = document.getElementById("schoolStartGame");
schoolLink.onclick = function (event) {
  event.preventDefault();
  // $("#thePlayers").hide();

  whichTopic('school');
  document.getElementById("theGame").style.display = "block";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";



  document.getElementById('buttonHeader').onclick = function (event) {
    event.preventDefault();
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    $('#moreSlots').html( '' );
    $("#topbar").show();
    $("#homeFooter").show();

    level = 1;
    spotsFilled = 0;
    pictures = [];
    order = [];
    document.getElementById("schoolSubject").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    for (var i = 0; i < pictures.length; i++) {
      pictures.shift();
    };
  }
  init();

};

var spaceLink = document.getElementById("spaceStartGame");
spaceLink.onclick = function (event) {
  event.preventDefault();
  // $("#thePlayers").hide();

  whichTopic('space');
  document.getElementById("theGame").style.display = "block";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";




  document.getElementById('buttonHeader').onclick = function (event) {
    event.preventDefault();
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    $('#moreSlots').html( '' );
    $("#topbar").show();
    $("#homeFooter").show();

    level = 1;
    spotsFilled = 0;
    pictures = [];
    order = [];
    document.getElementById("spaceSubject").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    for (var i = 0; i < pictures.length; i++) {
      pictures.shift();
    };
  }
  init();

};

var foodLink = document.getElementById("foodStartGame");
foodLink.onclick = function (event) {
  event.preventDefault();
  // $("#thePlayers").hide();

  whichTopic('food');
  document.getElementById("theGame").style.display = "block";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";


  document.getElementById('buttonHeader').onclick = function (event) {
    event.preventDefault();
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' );
    $('#moreSlots').html( '' );
    $("#topbar").show();
    $("#homeFooter").show();

    level = 1;

    pictures = [];
    order = [];
    document.getElementById("foodSubject").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    // for (var i = 0; i < pictures.length; i++) {
    //   pictures.shift();
    //   order.shift();
    // };

  }
  init();

};


// var tabs = {
//   school:"schoolSubject",
//   game:"theGame",
//   animal:"animalSubject",
//   food:"foodSubject",
//
// }
// var tabs  = [
//   "schoolSubject",
//   "theGame",
//   "animalSubject",
//   "foodSubject",
//   "spaceSubject",
//   "printInt"
// ]
// function hideAllButThis(event, id, idNav){
//   event.preventDefault();
//   for (var i = 0; i < tabs.length; i++){
//     document.getElementById(tabs[i]).style.display = "none";
//   }
//   document.getElementById(id).style.display = 'block';
//   document.getElementById(id).style.borderBottom = "solid white 3px";
// }

var schoolNav = document.getElementById("schoolNav");
schoolNav.onclick = function (event) {
  event.preventDefault();

  document.getElementById("schoolNav").style.borderBottom = "solid white 3px";
  document.getElementById("spaceNav").style.borderBottom = "0px";
  document.getElementById("animalNav").style.borderBottom = "0px";
  document.getElementById("foodNav").style.borderBottom = "0px";
  document.getElementById("printNav").style.borderBottom = "0px";
  document.getElementById("multiNav").style.borderBottom = "0px";



  document.getElementById("schoolSubject").style.display = "block";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";



};

var animalNav = document.getElementById("animalNav");
animalNav.onclick = function (event) {
  event.preventDefault();

  document.getElementById("animalNav").style.borderBottom = "solid white 3px";
  document.getElementById("schoolNav").style.borderBottom = "0px";
  document.getElementById("spaceNav").style.borderBottom = "0px";
  document.getElementById("foodNav").style.borderBottom = "0px";
  document.getElementById("printNav").style.borderBottom = "0px";
  document.getElementById("multiNav").style.borderBottom = "0px";


  document.getElementById("animalSubject").style.display = "block";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";


};

var spaceNav = document.getElementById("spaceNav");
spaceNav.onclick = function (event) {
  event.preventDefault();

  document.getElementById("spaceNav").style.borderBottom = "solid white 3px";
  document.getElementById("schoolNav").style.borderBottom = "0px";
  document.getElementById("animalNav").style.borderBottom = "0px";
  document.getElementById("foodNav").style.borderBottom = "0px";
  document.getElementById("printNav").style.borderBottom = "0px";
  document.getElementById("multiNav").style.borderBottom = "0px";


  document.getElementById("spaceSubject").style.display = "block";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";


};

var foodNav = document.getElementById("foodNav");
foodNav.onclick = function (event) {
  event.preventDefault();
  document.getElementById("foodNav").style.borderBottom = "solid white 3px";
  document.getElementById("schoolNav").style.borderBottom = "0px";
  document.getElementById("spaceNav").style.borderBottom = "0px";
  document.getElementById("animalNav").style.borderBottom = "0px";
  document.getElementById("printNav").style.borderBottom = "0px";
  document.getElementById("multiNav").style.borderBottom = "0px";


  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "block";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "none";


};


var printNav = document.getElementById("printNav");
printNav.onclick = function (event) {
  event.preventDefault();
  document.getElementById("printNav").style.borderBottom = "solid white 3px";
  document.getElementById("schoolNav").style.borderBottom = "0px";
  document.getElementById("spaceNav").style.borderBottom = "0px";
  document.getElementById("animalNav").style.borderBottom = "0px";
  document.getElementById("foodNav").style.borderBottom = "0px";
  document.getElementById("multiNav").style.borderBottom = "0px";


  // console.log("food Nav");

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "block";
  document.getElementById("multiGame").style.display = "none";


};

var multiNav = document.getElementById("multiNav");
multiNav.onclick = function (event) {
  event.preventDefault();
  document.getElementById("multiNav").style.borderBottom = "solid white 3px";
  document.getElementById("printNav").style.borderBottom = "0px";
  document.getElementById("schoolNav").style.borderBottom = "0px";
  document.getElementById("spaceNav").style.borderBottom = "0px";
  document.getElementById("animalNav").style.borderBottom = "0px";
  document.getElementById("foodNav").style.borderBottom = "0px";

  // console.log("food Nav");

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";


};



 function startOver() {
  document.getElementById('level').innerHTML = "You Finished the Game!";
  document.getElementById('quitGameButton').innerHTML = "Quit Game";
  document.getElementById('quitGameButton').style.marginTop = "30px";
  document.getElementById('playAgainButton').style.display = "block";
  document.getElementById('playAgainButton').style.marginTop = "0px";
  document.getElementById('successDes').innerHTML = "Let’s go onto the next level";
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  $('#moreSlots').html( '' );
  $("#topbar").show();
  $("#homeFooter").show();


  level = 1;
  spotsFilled = 0;
  pictures = [];
  order = [];
};


var quitButton = document.getElementById("quitGameButton");
quitButton.onclick = function (event) {
  event.preventDefault();
  if (topic == "animals") {

    startOver();

    document.getElementById("spaceSubject").style.display = "none";
    document.getElementById("schoolSubject").style.display = "none";
    document.getElementById("theGame").style.display = "none";
    document.getElementById("animalSubject").style.display = "block";
    document.getElementById("foodSubject").style.display = "none";




  } else if (topic == "space") {
    startOver();
    document.getElementById("spaceSubject").style.display = "block";
    document.getElementById("schoolSubject").style.display = "none";
    document.getElementById("theGame").style.display = "none";
    document.getElementById("animalSubject").style.display = "none";
    document.getElementById("foodSubject").style.display = "none";
    // console.log("this is quit pictures " + pictures);
  } else if (topic == "school") {
    startOver();

    document.getElementById("spaceSubject").style.display = "none";
    document.getElementById("schoolSubject").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    document.getElementById("animalSubject").style.display = "none";
    document.getElementById("foodSubject").style.display = "none";


  } else {
    startOver();

    document.getElementById("spaceSubject").style.display = "none";
    document.getElementById("schoolSubject").style.display = "none";
    document.getElementById("theGame").style.display = "none";
    document.getElementById("animalSubject").style.display = "none";
    document.getElementById("foodSubject").style.display = "block";



  }
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  $('#moreSlots').html( '' );
  // level = 1;

  pictures = [];
  order = [];

};

  // Reset the game
//   correctCards = 0;
//   $('#cardPile').html( '' );
//   $('#cardSlots').html( '' );
//   $('#moreSlots').html( '' );
//   $('#success').hide();
//   $("#checkButton").hide();
  // $('#checkButton').hide();


function handleDropOut(event, ui){

    // $(this).on( "dropactivate", function( event, ui ) {} );
  // console.log("droppable out", $(this));
  $(this).droppable('option', 'accept', '#cardPile div');
  // $(this).droppable( "enable" );
      //  console.log('how many' + howMany);

};

function handleCardSlots(event, ui){
  ui.draggable.addClass('correct');
  ui.draggable.draggable('correct'); //lets you grab the card after placement

  $(this).droppable('correct');
  $(this).droppable("disabled");
  ui.draggable.position({of: $(this), my: 'left top', at: 'left top'});

};


function handleCardDrop(event, ui) {
  // console.log("droppable drop", ui.draggable.attr("id"));

  ui.draggable.addClass('correct');
  ui.draggable.draggable('correct'); //lets you grab the card after placement

  $(this).droppable('correct');
  // $(this).droppable( "disable" );
  $(this).droppable('option', 'accept', "#"+ui.draggable.attr("id"));
  ui.draggable.position({of: $(this), my: 'left top', at: 'left top'});

  var slotNumber = $(this).data('picture');
  var cardName = ui.draggable.data('picture');

  if (slotNumber == cardName){
    correctCards[cardName] = true;
    spotsFilled++;
    // console.log("Spots Filled" + spotsFilled);
    showCheckButton();
  } else {
    correctCards[cardName] = false;
    spotsFilled++;
    // console.log("Spots Filled" + spotsFilled);

    showCheckButton();

  }


  // console.log(correctCards[cardName]);
  // showCheckButton();
};

//
// function handleRevert(event, ui) {
//   if (correctCards != ui.draggable.data('picture')) {
//
//   }
//
//
// }

  $('#checkButton').click(function (ui) {
    var correct = 0;
    for (var i = 0; i < order.length; i++) {
      // var theme = pictures[i].topic
      var cardName = pictures[i].imageName;
      var $card = $("#picture"+ i);
      // console.log("$card " + $card);
      var $img = $card.find("img");
      if (correctCards[cardName] == true) {
        pictures[i].completed = true;
        // console.log('in check button '+pictures[i].completed);
        $img.css("border", "7px solid #17a555");
        $card.draggable( "option", "disabled", true );
        correct++;
        // console.log(pictures[i].imageName + pictures[i].completed)
      } else {
        $img.css("border", "7px solid #BF1B2F");
        // $this.draggable({revert:true});

        // $card.draggable("option", "revert", true);
      }
    }



    if (correct == 5) {
      // Hide the success message
      spotsFilled = 0;
      for (var i = 0; i < 5; i++) {
        pictures.shift();
        order.shift();
      }
      if (pictures.length == 0 ) {
        // document.getElementById('level').innerHTML = "You Finished the Game!";
        document.getElementById('quitGameButton').innerHTML = "Done";
        document.getElementById('quitGameButton').style.margin = "60px 0 0 -73px";
        document.getElementById('playAgainButton').style.display = "none";
        document.getElementById('successDes').innerHTML = "Click the done button and choose a new topic.";

        //
        // document.getElementById('playAgainButton').innerHTML = "Start Over";
        // document.getElementById('playAgainButton').onclick = function (){
        //   startOver();
        //   whichTopic(topic);
        //   init();
        //
        // };

        $('#success').show();

      } else {

        document.getElementById('level').innerHTML = "Level " + level + " Complete!";
        $('#success').show();
        level++;
    }

      success.sort(function() {return Math.random() - .5});
      for (var i = 0; i < success.length; i++) {
        document.getElementById("bannerMessage").innerHTML = success[i].message + " " + correct +" out of 5 correct";
      }
    } else {
      if (correct <= 1){
        success1.sort(function() {return Math.random() - .5});
        for (var i = 0; i < success1.length; i++) {
          document.getElementById("bannerMessage").innerHTML = success1[i].message + " " + correct +" out of 5 correct";
        }
      } else if (correct <=2 ) {
        success2.sort(function() {return Math.random() - .5});
        for (var i = 0; i < success2.length; i++) {
          document.getElementById("bannerMessage").innerHTML = success2[i].message + " " + correct +" out of 5 correct";
        }
      } else if (correct <=3 ) {
        success4.sort(function() {return Math.random() - .5});

        for (var i = 0; i < success4.length; i++) {
          document.getElementById("bannerMessage").innerHTML = success4[i].message + " " + correct +" out of 5 correct";
        }
      } else if (correct <=4 ) {
        success4.sort(function() {return Math.random() - .5});
        for (var i = 0; i < success4.length; i++) {
          document.getElementById("bannerMessage").innerHTML = success4[i].message;

        }
      }

    };



  });





function init() {

  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  $('#moreSlots').html( '' );
  $('#success').hide();
  $("#checkButton").hide();
  $("#topbar").hide();
  $("#homeFooter").hide();



  document.getElementById('bannerMessage').innerHTML = "Match the images with the correct word.";
  document.getElementById('headerLevel').innerHTML = "Level " + level;

  pictures.sort(function() {return Math.random() - .5});

    for (var i = 0; i < 5; i++) {
      // console.log("this is pictures" + pictures[i]);

      var $card = $('<div></div>');
      var $img = $('<img>')
        .attr('src', pictures[i].image)
        .attr('draggable', false)
        .addClass("card-image")
        .appendTo($card);
      $card.attr('id', "picture"+i)
        .data( 'picture', pictures[i].imageName )
        .appendTo( '#cardPile' )
        .draggable({
          containment: '#content',
          // stack: '#cardPile div',
          cursor: 'move',
          revert: "invalid",   //makes it so you can't drag it back down.
          // drag: cardStartPostion

    })


        order.push(i);
        // console.log(pictures[i].image);
        // console.log(pictures[i].imageName);

    }

  
  order.sort(function() {return Math.random() - .5});

  // Create the card slots
  for (var i = 0; i < order.length; i++) {
    var number = order[i];
    $('<div>' +  pictures[number].imageName + '<img class="box" src='+ "../images/assets/box.png" + '>'+ '</div>')
      // .attr('class', 'boxAlign')
      .data( 'picture', pictures[number].imageName )
      .appendTo( '#cardSlots' )
      .droppable({
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop,
        out: handleDropOut
      });
  }



//
//Create a boolean instance start off at false and then when one is placed change it to true.
//

  //These are the extra boxes
    for ( var i=0; i <= 4; i++ ) {
        $('<div></div>')
        // .attr('class', 'boxAlign')
        .data( 'picture', '' )
        .appendTo( '#moreSlots' )
        .droppable({
          accept: '#cardPile div',
          hoverClass: 'hovered',
          drop: handleCardDrop,
          out: handleDropOut
        });
    }




}
