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

//starts with all questions hidden
//qOne.style.display = "block";

//if a right answer is clicked then add one to the local file otherwise it does nothing
if {right.addEventListener('click', function() {
    score++;
 localStorage.setItem('score', score);
});
} else {
    return
}


