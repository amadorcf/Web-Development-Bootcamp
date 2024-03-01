var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStart = false;
var level = 0;

// GAME START
var keyStart = $(document).keydown(function () {

    if (!gameStart) {
        $(".container").show();
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStart = true;
    }
});

var button = $(".btn");
button.click(function (event) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("User pattern: \n", userClickedPattern);

    // Sounds the color button pushed
    playSound(userChosenColour);

    // Animate button pressed
    animatePress(userChosenColour);

    // Check the answer
    checkAnswer(userClickedPattern.length - 1); //level-1
});

// CHECK LEVEL FUNCTION
function checkAnswer(currentLevel) {
    //console.log(gamePattern[currentLevel] + " vs "+ userClickedPattern[currentLevel]);

    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        console.log("yes");
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        gameStart = false;
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 300);
        $(".container").hide();
        $("#level-title").text("GAME OVER");
        $("#level-title").append("<br>");
        $("#level-title").append("<p>Press any key to restart the game</p>");


        startOver();

        
    }
}

function nextSequence() {
    // Reset User pattern
    userClickedPattern = [];

    // Update Level
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("Computer pattern: \n", gamePattern);

    // Flash the selected ramdon button
    flashButton(randomChosenColour);

    // Play random selectec button sound
    playSound(randomChosenColour);
}

function flashButton(color) {
    $("#" + color)
        .fadeOut(100)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStart = false;
    console.clear();
}
