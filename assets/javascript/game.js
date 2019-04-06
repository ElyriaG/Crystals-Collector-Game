
var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var wins = 0
var losses = 0
var playerScore = 0
var goalNumber = 0


// Random Goal Number
 // Creating Goal Number
 var newGoalNumber = function () {
    for (var i = 0; i < 121; i++) {
        goalNumber = Math.floor(Math.random() * 100 + 9);
        $("#goal").text(goalNumber);
    }
    
    };

newGoalNumber()


// Crystal Numbers
$(document).ready(function () {
    var numberOne = Math.floor(Math.random() * 3 + 1);
    $("#one").on("click", function () {
        playerScore = playerScore + numberOne
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            $("#wins").text(+1);
            newGoalNumber ();
        }
        if (playerScore > goalNumber){
            $("#score").text("You Lost!");
            $("#losses").text(+1);
        }
        else {
            console.log("You suck!")
        }
    });
    console.log(numberOne);


    var numberTwo = Math.floor(Math.random() * 3 + 4);
    $("#two").on("click", function () {
        playerScore = playerScore + numberTwo
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            $("#wins").text(+1);
            newGoalNumber ();
        }
        if (playerScore > goalNumber){
            $("#score").text("You Lost!");
            $("#losses").text(+1);
        }
        else {
            console.log("You suck!")
        }
    });
    console.log(numberTwo);


    var numberThree = Math.floor(Math.random() * 3 + 7);
    $("#three").on("click", function () {
        playerScore = playerScore + numberThree
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            $("#wins").text(+1);
            newGoalNumber ();
        }
        if (playerScore > goalNumber){
            $("#score").text("You Lost!");
            $("#losses").text(+1);
        }
        else {
            console.log("You suck!")
        }
    });
    console.log(numberThree);


    var numberFour = Math.floor(Math.random() * 3 + 10);
    $("#four").on("click", function () {

        playerScore = playerScore + numberFour
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            $("#wins").text(+1);
            newGoalNumber ();
        }
        if (playerScore > goalNumber){
            $("#score").text("You Lost!");
            $("#losses").text(+1);
        }
        else {
            console.log("You suck!")
        }
    });
    console.log(numberFour);


   
   
    

    

})







