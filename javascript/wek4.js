$
(document).ready(function(){
  var loss =0;
  var win = 0;
  var crystal;
  var number =0
  var randomNumber= randomNum();

  function crystalNum(){
    return{
      crystalOne:{
        value: Math.floor(Math.random()*10)+1,
        crystalPic: "../images/blue.png"
      },
      crystalTwo:{
        value: Math.floor(Math.random()*12)+1,
        crystalPic: "../images/yellow.png"
      },
      crystalThree:{
        value: Math.floor(Math.random()*7)+1,
        crystalPic: "../images/red.png"
      },
      crystalFour:{
        value: Math.floor(Math.random()*10)+1,
        crystalPic: "assets/images/green.png"
      }
    }
  }


  function randomNum() {
    return Math.floor(Math.random()*102) +19;
  }
function updateDom(winner) {
$("#win-area").empty();  

if (winner === true) {
  $("#winner").append($("<p>").text("You Win!"));
  newGame();
  newRandomNumber();
}

else if (winner === false){
  $("#winner").append($("<p>").text("You Lose!"));
  newGame();
  newRandomNumber();
}
// wins loss score

var wSpan = $("<span>").text(win);
var lSpan = $("<span>").text(loss);

var pWins = $("<p>").text("Wins: ");
var pLosses = $("<p>").text("Losses: ");

pWins.append(wSpan);
pLosses.append(lSpan);

$("#win-area").append(pWins);
$("#win-area").append(pLosses);
}

function newGame(){
  number = 0;
  crystal = crystalNum();
  randomNumber= randomNum();
  $("#random-area").text(randomNumber);
}

newGame();
updateDom();
newCrystalNumbers();
newRandomNumber();

// populate your number
function newRandomNumber(){
  var scoreDiv = $("<div id='score-number'>").text(number);
  $("#score-area").html();
  $("#score-area").html(scoreDiv);
}

// make crystal and crystal button
function newCrystalNumbers(){
  for (var key in crystal){
    var crystalsDiv = $("<div class='crystalButton' data-name='"+ key +"'>");
    var crystalImg = $("<img alt='Pic of Crystal' class='crystal-pic'>").attr("src", crystal[key].crystalPic);
    crystalsDiv.append(crystalImg);
    $("#crystal-area").append(crystalsDiv);  
  }
}

// on-click

$(".crystalButton").on("click", function(event){
  changeYourNumber($(this));
  newRandomNumber();

  if (number === randomNumber){
    win++;
    newGame()
    updateDom(true);
  }
  else if (number > randomNumber){
    loss++;
    newGame()
    updateDom(false);
  }
})

// change number after click
function changeYourNumber(crystals){
  number += crystal[crystals.attr("data-name")].value;
}

// start upthe game


})