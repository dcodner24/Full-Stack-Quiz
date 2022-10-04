
//Element vars to be manipulated
var rootEl = $('#root');
var timerEl = $('#timeNum');
var startBtn = $('#start');
var startMenu = $('.start');
var quizMenu = $('.quiz');
var ansOne = $('#0');
var ansTwo = $('#1');
var ansThree = $('#2');
var ansFour = $('#3');

var recordMenu = $('.results');
var ans = $('.answer')
var questionBox = $('#question');


//Starting conditionds
var secondsLeft = 0;
var timer;



function startQuiz(){
    // Starts timer and presents user with questions and answers
    secondsLeft= 100;
    timer = setInterval(clock, 1000)
    startMenu.css('display', 'none');
    quizMenu.css('display','flex');
    timerEl.text(secondsLeft);
    ans.on('click',ansQuestion);

    // Assigns initial values to question and answer fields
    questionBox.text(questions[0].question);
    ansOne.text(questions[0].answers[0]);
    ansTwo.text(questions[0].answers[1]);
    ansThree.text(questions[0].answers[2]);
    ansFour.text(questions[0].answers[3]);  
}

function ansQuestion(clicked_question){
    console.log(clicked_question);
}


function clock(){
    secondsLeft--;
    timerEl.text(secondsLeft);
    if (secondsLeft <= 0){
        endQuiz();

    }
}

function endQuiz(){
    clearInterval(timer);
    quizMenu.css('display', 'none')
    recordMenu.css('display','flex');
}

startBtn.on('click',startQuiz);



//Questions coded as objects inside of an array for organization.

var questions = [
    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    }
]
