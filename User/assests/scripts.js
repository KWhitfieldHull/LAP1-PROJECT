
const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtonsBlock = document.querySelector("#mainPageButtonsBlock");
const mainPageBlock = document.querySelector('#mainPageBlock')
const startQuizButton = document.querySelector('#startQuizButton')
const questionBlock = document.querySelector('#questionBlock')
const checkButton = document.querySelector('#checkButton')
const quizResults = document.querySelector('#quizResults')
const currentQuestionNumber = document.querySelector('#currentQuestionNumber')
const questionNumberSpan = document.querySelector('#questionNumberIterator')

let questionArr = []
let currentQuestion;
let questionNumber = 1;
let correctAnswer;

let answer1, answer2, answer3, answer4
answer1 = document.querySelector("#a1")
answer2 = document.querySelector("#a2")
answer3 = document.querySelector("#a3")
answer4 = document.querySelector("#a4")

const fetchQuestionData = async section => {
  try {
    const response = await fetch(`http://localhost:3000/questions/${section}`)
    const data = await response.json()
    //current sections questions are pushed to an array so we can display them
    data.forEach(element => {
      questionArr.push(element)
    });
    displayQuestion(questionArr)
  } catch (err) {
    console.error(err)
  }
}
function startQuiz() {
  //set the current section to 1 so we know which area we're meant to be
  fetchQuestionData("section1")
}


const displayQuestion = questions => {
  let questionText = document.querySelector(".question")
  currentQuestion = questions[questionNumber]
  let answers = [currentQuestion.correctAnswer, currentQuestion.incorrectAnswers[0], currentQuestion.incorrectAnswers[1], currentQuestion.incorrectAnswers[2]]
  questionText.textContent = currentQuestion.question
  correctAnswer = currentQuestion.correctAnswer;

  answer1.textContent = answers[0]
  answer2.textContent = answers[1]
  answer3.textContent = answers[2]
  answer4.textContent = answers[3]
}



startQuizButton.addEventListener('click', startQuiz())

const doTheQuiz = () => {
  if (questionNumber <= 9) {
    displayQuestion(questionArr)
  } else {
    quizResults.style.display = 'flex'
    questionBlock.style.display = 'none'
  }
}
checkButton.addEventListener('click', () => {
  console.log(questionNumber)
  ++questionNumber
  currentQuestionNumber.innerHTML = `#${questionNumber}`
  questionNumberSpan.innerHTML = `(${questionNumber}/10)`
  doTheQuiz()
})

const showQuiz = () => {
  startQuizButton.addEventListener('click', () => {
    mainPageButtonsBlock.style.display = 'none';
    quizResults.style.display = 'none'
    questionBlock.style.display = 'block'
  })
}
showQuiz()

//Design issues
enterNameBlockButton.addEventListener('click', (e) => {
  e.preventDefault();
  let name = document.querySelector("#inputName").value
  if (document.querySelector("#inputName").value == '') {
    let alert = document.createElement("span");
    alert.style.color = 'red'
    alert.textContent = 'Write your name please!'
    enterNameBlockInput.appendChild(alert)
  } else {
    localStorage.setItem("studentsName", name);
    MainPageButtonsBlock.style.display = 'block';
    enterNameBlock.style.display = 'none';
    document.querySelector("#inputName").value = '';
  }
})
