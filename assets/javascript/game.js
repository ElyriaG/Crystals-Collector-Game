
var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var wins = 0
var losses = 0
var playerScore = 0
var goalNumber = 0

$(document).ready(function () {
   
    // Crystal Numbers

    // CRYSTAL ONE
    var numberOne = Math.floor(Math.random() * 3 + 1);
    $("#one").on("click", function () {
        playerScore = playerScore + numberOne
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            wins ++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        else {
            console.log("Keep trying!")
        }
    });
    console.log("Crystal 1 - " + numberOne);

    // CRYSTAL TWO
    var numberTwo = Math.floor(Math.random() * 3 + 4);
    $("#two").on("click", function () {
        playerScore = playerScore + numberTwo
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            wins ++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        else {
            console.log("Keep trying!")
        }
    });
    console.log("Crystal 2 - " + numberTwo);

    // CRYSTAL THREE
    var numberThree = Math.floor(Math.random() * 3 + 7);
    $("#three").on("click", function () {
        playerScore = playerScore + numberThree
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            wins ++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        else {
            console.log("Keep trying!")
        }
    });
    console.log("crystal 3 - " + numberThree);

    // CRYSTAL FOUR
    var numberFour = Math.floor(Math.random() * 3 + 10);
    $("#four").on("click", function () {

        playerScore = playerScore + numberFour
        $("#score").text(playerScore);

        if (playerScore === goalNumber) {
            $("#score").text("You Won!");
            wins ++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        else {
            console.log("Keep trying!")
        }
        
    });
    console.log("crystal 4 - " + numberFour);


    // Random Goal Number
    var newGoalNumber = function () {
        for (var i = 0; i < 121; i++) {
            goalNumber = Math.floor(Math.random() * 100 + 9);
            $("#goal").text(goalNumber);
        }
        
    };

    // New Game Button
    $(".NewGame").on("click", function () {
        newGoalNumber();
        playerScore = 0;
        $("#score").text("0");
    });

    // if (wins = 10) {
    //     (".crystal-divs").html("<div class="tenor-gif-embed" data-postid="9547714" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"> <a href="https://tenor.com/view/youwonnothing-gif-9547714">Youwonnothing GIF</a> from <a href="https://tenor.com/search/youwonnothing-gifs">Youwonnothing GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>")
    //     )};

})







