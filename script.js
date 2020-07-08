// Main things to work on: High Scores HTML and rankings
var question = document.getElementById("question");
var responses = document.querySelector(".responses");
var result = document.getElementById("result");
var startQuiz = document.getElementById("start-button");
var quizBody = document.getElementById("quiz-body");
var introBody = document.getElementById("intro-body");
var seconds = document.getElementById("seconds");
var i = 0;
var score = 0;
var secs = 76;

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

var interval;

function countdown() {
    interval = setInterval(function () {
        if (secs === 0) {
            clearInterval(interval);
            console.log(secs);
            stopQuiz();
            // Stop quiz and send to input initials and submit
        }
        secs--;
        seconds.textContent = secs;
    }, 1000)
}

$(startQuiz).on("click", function() {
    buildQuiz;
    countdown();
})

function buildQuiz() {
    if (quizBody.style.display === "none") {
        quizBody.setAttribute("style", "display: inline-block");
    }
    i = 0;
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
    if (questions.length <= i) {
        stopQuiz();
        console.log(secs);
        clearInterval(interval);
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

function stopQuiz() {
    score = score + secs;
    $("#result").empty();
    $("#quiz-body").empty();
    $("#result").text("Your Score Is: " + score);
    $("<h5>").text("Finished! Congrats on learning more about Atlanta!").appendTo("#quiz-body");
    var initialsInput = $("<input>").attr("type", "text").attr("placeholder", "Please insert your initials");
    var submtiBtn = $("<button>").attr("type", "submit").text("Submit").attr("id","submitBtn");
    $("#quiz-body").append(initialsInput, submtiBtn);
    $(submtiBtn).on("click", function () {
        localStorage.setItem($("input").val(), score);
        window.location.href = "./leaderboard.html";
    })
}

var array = Object.keys(localStorage);
for (var i = 0; i < array.length; i++) {
    localStorage[array[i]];
    // provides the initials
    console.log(array[i]);
    // provides the value
    console.log(localStorage[array[i]]);
    console.log(i);
    $("<div>").attr("id","standings").appendTo("div");
    $("<textarea>").attr("id","firstPlace").text("1." + " " + array[i] + " " + localStorage[array[i]]).appendTo("div");
    // Store all scores in local storage and work on HTML to show top scores (sorting from best to worst score)
    var goBackBtn = $("<button>").attr("id", "goBackBtn").text("Go Back");
    var clearHighScores = $("<button>").attr("id","clearHighScores").text("Clear Highscores");
    var buttons = $("<div>");
    $(buttons).append(goBackBtn, clearHighScores);
}