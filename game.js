//adding strcuture

const Question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
//adding objects
let Questions = [
    {
      id: 0,
      question: "what does html stand for?",

        choice1: "hyper type markdown",
        choice2: "hot text ml",
        choice3: "hyper text markup language",
        choice4: "mnothing",
        answer: 3
    },
    {
      id: 1,
      question: "what does css stand for?",

        choice1: "computer style sheet",
        choice2: "controled style sheets",
        choice3: "centering style sheet",
        choice4: "cascading style sheets",
        answer: 4
    },
    {
      id: 2,
      question: "what does js stand for",

        choice1: "script",
        choice2: "java",
        choice3: "java script",
        choice4: "nothing",
        answer: 3
    },
    {
      id: 3,
      question: "what languare is first used when creating a webpage?",

        choice1: "javascriptt",
        choice2: "css",
        choice3: "python",
        choice4: "HTML",
        answer: 4

    },
    {
      id: 4,
      question: "what languare is used to add logic to structure?",

        choice1: "javascriptt",
        choice2: "css",
        choice3: "python",
        choice4: "HTML",
        answer: 1
    }
  ];

//CONSTANTS
const correct = 1;
const max_q = 5;
//adding logic
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...Questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= max_q) {
        localStorage.setItem("mostRecentScore", score); 
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (i) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = i.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = "incorrect"
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
        }

        selectedChoice.parentElement.classList.add(classToApply);

        if(classToApply === "correct") {
            incrementScore(correct);
        }

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();   
        }, 1000);
        
    });
});

var finalScore = ""
incrementScore = num => {
    score += num;
    finalScore.innerText = score;
  };
// function highscore(){
// if(choices) == true || 
// }


startGame();