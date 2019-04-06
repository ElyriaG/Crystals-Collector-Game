
var randomNumbers = [1,2,3,4,5,6,7,8,9,10,11,12]
var wins = 0
var losses = 0
var playerScore = 0
var goalNumber = 0
var playerChoice = ""


// Crystal Numbers
// $(document).ready(function() {
var numberOne = Math.floor(Math.random() * randomNumbers.length + 1);
$("#one").on("click", function() {
    console.log(numberOne);
    playerScore = playerScore + numberOne
    $("#score").text(playerScore);
})

var numberTwo = Math.floor(Math.random() * randomNumbers.length + 1);
$("#two").on("click", function() {
    console.log(numberTwo);
   playerScore = playerScore + numberTwo
   $("#score").text(playerScore);
})

var numberThree = Math.floor(Math.random() * randomNumbers.length + 1);
$("#three").on("click", function() {
    console.log(numberThree);
    playerScore = playerScore + numberThree
    $("#score").text(playerScore);
})

var numberFour = Math.floor(Math.random() * randomNumbers.length + 1);
$("#four").on("click", function() {
    console.log(numberFour);
   playerScore = playerScore + numberFour
   $("#score").text(playerScore);
})







// Random Goal Number
for (var i = 0; i < 121; i++) {
    var goalNumber = Math.floor(Math.random() * 100 + 9); 
    }
    $("#goal").text(goalNumber);