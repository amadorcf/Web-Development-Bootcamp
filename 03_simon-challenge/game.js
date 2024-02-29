
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    playSound(randomChosenColour);

}


button = $(".btn");

button.click(function(event){

    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    // Flash the button pushed
    $("#"+userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Sounds the color button pushed
    playSound(userChosenColour);

});


function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();  
}

/*
$("#yellow").click(function(){
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();  

    console.log($("#yellow").attr('id'));
});

$("#green").click(function(){
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log($("#green").attr('id'));
});
*/