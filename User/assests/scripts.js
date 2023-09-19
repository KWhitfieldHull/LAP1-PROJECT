
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
const quizResultsText = document.querySelector('#quizResultsText')
let allCheckBoxes = document.querySelectorAll('.form-check-input')
let informationBlock = document.querySelector('#informationBlock')
let checkButtonBlock = document.querySelector('#checkButtonBlock')
let labels = document.querySelectorAll('.form-check-label')
const nextButton = document.querySelector('#nextButton')
const quizResultsImg = document.querySelector('#quizResultsImg')
const retakeTheQuiz = document.querySelector('#retakeTheQuiz')
const categoriesBlock = document.querySelector('#categoriesBlock')
const ChooseCategoryButton = document.querySelector('#ChooseCategoryButton')

const medievalQuiz = document.querySelector('#medievalQuiz')
const revolutionsQuiz = document.querySelector('#revolutionsQuiz')
const modernQuiz = document.querySelector('#modernQuiz')
const yourName = document.querySelector('#yourName')

let questionArr = []
let currentQuestion;
let questionNumber = 0;
let correctAnswer;
let result = 0;
let yesOrNo;
let currentCategory;

let answer1, answer2, answer3, answer4
answer1 = document.querySelector("#a1")
answer2 = document.querySelector("#a2")
answer3 = document.querySelector("#a3")
answer4 = document.querySelector("#a4")

const fetchQuestionData = async section => {
  currentCategory = section;
  try {
    questionArr = []
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
startQuizButton.addEventListener('click', fetchQuestionData('all'))

//medieval
medievalQuiz.addEventListener('click', (e) => {
  e.preventDefault()
  fetchQuestionData('section1')
  categoriesBlock.style.display = 'none';
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
})

//revolutions
revolutionsQuiz.addEventListener('click', (e) => {
  e.preventDefault()
  fetchQuestionData('section2')
  categoriesBlock.style.display = 'none';
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
})

//modern questions
modernQuiz.addEventListener('click', (e) => {
  e.preventDefault()
  fetchQuestionData('section3')
  categoriesBlock.style.display = 'none';
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
})


function startQuiz(section) {
  fetchQuestionData(section)
}

//display question
const displayQuestion = questions => {
  let questionText = document.querySelector(".question")
  currentQuestion = questions[questionNumber]
  let answers = [currentQuestion.correctAnswer, currentQuestion.incorrectAnswers[0], currentQuestion.incorrectAnswers[1], currentQuestion.incorrectAnswers[2]]
  let randomizedAnswers = randomizeAnswersOrder(answers)
  questionText.textContent = currentQuestion.question
  correctAnswer = currentQuestion.correctAnswer;

  answer1.textContent = randomizedAnswers[0]
  answer2.textContent = randomizedAnswers[1]
  answer3.textContent = randomizedAnswers[2]
  answer4.textContent = randomizedAnswers[3]
}

//check selected answer if it's correct or not
const checkSelected = () => allCheckBoxes.forEach((el) => {
  if (el.checked) {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].htmlFor === el.id) {
        if (labels[i].innerHTML === correctAnswer) {
          result++
          yesOrNo = true
          labels[i].style.color = 'green'
        } else {
          yesOrNo = false
          labels[i].style.color = 'red'
        }
      }
    }
  }
})

//deselect checkboxes
const deselectCheckboxes = () => {
  allCheckBoxes.forEach(el => {
    el.checked = false;
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.color = 'rgb(33, 37, 41)'
    }
  });
  allCheckBoxes[0].checked = true
}
//Random answers order
const randomizeAnswersOrder = (arr) => arr.sort(() => Math.random() - 0.5)

//Question Iterator
const doTheQuiz = () => {
  questionNumber++
  if (questionNumber < 10) {
    displayQuestion(questionArr)
    questionNumberSpan.innerHTML = `(${questionNumber + 1}/10)`
  } else {
    showResults()
  }
}

//Check button
checkButton.addEventListener('click', () => {
  checkSelected()
  if (!yesOrNo) {
    nextButton.style.display = 'inline'
    checkButton.style.display = 'none'
    informationBlock.style.display = 'flex'
  } else {
    nextButton.style.display = 'inline'
    checkButton.style.display = 'none'
    informationBlock.style.display = 'none'
  }
})

//Next button
nextButton.addEventListener('click', () => {
  nextButton.style.display = 'none'
  checkButton.style.display = 'inline'
  informationBlock.style.display = 'none'
  doTheQuiz()
  deselectCheckboxes()
})

//Show Quiz after clicking Start Quiz button
startQuizButton?.addEventListener('click', () => {
  mainPageButtonsBlock.style.display = 'none';
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
})

//Results page
const showResults = () => {
  const name = localStorage.getItem('studentsName');
  console.log(name)
  if (result >= 7) {
    quizResultsLead.textContent = 'Quiz Passed!'
    quizResultsText.textContent = `Congratulation, ${name}! You answered ${result}/10 question`
    quizResultsImg.src = 'assests/success.png'
  } else {
    quizResultsLead.textContent = 'Quiz Failed'
    quizResultsImg.src = 'assests/not-success.png'
    quizResultsText.textContent = `${name}, you answered ${result}/10 question.\n Try harder next time!`
  }
  quizResults.style.display = 'flex'
  questionBlock.style.display = 'none'
}
retakeTheQuiz.addEventListener('click', () => {
  startQuiz(currentCategory);
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
  questionNumber = 0;
  result = 0
  questionNumberSpan.innerHTML = `(${questionNumber + 1}/10)`
})

//Design issues
enterNameBlockButton?.addEventListener('click', (e) => { // ? checks if the element exists, and if it does not exist the element is skipped (maybe)
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
    console.log(localStorage.getItem('studentsName'))
    yourName.textContent = `Hello, ${localStorage.getItem('studentsName')}!`
  }
})
ChooseCategoryButton.addEventListener('click', () => {
  categoriesBlock.style.display = 'block';
  MainPageButtonsBlock.style.display = 'none';
})

module.exports = {
  fetchQuestionData,
  displayQuestion,
  doTheQuiz,
  startQuiz,
  showQuiz

}
