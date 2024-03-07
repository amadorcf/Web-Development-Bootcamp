// Insert addEventListener 
// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
// addEventListener() Registra un evento a un objeto en específico. El Objeto especifico (en-US) puede ser un simple elemento en un archivo, el mismo documento , una ventana o un XMLHttpRequest (en-US).

/*
Example:
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("You click 'W'");
}
*/

var drumsButtons = document.querySelectorAll(".drum");

for(var i=0; i<drumsButtons.length; i++){

    // Catpure the clicks from MOUSE
    drumsButtons[i].addEventListener("click", function(){
        var keyClicked = this.innerHTML;
        
        makeSound(keyClicked);
        buttonAnimation(keyClicked);
    });

    

}

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;   
    
        default:
            console.log("Push a correct key!");
            break;
    }
}


// Catpure the event that occurs some key was pressed from KEYBOARD
document.addEventListener("keydown", function(event){
        console.log(event.key);
        makeSound(event.key);
        buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100)
}