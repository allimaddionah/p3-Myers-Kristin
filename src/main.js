const layerOne = document.getElementById('layer-one');
const myButtons = document.getElementsByClassName('block');
const myBlueButtons = document.getElementsByClassName('block-blue');
const myYellowButtons = document.getElementsByClassName('block-yellow');
const myPurpleButtons = document.getElementsByClassName('block-purple');

const layerTwo = document.getElementById('layer-two');
const myButtonsLayerTwo = document.getElementsByClassName('block-2');

const layerThree = document.getElementById('layer-three');
const myButtonsLayerThree = document.getElementsByClassName('block-3');

const layerFour = document.getElementById('layer-four');
const myButtonsLayerFour = document.getElementsByClassName('block-4');


//Functions
function loopThrough() {
  const changeColor = () => {
    this.classList.toggle('pink');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughBlue() {
  const changeColor = () => {
    this.classList.toggle('blue');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughYellow() {
  const changeColor = () => {
    this.classList.toggle('yellow');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughPurple() {
  const changeColor = () => {
    this.classList.toggle('purple');
  };
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughNumber()  {
  const changeColor2 = () => {
    this.classList.toggle('red');
  };

  for (let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  }
};

function loopThroughNumberOrange()  {
  const changeColor2 = () => {
    this.classList.toggle('orange');
  };

  for (let i = 0; i < Number(this.textContent) * 2; i++) {
    setTimeout(changeColor2, i * 1000);
  }
};

function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

function changeLayer2() {
  const swap2 = () => {
    layerTwo.classList.add('hide2');
    layerThree.classList.remove('hide2');
  }
  setTimeout(swap2, Number(this.textContent) * 2 * 1000);
};

function changeLayer3() {
  const swap3 = () => {
    layerThree.classList.add('hide3');
    layerFour.classList.remove('hide3');
  }
  setTimeout(swap3, Number(this.textContent) * 2 * 1000);
};


//Layer one
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < myBlueButtons.length; i++) {
  myBlueButtons[i].addEventListener('click', loopThroughBlue);
  myBlueButtons[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < myYellowButtons.length; i++) {
  myYellowButtons[i].addEventListener('click', loopThroughYellow);
  myYellowButtons[i].addEventListener('click', changeLayer);
};

for (let i = 0; i < myPurpleButtons.length; i++) {
  myPurpleButtons[i].addEventListener('click', loopThroughPurple);
  myPurpleButtons[i].addEventListener('click', changeLayer);
};

//layer two
for (let i = 0; i < myButtonsLayerTwo.length; i++) {
  myButtonsLayerTwo[i].addEventListener('click', loopThroughNumber);
  myButtonsLayerTwo[i].addEventListener('click', changeLayer2);
};

//Layer three
for (let i = 0; i < myButtonsLayerThree.length; i++) {
  myButtonsLayerThree[i].addEventListener('click', loopThroughNumberOrange);
  myButtonsLayerThree[i].addEventListener('click', changeLayer3);
};


/* Fortune code starts.......................................................................................................................... */

const fortunes = [
  "You will win the lottery next week!",
  "You will find $100 in the street this week.",
  "You will live a long and happy life.",
  "You will prosper if you work hard.",
  "You will find something you love in door number 3.",
  "The fortune you seek is under another number.",
  "You do not want this fortune...pick again.",
  "Your actions speak louder than words.",
  "Good things come to those who wait.",
  "If a turtle doesn't have a shell is it naked or homeless?"
];

function tellFortune() {

  const randomNumber = Math.floor(Math.random() * fortunes.length);

 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

/* Fortune code ends.......................................................................................................................... */
