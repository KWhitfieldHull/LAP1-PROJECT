const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtonsBlock = document.querySelector("#mainPageButtonsBlock");
const startQuizButton = document.querySelector('#startQuizButton')
const questionBlock = document.querySelector('#questionBlock')
const checkButton = document.querySelector('#checkButton')
const quizResults = document.querySelector('#quizResults')
const questionNumberSpan = document.querySelector('#questionNumberIterator')
const quizResultsText = document.querySelector('#quizResultsText')
let allCheckBoxes = document.querySelectorAll('.form-check-input')

let informationBlock = document.querySelector('#informationBlock')
let informationBlockImg = document.querySelector("#informationBlockImg")
let informationBlockHeading = document.querySelector("#informationBlockHeading")
let informationBlockText = document.querySelector("#informationBlockText")
let informationBlockLink = document.querySelector("#informationBlockLink")

let labels = document.querySelectorAll('.form-check-label')
const nextButton = document.querySelector('#nextButton')
const quizResultsImg = document.querySelector('#quizResultsImg')
const retakeTheQuiz = document.querySelector('#retakeTheQuiz')
const categoriesBlock = document.querySelector('#categoriesBlock')
const ChooseCategoryButton = document.querySelector('#ChooseCategoryButton')
const yourName = document.querySelector('#yourName')


const medievalQuiz = document.querySelector('#medievalQuiz')
const revolutionsQuiz = document.querySelector('#revolutionsQuiz')
const modernQuiz = document.querySelector('#modernQuiz')

let questionArr = []
let currentQuestion;
let questionNumber = 0;
let correctAnswer;
let result = 0;
let yesOrNo;
let currentCategory

let answer1 = document.querySelector("#a1")
let answer2 = document.querySelector("#a2")
let answer3 = document.querySelector("#a3")
let answer4 = document.querySelector("#a4")

const fetchQuestionData = async section => {
  currentCategory = section;
  try {
    questionArr = []
    const response = await fetch(`http://localhost:3000/questions/${section}`)
    const data = await response.json()
    //current sections questions are pushed to an array so we can display them
    data.forEach(element => questionArr.push(element));
    displayQuestion(questionArr)
  } catch (err) {
    console.error(err)
  }
}

//One of three categories
const categoryQuiz = (element, section) => {
  element?.addEventListener('click', (e) => {
    e.preventDefault()
    startQuiz(section)
    categoriesBlock.style.display = 'none';
    quizResults.style.display = 'none'
    questionBlock.style.display = 'block'
  })
}
categoryQuiz(medievalQuiz, 'section1')
categoryQuiz(revolutionsQuiz, 'section2')
categoryQuiz(modernQuiz, 'section3')

//Check is name already filled in
window?.addEventListener('load', () => {
  if (localStorage.getItem('studentsName')) {
    enterNameBlock.style.display = 'none'
    showQuizButtons()
    document.querySelector("#inputName").value = '';
  } else {
    enterNameBlock.style.display = 'block'
  }

})

//Show two main Quiz buttons
const showQuizButtons = () => {
  let resetName = document.createElement("a")
  MainPageButtonsBlock.style.display = 'block';
  MainPageButtonsBlock.style.animation = "fade-in 1s forwards";
  enterNameBlock.style.display = 'none';
  yourName.textContent = `Hello, ${localStorage.getItem('studentsName')}!`
  resetName.innerHTML = ` (<a href="." id='changeNameLink'>change</a>)`
  yourName.appendChild(resetName)
  document.querySelector('#changeNameLink').addEventListener('click', () => {
    localStorage.removeItem('studentsName')
  })
}

//Start Quiz button
startQuizButton?.addEventListener('click', fetchQuestionData('all'))

function startQuiz(section) {
  fetchQuestionData(section)
}
//Random answers order
const randomizeAnswersOrder = (arr) => arr.sort(() => Math.random() - 0.5)


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

//check selected answer if it's correct or not, highlights the answer green or red.
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


const doesTagMatchCriteria = (jsonObject, searchCriteria) => {
  const tags = jsonObject.tags;
  return tags.some(tag => tag.toLowerCase() === searchCriteria.toLowerCase());
}


