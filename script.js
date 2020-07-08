var question = document.getElementById("question");
var responses = document.querySelector(".responses");
var result = document.getElementById("result");
var startQuiz = document.getElementById("start-button");
var quizBody = document.getElementById("quiz-body");
var introBody = document.getElementById("intro-body");
var secs = document.getElementById("seconds");
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
            1.: "1808",
            2.: "1824",
            3.: "1836",
            4.: "1854",
        },
        correctAnswer: "3.",
    },
    {
        Question: "What year did Atlanta host the Summer Olympics?",
        answers: {
            1.: "1988",
            2.: "1990",
            3.: "1992",
            4.: "1996",
        },
        correctAnswer: "4.",
    },
    {
        Question: "Who is the current mayor of Atlanta?",
        answers: {
            1.: "Maynard Jackson",
            2.: "Keisha Lance Bottoms",
            3.: "Brian Kemp",
            4.: "J. Edgar Thompson",
        },
        Answer: "2.",
    },
    {
        Question: "What team won the most recent Major Sport Championship for Atlanta?",
        answers: {
            1.: "Braves",
            2.: "Falcons",
            3.: "Hawks",
            4.: "Thrashers",
        },
        correctAnswer: "1.",
    },
    {
        Question: "How many streets have the name Peachtree in it in Atlanta?",
        answers: {
            1.: "28",
            2.: "55",
            3.: "61",
            4.: "102",
        },
        correctAnswer: "2.",
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
    for (var i = 0; i < questions.length; i++) {
        question.textContent = questions[i].Question;
        answer0.textContent = questions[i].answers[1];
        answer1.textContent = questions[i].answers[2];
        answer2.textContent = questions[i].answers[3];
        answer3.textContent = questions[i].answers[4];
    }
}


// buildQuiz();

// function WriteQuestions(Number) {
//     if (Number = 1) {
//         question.textContent = question1.Question;
//         answer0.textContent = question1.Option1;
//         answer1.textContent = question1.Option2;
//         answer2.textContent = question1.Option3;
//         answer3.textContent = question1.Option4;
//     }
//     else if (Number = 2) {
//         question.textContent = question2.Question;
//         answer0.textContent = question2.Option1;
//         answer1.textContent = question2.Option2;
//         answer2.textContent = question2.Option3;
//         answer3.textContent = question2.Option4;
//     }
//     else if (Number = 3) {
//         question.textContent = question3.Question;
//         answer0.textContent = question3.Option1;
//         answer1.textContent = question3.Option2;
//         answer2.textContent = question3.Option3;
//         answer3.textContent = question3.Option4;
//     }
//     else if (Number = 4) {
//         question.textContent = question4.Question;
//         answer0.textContent = question4.Option1;
//         answer1.textContent = question4.Option2;
//         answer2.textContent = question4.Option3;
//         answer3.textContent = question4.Option4;
//     }
//     else if (Number = 5) {
//         question.textContent = question5.Question;
//         answer0.textContent = question5.Option1;
//         answer1.textContent = question5.Option2;
//         answer2.textContent = question5.Option3;
//         answer3.textContent = question5.Option4;
//     }
// }