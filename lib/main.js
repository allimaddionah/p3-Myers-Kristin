'use strict';

var layerOne = document.getElementById('layer-one');
var myButtons = document.getElementsByClassName('block');
var myBlueButtons = document.getElementsByClassName('block-blue');
var myYellowButtons = document.getElementsByClassName('block-yellow');
var myPurpleButtons = document.getElementsByClassName('block-purple');

var layerTwo = document.getElementById('layer-two');
var myButtonsLayerTwo = document.getElementsByClassName('block-2');

var layerThree = document.getElementById('layer-three');
var myButtonsLayerThree = document.getElementsByClassName('block-3');

var layerFour = document.getElementById('layer-four');
var myButtonsLayerFour = document.getElementsByClassName('block-4');

//Functions
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    _this.classList.toggle('pink');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughBlue() {
  var _this2 = this;

  var changeColor = function changeColor() {
    _this2.classList.toggle('blue');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughYellow() {
  var _this3 = this;

  var changeColor = function changeColor() {
    _this3.classList.toggle('yellow');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughPurple() {
  var _this4 = this;

  var changeColor = function changeColor() {
    _this4.classList.toggle('purple');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughNumber() {
  var _this5 = this;

  var changeColor2 = function changeColor2() {
    _this5.classList.toggle('red');
  };

  for (var i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  }
};

function loopThroughNumberOrange() {
  var _this6 = this;

  var changeColor2 = function changeColor2() {
    _this6.classList.toggle('orange');
  };

  for (var i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  }
};

function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayer2() {
  var swap2 = function swap2() {
    layerTwo.classList.add('hide2');
    layerThree.classList.remove('hide2');
  };
  setTimeout(swap2, Number(this.textContent) * 2 * 1000);
};

function changeLayer3() {
  var swap3 = function swap3() {
    layerThree.classList.add('hide3');
    layerFour.classList.remove('hide3');
  };
  setTimeout(swap3, Number(this.textContent) * 2 * 1000);
};

//Layer one
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};

for (var _i = 0; _i < myBlueButtons.length; _i++) {
  myBlueButtons[_i].addEventListener('click', loopThroughBlue);
  myBlueButtons[_i].addEventListener('click', changeLayer);
};

for (var _i2 = 0; _i2 < myYellowButtons.length; _i2++) {
  myYellowButtons[_i2].addEventListener('click', loopThroughYellow);
  myYellowButtons[_i2].addEventListener('click', changeLayer);
};

for (var _i3 = 0; _i3 < myPurpleButtons.length; _i3++) {
  myPurpleButtons[_i3].addEventListener('click', loopThroughPurple);
  myPurpleButtons[_i3].addEventListener('click', changeLayer);
};

//layer two
for (var _i4 = 0; _i4 < myButtonsLayerTwo.length; _i4++) {
  myButtonsLayerTwo[_i4].addEventListener('click', loopThroughNumber);
  myButtonsLayerTwo[_i4].addEventListener('click', changeLayer2);
};

//Layer three
for (var _i5 = 0; _i5 < myButtonsLayerThree.length; _i5++) {
  myButtonsLayerThree[_i5].addEventListener('click', loopThroughNumberOrange);
  myButtonsLayerThree[_i5].addEventListener('click', changeLayer3);
};

/* Fortune code starts.......................................................................................................................... */

var fortunes = ["You will win the lottery next week!", "You will find $100 in the street this week.", "You will live a long and happy life.", "You will prosper if you work hard.", "You will find something you love in door number 3.", "The fortune you seek is under another number.", "You do not want this fortune...pick again.", "Your actions speak louder than words.", "Good things come to those who wait.", "If a turtle doesn't have a shell is it naked or homeless?"];

function tellFortune() {

  var randomNumber = Math.floor(Math.random() * fortunes.length);

  document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

/* Fortune code ends.......................................................................................................................... */