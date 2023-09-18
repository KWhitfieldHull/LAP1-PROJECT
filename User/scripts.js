const enterNameBlock = document.querySelector("#enterNameBlock");
const enterNameBlockInput = document.querySelector("#enterNameBlock .enterNameBlockInputBlock");
const enterNameBlockButton = document.querySelector("#enterNameBlock button");
const MainPageButtons = document.querySelector("#MainPageButtons");

enterNameBlockButton.addEventListener('click', (e) => {
  e.preventDefault();
  let name = document.querySelector("#inputName").value
  if (document.querySelector("#inputName").value == '') {
    let alert = document.createElement("p");
    alert.style.color = 'red'
    alert.textContent = 'Write your name please!'
    enterNameBlockInput.appendChild(alert)
  } else {
    localStorage.setItem("studentsName", name);
    MainPageButtons.style.display = 'block';
    enterNameBlock.style.display = 'none';
    document.querySelector("#inputName").value = '';
  }
})
