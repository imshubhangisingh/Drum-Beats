
var numberOfDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons.length; i++) {

  numberOfDrumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnnimation(buttonInnerHTML);
  });
}

//Keyboard Press
document.addEventListener("keypress", function (e) {
  playSound(e.key);
  buttonAnnimation(e.key);
});

function playSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//Button Animation
function buttonAnnimation(buttonKey) {

  var animateButton = document.querySelector("." + buttonKey);

  animateButton.classList.add("pressed");

  setTimeout(function () {
    animateButton.classList.remove("pressed");
  }, 100);
}







