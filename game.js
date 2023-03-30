// this is where to add logic
const question = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");
//console.log(choices);

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const Questions = [
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

  const coorect = 1;
  const max_q = 5;

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...Questions];
    console.log(availableQuestions);
    getNewQuestion();
  }


getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestions = availableQuestions[questionIndex];
    question.innerText = currentQuestions.question;
}

startGame();