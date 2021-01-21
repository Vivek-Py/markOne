var readlineSync = require('readline-sync')
var score = 0

var highScore = [
  {
    name: "Vivek",
    score: 3,
  },
  {
    name: "Scott",
    score: 1,
  },
]

function newUser(){
  var userName = readlineSync.question("May I know your name? ")
  console.log("Welcome " + userName + " to my quiz." + "\n")
}

var questions = [
  {
    question: "Where does vivek live?",
    answer: "delhi",
  },
  {
    question: "Where does vivek want to work?",
    answer: "microsoft",
  },
  {
    question: "What is vivek's fav snack?",
    answer: "samosa",
  }
]

function askQuestion(){
  for(var i = 0; i<3; i++){
    var currentQuestion = questions[i]
    console.log(currentQuestion.question)
    checkAnswer(currentQuestion.answer)
  }
  console.log("Yay! You scored " + score)
}

function checkAnswer(someAnswer){
  var userAnswer = readlineSync.question()
  if(userAnswer == someAnswer)
  {
    score++
    console.log("Correct!")
    console.log("Current Score: " + score + "\n")
  }
  else{
    score--
    console.log("Incorrect!")
    console.log("Current Score: " + score + "\n")
  }
}

function showScores(){
  console.log("\n" + "Check out some of the high scores. If you think your name should be here then send me a screenshot of your score." + "\n")
  for(var i = 0; i<2; i++){
    var currentScore = highScore[i]
    console.log(currentScore.name + ":" + currentScore.score)
  }
}

newUser()
askQuestion()
showScores()