const updateInfoSection = () => {
  if (doesTagMatchCriteria(currentQuestion, "medieval")) {

    informationBlockImg.src="assests/medieval-pic.jpeg"
    informationBlockHeading.textContent = "Medieval Times"
    informationBlockText.textContent = "The medieval era, often called The Middle Ages or the Dark Ages, began around 476 A.D. following a great loss of power throughout Europe by the Roman Emperor. The Middle Ages span roughly 1,000 years, ending between 1400 and 1450."
    informationBlockLink.href = "https://en.wikipedia.org/wiki/Middle_Ages"
  }
  else if (doesTagMatchCriteria(currentQuestion, "revolutions")) {

    informationBlockImg.src="assests/revo.webp"
    informationBlockHeading.textContent = "Revolutions"
    informationBlockText.textContent = "In political science, a revolution is an attempt to achieve fundamental and relatively sudden change in political power and political organization. It typically involves a revolt against the government due to perceived oppression (political, social, economic) or political incompetence"
    informationBlockLink.href = "https://en.wikipedia.org/wiki/List_of_revolutions_and_rebellions#1850%E2%80%931899"

  } else if (doesTagMatchCriteria(currentQuestion, "world_war_1")) {

    informationBlockImg.src="assests/modern-period-pic.jpeg"
    informationBlockHeading.textContent = "World War I"
    informationBlockText.textContent = "World War I (28 July 1914 – 11 November 1918), often abbreviated as WWI, was a global conflict fought between two coalitions, the Allied Powers and the Central Powers. Fighting took place throughout Europe, the Middle East, Africa, the Pacific, and parts of Asia."
    informationBlockLink.href = "https://en.wikipedia.org/wiki/World_War_I"

  } else if (doesTagMatchCriteria(currentQuestion, "world_war_2")) {

    informationBlockImg.src="assests/modern-period-pic.jpeg"
    informationBlockHeading.textContent = "World War II"
    informationBlockText.textContent = "World War II or the Second World War, often abbreviated as WWII or WW2, was a global conflict that lasted from 1939 to 1945. The vast majority of the world's countries, including all of the great powers, fought as part of two opposing military alliances: the Allies and the Axis."
    informationBlockLink.href = "https://en.wikipedia.org/wiki/World_War_II"

  } else {
    informationBlockImg.src=""
    informationBlockHeading.textContent = ""
    informationBlockText.textContent = ""
    informationBlockLink.href = ""
  }
}



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
checkButton?.addEventListener('click', () => {
  checkSelected()
  if (!yesOrNo) {
    nextButton.style.display = 'inline'
    checkButton.style.display = 'none'

    //change information block to be relevant to the current question
    //changes needed:    informationBlockHeading, informationBlockText, informationBlockLink href
    updateInfoSection()
    informationBlock.style.display = 'flex'
  } else {
    nextButton.style.display = 'inline'
    checkButton.style.display = 'none'
    informationBlock.style.display = 'none'
  }
})

//Next button
nextButton?.addEventListener('click', () => {
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
  questionBlock.style.animation = "fade-in 1s forwards";
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
retakeTheQuiz?.addEventListener('click', () => {
  startQuiz(currentCategory);
  quizResults.style.display = 'none'
  questionBlock.style.display = 'block'
  questionNumber = 0;
  result = 0
  questionNumberSpan.innerHTML = `(${questionNumber + 1}/10)`
})

//Design issues
let alert = document.createElement("span");
enterNameBlockButton?.addEventListener('click', (e) => { // ? checks if the element exists, and if it does not exist the element is skipped (maybe)
  e.preventDefault();
  let name = document.querySelector("#inputName").value
  alert.textContent = ''
  if (document.querySelector("#inputName").value == '') {
    alert.style.color = 'red'
    alert.textContent = 'Write your name please!'
    enterNameBlockInput.appendChild(alert)
  } else {
    localStorage.setItem("studentsName", name);
    showQuizButtons()
    document.querySelector("#inputName").value = '';
  }
})

ChooseCategoryButton?.addEventListener('click', () => {
  categoriesBlock.style.display = 'block';
  MainPageButtonsBlock.style.display = 'none';
})

module.exports = {
  fetchQuestionData,
  displayQuestion,
  doTheQuiz,
  startQuiz,

  //new stuff to test
  showResults,
  updateInfoSection,
  doesTagMatchCriteria,
  checkSelected,
  showQuizButtons,
  randomizeAnswersOrder,
  categoryQuiz,
}
