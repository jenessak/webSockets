

var foodMultibutton = document.getElementById('foodMultiStartGame');
foodMultibutton.onclick = function (event) {
  event.preventDefault();
  $('#nameModel').show();
  topic = 'food';


  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";

  whichTopic(topic);

};

var animalsMultibutton = document.getElementById('animalsMultiStartGame');
animalsMultibutton.onclick = function (event) {
  event.preventDefault();
  $('#nameModel').show();
  topic = 'animals';

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";

  whichTopic(topic);


};

var schoolMultibutton = document.getElementById('schoolMultiStartGame');
schoolMultibutton.onclick = function (event) {
  event.preventDefault();
  $('#nameModel').show();
  topic = 'school';


  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";

  whichTopic(topic);

};

var spaceMultibutton = document.getElementById('spaceMultiStartGame');
spaceMultibutton.onclick = function (event) {
  event.preventDefault();
  // document.getElementById("nameHeader").innerHTML = "Science Game";
  $('#nameModel').show();
  topic = 'space';

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";

  whichTopic(topic);

};


var cancelButton = document.getElementById('nameCancelButton');
cancelButton.onclick = function (event) {
  event.preventDefault();
  $('#nameModel').hide();

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "none";
  document.getElementById("animalSubject").style.display = "none";
  document.getElementById("foodSubject").style.display = "none";
  document.getElementById("printInt").style.display = "none";
  document.getElementById("multiGame").style.display = "block";
};

var multiGo = document.getElementById('nameGoButton');
multiGo.onclick = function (event) {
  // sendPlayer();
  startMultiGame();
  var name = document.getElementById('nameInput').value;
  console.log(name);
};


startMultiGame = function () {
  event.preventDefault();
  $("#topbar").hide();
  $('#nameModel').hide();
  $("#homeFooter").hide();

  document.getElementById("spaceSubject").style.display = "none";
  document.getElementById("schoolSubject").style.display = "none";
  document.getElementById("theGame").style.display = "block";
  document.getElementById("animalSubject").style.display = "none";
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


    document.getElementById("multiGame").style.display = "block";
    document.getElementById("theGame").style.display = "none";
    for (var i = 0; i < pictures.length; i++) {
      pictures.shift();
    };
  }
  init();
};
