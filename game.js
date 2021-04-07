var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice-text");
var scoreText = document.querySelector("#score");
var currentQuestion = {};
var score = 0;
var questionIndex = 0;
var availableQuestions = [];
var secondsLeft = 60;
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        correctAnswer: 3,
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
var MAX_QUESTIONS = 5;

document.getElementById("start").addEventListener("click", function(e){
    e.preventDefault();
    display();
    startGame();
            //  Timer once start button is activated            //
    secondsLeft = 60;
    var timer = document.querySelector(".timer")
    var timerInterval = setInterval(function(){
        secondsLeft--;
        if (secondsLeft < 0) {
            secondsLeft = 0;
            
        } 
        timer.textContent = ("Time Left: " + secondsLeft);
        //stops quiz once time is 0
        if(secondsLeft <= 0) {
            endGame();
            clearInterval(timerInterval);
    
        }
    }, 1000);

    })

function startGame() {
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0){
        secondsLeft = 0;
        return //change to highScore
    }

    questionIndex = Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]; //keeps track of current question displayed

    //replace question for questions
    question.innerText = currentQuestion.question;

    //replaces choice for each question
    choices[0].innerText = currentQuestion.choice1;
    choices[1].innerText = currentQuestion.choice2;
    choices[2].innerText = currentQuestion.choice3;
    choices[3].innerText = currentQuestion.choice4;

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
        secondsLeft -= 10;


    } 
        //after each question is answered, question is removed from availableQuestions
        availableQuestions.splice(questionIndex, 1);
        console.log(availableQuestions);
    
        //move to the next question
        getNewQuestion();
});

document.querySelector("#choice2").addEventListener("click", function(){
    //check to see if choice 
    if ( 2 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 2 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
        secondsLeft -= 10;

    }
        //after each question is answered, question is removed from availableQuestions
        availableQuestions.splice(questionIndex, 1);
        console.log(availableQuestions);
    
        //move to the next question
        getNewQuestion();
});

document.querySelector("#choice3").addEventListener("click", function(){
    //check to see if choice 
    if ( 3 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 3 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
        secondsLeft -= 10;
    }
        //after each question is answered, question is removed from availableQuestions
        availableQuestions.splice(questionIndex, 1);
        console.log(availableQuestions);
    
        //move to the next question
        getNewQuestion();
});

document.querySelector("#choice4").addEventListener("click", function(){
    //check to see if choice 
    if ( 4 == currentQuestion.correctAnswer) {
        questionBox.textContent = "Correct!";
        //add points to score if correct
            score += 100;
            scoreText.innerText = score;
    }else if ( 4 !== currentQuestion.correctAnswer) {
        questionBox.textContent = "Incorrect!";
        secondsLeft -= 10;
    }
        //after each question is answered, question is removed from availableQuestions
        availableQuestions.splice(questionIndex, 1);
        console.log(availableQuestions);
    
        //move to the next question
        getNewQuestion();
}); 

function endGame(){
    
    // document.createElement('h4');
    // h4.textContent("Game Over!");
    document.getElementById("question-container").style.display = "none";
    document.getElementById("highscore").style.display = "block";
    document.getElementById("finalScore").innerHTML = score;

}

function highScores(){
    document.getElementById("highScores").style.display = "block";
    var scoreFinal = localStorage.getItem("mostRecentScore");
    var user = localStorage.getItem("name");
    document.getElementById("scoreFinal").innerHTML = scoreFinal;
    document.getElementById("user").innerHTML = user;
}
document.getElementById("highscore-btn").addEventListener("click", function(e){
    e.preventDefault();
    highScores();
})
document.getElementById("reset").addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("mostRecentScore", "");
    localStorage.setItem("name", "");
    highScores();
})
document.getElementById("saveScoreBtn").addEventListener("click", function(e){
    e.preventDefault();
//High Score saved
var input = document.getElementById("initials");
    localStorage.setItem('mostRecentScore', score);
    localStorage.setItem("name", input.value);
    highScores();
})


function display(){
    //add reveal of container
    document.getElementById("question-container").style.display = "block";

 }

 
