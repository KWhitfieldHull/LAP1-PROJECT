
const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtonsBlock = document.querySelector("#mainPageButtonsBlock");
const mainPageBlock = document.querySelector('#mainPageBlock')
const startQuizButton = document.querySelector('#startQuizButton')
const questionBlock = document.querySelector('#questionBlock')


const questionArr = []
let currentQuestion = []
let questionNumber = 0

const fetchQuestionData = async section => {

  try {

    const response = await fetch(`http://localhost:3000/questions/${section}`)
    const data = await response.json()

    //current sections questions are pushed to an array so we can display them

    data.forEach(element => {
      questionArr.push(element)
    });

    displayQuestion(questionArr)
    console.log(questionArr)
  } catch (err) {
    console.error(err)
  }
}

const startQuiz = () => {

  //set the current section to 1 so we know which area we're meant to be
  fetchQuestionData("section1")
}



const displayQuestion = (questions) => {
  let questionText = document.querySelector(".question")
  let currentQuestion = questions[questionNumber]


  for (let i = questions.length - 1; i > 0; i--) {

questionNumber++

    questionText.textContent = currentQuestion.question

    let corrPosition = Math.floor(Math.random() * 4)

    //there's definitely a better way to do this

    let answer1, answer2, answer3, answer4
    answer1 = document.querySelector("#a1")
    answer2 = document.querySelector("#a2")
    answer3 = document.querySelector("#a3")
    answer4 = document.querySelector("#a4")

    if (corrPosition == 0) {
      //answer 1 correct, 2,3,4 incorrect
      answer1.textContent = currentQuestion.correctAnswer
      answer2.textContent = currentQuestion.incorrectAnswers[0]
      answer3.textContent = currentQuestion.incorrectAnswers[1]
      answer4.textContent = currentQuestion.incorrectAnswers[2]
    } else if (corrPosition == 1) {
      //answer 2 correct, 1,3,4 incorrect
      answer2.textContent = currentQuestion.correctAnswer
      answer1.textContent = currentQuestion.incorrectAnswers[0]
      answer3.textContent = currentQuestion.incorrectAnswers[1]
      answer4.textContent = currentQuestion.incorrectAnswers[2]
    } else if (corrPosition == 2) {
      //answer 3 correct, 1,2,4 incorrect
      answer3.textContent = currentQuestion.correctAnswer
      answer2.textContent = currentQuestion.incorrectAnswers[0]
      answer1.textContent = currentQuestion.incorrectAnswers[1]
      answer4.textContent = currentQuestion.incorrectAnswers[2]
    } else {
      //answer 4 correct, 1,2,3 incorrect
      answer4.textContent = currentQuestion.correctAnswer
      answer2.textContent = currentQuestion.incorrectAnswers[0]
      answer3.textContent = currentQuestion.incorrectAnswers[1]
      answer1.textContent = currentQuestion.incorrectAnswers[2]
    }
  }





}


startQuizButton.addEventListener('click', (e) => {

  startQuiz()

})



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

startQuizButton.addEventListener('click', () => {
  mainPageButtonsBlock.style.display = 'none';
  questionBlock.style.display = 'block'
})
