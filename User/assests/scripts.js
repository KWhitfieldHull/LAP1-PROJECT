
const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtonsBlock = document.querySelector("#mainPageButtonsBlock");
const mainPageBlock = document.querySelector('#mainPageBlock')
const startQuizButton = document.querySelector('#startQuizButton')
const questionBlock = document.querySelector('#questionBlock')


const questionArr = []
const questionNumber = -1

const fetchQuestionData = async section => {

  try {
console.log(section)
    const response = await fetch(`http://localhost:3000/questions/${section}`)
    const data = await response.json()
console.log(response)
console.log(data)
    //current sections questions are pushed to an array so we can display them

    questionArr.push(data)
    
  } catch (err) {
    console.error(err)
  }
}

const startQuiz = () => {

  //set the current section to 1 so we know which area we're meant to be
  fetchQuestionData("section1")

  //pop from array, do question, move to next
  displayQuestion()
}

const displayQuestion = () => {
  let questionText = document.querySelector("#question")
  let currentQuestion
  currentQuestion = questionArr.pop()
  console.log(questionArr)
  questionText.textContent = currentQuestion.question

  let corrPosition = Math.floor(Math.random() * 4)

  //there's definitely a better way to do this

  let answer1, answer2, answer3, answer4
  answer1 = document.querySelector("#answer1")
  answer2 = document.querySelector("#answer2")
  answer3 = document.querySelector("#answer3")
  answer4 = document.querySelector("#answer4")

  if (corrPosition == 0) {
    //answer 1 correct, 2,3,4 incorrect
    answer1.textContent = currentQuestion.target.correctAnswer
    answer2.textContent = currentQuestion.target.incorrectAnswers[0]
    answer3.textContent = currentQuestion.target.incorrectAnswers[1]
    answer4.textContent = currentQuestion.target.incorrectAnswers[2]
  } else if (corrPosition == 1) {
    //answer 2 correct, 1,3,4 incorrect
    answer2.textContent = currentQuestion.target.correctAnswer
    answer1.textContent = currentQuestion.target.incorrectAnswers[0]
    answer3.textContent = currentQuestion.target.incorrectAnswers[1]
    answer4.textContent = currentQuestion.target.incorrectAnswers[2]
  } else if (corrPosition == 2) {
    //answer 3 correct, 1,2,4 incorrect
    answer3.textContent = currentQuestion.target.correctAnswer
    answer2.textContent = currentQuestion.target.incorrectAnswers[0]
    answer1.textContent = currentQuestion.target.incorrectAnswers[1]
    answer4.textContent = currentQuestion.target.incorrectAnswers[2]
  } else {
    //answer 4 correct, 1,2,3 incorrect
    answer4.textContent = currentQuestion.target.correctAnswer
    answer2.textContent = currentQuestion.target.incorrectAnswers[0]
    answer3.textContent = currentQuestion.target.incorrectAnswers[1]
    answer1.textContent = currentQuestion.target.incorrectAnswers[2]
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
