var question = document.getElementById("question");
var responses = document.querySelector(".responses");
var result = document.getElementById("result");
var startQuiz = document.getElementById("start-button");
var quizBody = document.getElementById("quiz-body");
var introBody = document.getElementById("intro-body");
var secs = document.getElementById("seconds");
var i = 0;
var score = 0;
secs.textContent = 75;

var resultArray = ["Correct!", "Wrong!"];
var answer0 = document.getElementById("answer0");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");

var questions = [
    {
        Question: "What year did the Georgia General Assembly vote to build the Western and Atlantic Railroad?",
        answers: {
            response1: "1. 1808",
            response2: "2. 1824",
            response3: "3. 1836",
            response4: "4. 1854",
        },
        correctAnswer: "3. 1836",
    },
    {
        Question: "What year did Atlanta host the Summer Olympics?",
        answers: {
            response1: "1. 1988",
            response2: "2. 1990",
            response3: "3. 1992",
            response4: "4. 1996",
        },
        correctAnswer: "4. 1996",
    },
    {
        Question: "Who is the current mayor of Atlanta?",
        answers: {
            response1: "1. Maynard Jackson",
            response2: "2. Keisha Lance Bottoms",
            response3: "3. Brian Kemp",
            response4: "4. J. Edgar Thompson",
        },
        correctAnswer: "2. Keisha Lance Bottoms",
    },
    {
        Question: "What team won the most recent Major Sport Championship for Atlanta?",
        answers: {
            response1: "1. Braves",
            response2: "2. Falcons",
            response3: "3. Hawks",
            response4: "4. Thrashers",
        },
        correctAnswer: "1. Braves",
    },
    {
        Question: "How many streets have the name Peachtree in it in Atlanta?",
        answers: {
            response1: "1. 28",
            response2: "2. 55",
            response3: "3. 61",
            response4: "4. 102",
        },
        correctAnswer: "2. 55",
    }
]

function countdown() {
    secs = parseInt(secs.textContent);
    console.log(secs);
    if(secs > 1) {
        setInterval(function(){secs-1;},1000)
    }
    else {

    }
}

startQuiz.addEventListener("click", buildQuiz);
startQuiz.addEventListener("click", countdown);

function buildQuiz() {
    if (quizBody.style.display === "none") {
        quizBody.setAttribute("style", "display: inline-block");
    }
    introBody.setAttribute("style", "display: none");
    $(question).text(questions[i].Question);
    $(answer0).text(questions[i].answers.response1);
    $(answer1).text(questions[i].answers.response2);
    $(answer2).text(questions[i].answers.response3);
    $(answer3).text(questions[i].answers.response4);
    $(".responses").on("click", function () {
        if (this.textContent === questions[i].correctAnswer) {
            result.textContent = "Correct!";
            score++;
            i++;
        }
        else {
            result.textContent = "Wrong!";
            score--;
            i++;
        }
        setNextQuestion();
    });
}

function setNextQuestion() {
    console.log(i);
    console.log(questions.length);
    console.log(questions.length < i);
    if (questions.length <= i) {
        setTimeout(function () {
            quizBody.setAttribute("style", "display: none");
            result.setAttribute("style", "display: none");
        }, 750);
        // Go to Intials and Submit page
    }
    else {
        // Go to next question
        $(question).text(questions[i].Question);
        $(answer0).text(questions[i].answers.response1);
        $(answer1).text(questions[i].answers.response2);
        $(answer2).text(questions[i].answers.response3);
        $(answer3).text(questions[i].answers.response4);
    }
}