const quizData = [
  {
    question: "The average person does what thirteen times a day?",
    a: "Laughs",
    b: "Pees",
    c: "Drinks water",
    d: "Lies",
    correct: "a",
  },
  {
    question: "Unicorn is the national animal of which country?",
    a: "Montserrat",
    b: "England",
    c: "Vanuatu",
    d: "Scotland",
    correct: "d",
  },
  {
    question: "What is the answer to life?",
    a: "Meaning",
    b: "Success",
    c: "42",
    d: "Life",
    correct: "c",
  },
  {
    question: "What is the most common colour of toilet paper in the world?",
    a: "Beige",
    b: "Pink",
    c: "Yellow",
    d: "White",
    correct: "d",
  },
  {
    question: "Coprastastaphobia is the fear of what?",
    a: "Catastrophes",
    b: "Situations",
    c: "Pain",
    d: "7",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuestion = 0;
let answer = undefined;
let score = 0;
let correctAnswers = "Answers <br><br>";

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    } else {
      correctAnswers += `${quizData[currentQuestion].question} :  ${
        quizData[currentQuestion][quizData[currentQuestion].correct]
      } <br><br>`;
      console.log(correctAnswers);
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions.</h2>

            <h6>${correctAnswers}</h6>
            
            <button onClick="location.reload()">Reload</button>`;
    }
  }
});
