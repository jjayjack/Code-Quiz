var question = document.querySelector("#question");
var choices = Array.from(document.querySelector(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        Question: "What",
        Answer: ["Choice1","Choice2","Choice3","Choice4"],
        correctAnswer: "Choice3"
    },
    {
        Question: "What",
        choice1: "answer",
        choice2: "answer",
        choice1: "answer",
        choice1: "answer",
        answer: answer,
    },
    {
        Question: "What",
        choice1: "answer",
        choice2: "answer",
        choice1: "answer",
        choice1: "answer",
        answer: answer,
    },
    {
        Question: "What",
        choice1: "answer",
        choice2: "answer",
        choice1: "answer",
        choice1: "answer",
        answer: answer,
    },
    {
        Question: "What",
        choice1: "answer",
        choice2: "answer",
        choice1: "answer",
        choice1: "answer",
        answer: answer,
    },
]

document.querySelector("#start").addEventListener
("click", function(){
    display();
        var setTimer;
            setTimer = setInterval(function() {

            }, 1000);
            });

function display(){
    console.log(question[0].q);
    var answer = document.createElement("button");
    answer.setAttribute("class","user-ans");
    answer.textContent =questions[0].answer[0];
    document.body.appendChild(answer);
}

const SCORE_POINTS = 100;
const MAX_QUESTION = 5;

startGame 