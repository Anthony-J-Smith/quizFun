//variables
console.log('banana')
var startBtn = document.getElementById('startButton');
var qOne = document.getElementById('qOne');
var qTwo = document.getElementById('qTwo');
var qThree = document.getElementById('qThree');
var qFour = document.getElementById('qFour');
var qFive = document.getElementById('qFive');

var right = document.getElementsByClassName('right');
var wrong = document.getElementsByClassName('wrong');
var btn = document.getElementsByClassName('btn');
var score = 0;
var timer = duration, minutes, seconds;

//starts with all questions hidden
//qOne.style.display = "block";

//if a right answer is clicked then add one to the local file otherwise it does nothing
if right.addEventListener('click', function() {
    score++;
 localStorage.setItem('score', score);
 alert("Correct! You sure know your stuff!")
}){
} else {
    alert("wrong answer!");
    
}

//countdown to quiz over (starts when start is pressed)
if (startBtn.addEventListener("clicked", setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "4" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
        timer = duration;
    }
}, 1000));
}





