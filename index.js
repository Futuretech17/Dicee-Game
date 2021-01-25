// Array of url to pics.

var picArray = ["images/dice1.png", "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png", "images/dice6.png"]

// Random Number Generator.
function randomGenerator() {
  var randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}

var randomNumber1 = randomGenerator();
var randomNumber2 = randomGenerator();

// To change the image src attribute value
document.querySelector(".img1").setAttribute("src" , picArray[randomNumber1]);
document.querySelector(".img2").setAttribute("src" , picArray[randomNumber2]);

// Conditional Statements

function winnerDeterminer() {
  if (randomNumber1 === randomNumber2){
    return (document.querySelector("h1").innerHTML = "Draw!");
  }else if (randomNumber1 > randomNumber2){
    return (document.querySelector("h1").innerHTML = " 🥇 Player 1 Wins!");
  }
  else{
    return (document.querySelector("h1").innerHTML = "Player 2 Wins! 🥇");
  }
}
winnerDeterminer();
