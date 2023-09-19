const cors = require("cors");
const express = require("express");
const app = express();


let qSection1, qSection2, qSection3;

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello History API!");
});

//return all questions from a section

app.get("/questions/section1", async (req, res) => {
  questions = await (await fetch("https://the-trivia-api.com/api/questions?categories=history&limit=10&tags=medieval"))
  qSection1 = await questions.json()
  res.send(qSection1)
})
app.get("/questions/section2", async (req, res) => {
  questions = await fetch("https://the-trivia-api.com/api/questions?categories=history&tags=middle_ages")
  qSection2 = await questions.json()
  res.send(qSection2)
})
app.get("/questions/section3", async (req, res) => {
  const ww1Questions = await fetch("https://the-trivia-api.com/api/questions?categories=history&tags=world_war_1&limit=5")
  ww1Json = await ww1Questions.json()
  const ww2Questions = await fetch("https://the-trivia-api.com/api/questions?categories=history&tags=world_war_2&limit=5")
  ww2Json = await ww2Questions.json()

  qSection3 = ww1Json.concat(ww2Json) //Concatinating both the two different JSON files 
  res.send(qSection3)
})




module.exports = app;
