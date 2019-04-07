
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
            wins++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        if (wins === 10) {
            $(".crystal-divs").html('<img id="thug-life" src="https://res.cloudinary.com/teepublic/image/private/s--Sz8smB9k--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534735418/production/designs/3043325_0.jpg" />');
        }
        if (losses === 10) {
            $(".crystal-divs").html('<img id="git-gud" src=" https://i.redd.it/e8qwz7z7gkbz.jpg" />');
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
            wins++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        if (wins === 10) {
            $(".crystal-divs").html('<img id="thug-life" src="https://res.cloudinary.com/teepublic/image/private/s--Sz8smB9k--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534735418/production/designs/3043325_0.jpg" />');
        }
        if (losses === 10) {
            $(".crystal-divs").html('<img id="git-gud" src=" https://i.redd.it/e8qwz7z7gkbz.jpg" />');
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
            wins++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        if (wins === 10) {
            $(".crystal-divs").html('<img id="thug-life" src="https://res.cloudinary.com/teepublic/image/private/s--Sz8smB9k--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534735418/production/designs/3043325_0.jpg" />');
        }
        if (losses === 10) {
            $(".crystal-divs").html('<img id="git-gud" src=" https://i.redd.it/e8qwz7z7gkbz.jpg" />');
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
            wins++;
            $("#wins").text(wins);
            $("#equals").text("=");
        }
        if (playerScore > goalNumber) {
            $("#score").text("You Lost!");
            losses++;
            $("#losses").text(losses);
            $("#equals").text("\u2260");
        }
        if (wins === 10) {
            $(".crystal-divs").html('<img id="thug-life" src="https://res.cloudinary.com/teepublic/image/private/s--Sz8smB9k--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1534735418/production/designs/3043325_0.jpg" />');
        }
        if (losses === 10) {
            $(".crystal-divs").html('<img id="git-gud" src=" https://i.redd.it/e8qwz7z7gkbz.jpg" />');
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
            $("#equals").text("\u2260");
        }

    };

    // New Game Button
    $(".NewGame").on("click", function () {
        newGoalNumber();
        playerScore = 0;
        $("#score").text("0");
    });




})







