var question = document.getElementById("question");
var responses = document.querySelector(".responses");
var result = document.getElementById("result");
var startQuiz = document.getElementById("start-button");
var quizBody = document.getElementById("quiz-body");
var introBody = document.getElementById("intro-body");
var secs = document.getElementById("seconds");
var i = 0;
secs.value = 75;

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
        Answer: "2. Keisha Lance Bottoms",
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
    setTimeout('Decrement()', 60);
}

function Decrement() {
    secs--;
}

startQuiz.addEventListener("click", buildQuiz);
startQuiz.addEventListener("click", countdown);

function buildQuiz() {
    if (quizBody.style.display === "none") {
        quizBody.setAttribute("style", "display: inline-block");
    }
    introBody.setAttribute("style", "display: none");
    question.textContent = questions[i].Question;
    answer0.textContent = questions[i].answers.response1;
    answer1.textContent = questions[i].answers.response2;
    answer2.textContent = questions[i].answers.response3;
    answer3.textContent = questions[i].answers.response4;
    // potentially have this as what you can use and have checkanswer() called at end of buildquiz()
    // i++;
}

function checkAnswer() {
    if(answer === questions[i].correctAnswer) {

    }
    else {
        
    }
    // i++;
}