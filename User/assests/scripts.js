const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtonsBlock = document.querySelector("#mainPageButtonsBlock");

const questionArr = []
const questionNumber = -1

const fetchQuestionData = async section => {
  const data = -1
  try {

    const response = await fetch(`https://localhost:3000/questions/${section}`)
    data = await response.json()

    //current sections questions are pushed to an array so we can display them
    questionArr.push(data)
    //  startQuiz()
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
  questionText.textContent = currentQuestion.target.question

  let corrPosition = Math.floor(Math.random() * 4)

  //there's definitely a better way to do this

  if (corrPosition == 0) {
    let

  } else if (corrPosition == 1) {


  } else if (corrPosition == 2) {


  } else {

  }


}



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




