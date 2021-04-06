var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
// var progressBarFull = document.querySelector("#progressBarFull");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        correctAnswer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        correctAnswer: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        correctAnswer: 4,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        correctAnswer: 3,
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choice1: "Javascript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        correctAnswer: 4,
    },
]

var h3 = document.createElement('h3');
var questionBox = document.createTextNode("");
h3.appendChild(questionBox);
document.getElementById("question").appendChild(h3);
console.log(questionBox);
var SCORE_POINTS = 100;
var MAX_QUESTIONS = 5;

function startGame() {
    score = 0
    availableQuestions = [...questions]
    var output = [];
    getNewQuestion()
}

function getNewQuestion() {
    if (availableQuestions.length === 0){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html') //change to highScores
    }

    var questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex] //keeps track of current question displayed

    //replace question for questions
    question.innerText = currentQuestion.question;

    //replaces choice for each question
    choices[0].innerText = currentQuestion.choice1;
    choices[1].innerText = currentQuestion.choice2;
    choices[2].innerText = currentQuestion.choice3;
    choices[3].innerText = currentQuestion.choice4;

    //after each question is answered, question is removed from availableQuestions
    availableQuestions.splice(questionIndex, 1);

    //move to the next question
    // output.push (
    //     `<div class="slide">
    //     <div class ="question"`> ${currentQuestion.question}</div>
    //     <div class="answers"> ${choices.join("")} </div>`
    //     </div>)


    

}

document.querySelector("#choice1").addEventListener("click", function(){
    //check to see if choice 
    if ( 1 == currentQuestion.correctAnswer) {
        //text pop up for correct or incorrect
            questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 1 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
        //if incorrect reduce time

    } 
});

document.querySelector("#choice2").addEventListener("click", function(){
    //check to see if choice 
    if ( 2 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 1 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";

    }
});

document.querySelector("#choice3").addEventListener("click", function(){
    //check to see if choice 
    if ( 3 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 1 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
    }
});

document.querySelector("#choice4").addEventListener("click", function(){
    //check to see if choice 
    if ( 4 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 1 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
    }
}); 

//change color of box on click
// document.getElementById("button").onclick = changeColor;
// function changeColor(){
    // var clickedQuestion = document.getElementsByClassName("choice-container");
    // document.clickedQuestion.style.backgroundColor = "violet";
    // return false;
// }

startGame();

        //  Timer once start button is activated            //
document.querySelector("#start").addEventListener("click", function(){
    display();
        var setTimer;
            setTimer = setInterval(function() {
                counter--;
                if(counter == 0) {
                    clearInterval(setTimer);
                }

            }, 1000);
            });

function display(){
    console.log(question[0].q);
     var answer = document.createElement("button");
     answer.setAttribute("class","user-ans");
     answer.textContent =questions[0].answer[0];
     console.log(answer.textContent);

   document.body.appendChild(answer);
 }

 //High Score saved
 localStorage.setItem("lastname", "Smith");
 document.getElementById("finalScore").innerHTML = localStorage.getItem("username")
