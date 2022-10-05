//Element vars to be manipulated
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
var ansStatus = $('.question-response')
var secondsLeft = 0;
var x = 0;
var secDelay = 0;
var submitBtn = $('#submit');
var user = $('#name');
var finalScore = $('#score')
var formEl = $('.form');
var scoreBox = $('.names');
var scoresBtn = $('#hi-scores');
var clearScores = $('#hiClear');
var blankList = [];
var userList = [];
var scoreList = [];
var hsMenu = $('.scores-list');
var homeBtn = $('#home');

if(JSON.parse(localStorage.getItem('users')) == null || JSON.parse(localStorage.getItem('scores')) == null){
    localStorage.setItem('users', JSON.stringify(userList));
    localStorage.setItem('scores', JSON.stringify(scoreList));
}


var questions = [
    {
        question: "Commonly used data types do NOT include.",
        answers: ['Strings','Booleans','Alert','Numbers'],
        correct: 'Alert'
    },

    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: ['Quotes','Curly-Brackets','Square-Brackets','Parenthesis'],
        correct: 'Parenthesis'
    },

    {
        question: "Arrays in JavaScript can be used to store.",
        answers: ['Numbers and Strings','Other Arrays','Booleans','All of the Above'],
        correct: 'All of the Above'
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ['Single Quotes','Double Quotes','Commas','Periods'],
        correct: 'Double Quotes'
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ['JavaScript','Terminal Bash','for loops','console.log()'],
        correct: 'console.log()'
    }
]


function clock(){
    secondsLeft--;
    timerEl.text(secondsLeft);
    if (secondsLeft <= 0){
        endQuiz();

    }
}


function startQuiz(){
    // Starts timer and presents user with questions and answers
    secondsLeft= 100;
    x = 0
    timer = setInterval(clock, 1000)
    startMenu.css('display', 'none');
    quizMenu.css('display','flex');
    timerEl.text(secondsLeft);
    ans.on('click',ansQuestion);

    // Assigns initial values to question and answer fields
    questionBox.text(questions[x].question);
    ansOne.text(questions[x].answers[0]);
    ansTwo.text(questions[x].answers[1]);
    ansThree.text(questions[x].answers[2]);
    ansFour.text(questions[x].answers[3]);  
}

function endQuiz(){
    clearInterval(timer);
    x = 0;
    quizMenu.css('display', 'none')
    recordMenu.css('display','flex');
    finalScore.text(secondsLeft);

}

function ansQuestion(index){
   
    var response = ''
    var response = questions[x].answers[index];
    console.log(x);
    
    if(response === questions[x].correct){
        ansStatus.text('Correct');
        ansStatus.css('display','flex');
        setTimeout(() => { ansStatus.css('display','none'); }, 2000);
        x++;
        indexChk();

    }

    else{
        secondsLeft = secondsLeft - 10;
        ansStatus.text('Incorrect');
        ansStatus.css('display','flex');
        setTimeout(() => { ansStatus.css('display','none'); }, 2000);
        x++;    
        indexChk();    
    }
}

function storeScore(event){
    event.preventDefault();
   
  var nameInput = user.val();
  console.log(nameInput);
  userList = JSON.parse(localStorage.getItem('users'));
  scoreList = JSON.parse(localStorage.getItem('scores'));
  console.log(secondsLeft);
  if (!nameInput) {
    return;
  }
    userList.push(nameInput);
    console.log(userList)
    
    scoreList.push(secondsLeft);
    console.log(scoreList);

    localStorage.setItem('users', JSON.stringify(userList));
    localStorage.setItem('scores', JSON.stringify(scoreList));
    
    recordMenu.css('display','none');
    startMenu.css('display','flex')
}
  
function populateScores(){
    startMenu.css('display','none');
    hsMenu.css('display','flex');
    scoresBtn.css('display','none')
    homeBtn.css('display','flex')
    scoreBox.empty();
    userList = JSON.parse(localStorage.getItem('users'));
    scoreList = JSON.parse(localStorage.getItem('scores'));

    console.log(userList);
    console.log(scoreList);

    for(var i=0; i < userList.length; i++) {
        var namesEl = $('<li>');
        namesEl.text(userList[i]+': '+scoreList[i]);
        namesEl.addClass('score_items');
        scoreBox.append(namesEl);
    }
}   

function wipeData(){
    scoreBox.empty();
    localStorage.setItem('users', JSON.stringify(blankList));
    localStorage.setItem('scores', JSON.stringify(blankList));
   
}

function goHome(){
    scoresBtn.css('display','flex');    
    homeBtn.css('display','none');
    hsMenu.css('display','none');
    startMenu.css('display','flex');
}

function indexChk(){
    if(x >= questions.length){
        endQuiz();
    }

    else{
        questionBox.text(questions[x].question);
        ansOne.text(questions[x].answers[0]);
        ansTwo.text(questions[x].answers[1]);
        ansThree.text(questions[x].answers[2]);
        ansFour.text(questions[x].answers[3]);
    }
}

startBtn.on('click', startQuiz);
formEl.on('submit', storeScore);
scoresBtn.on('click', populateScores);
clearScores.on('click', wipeData);
homeBtn.on('click',goHome)

