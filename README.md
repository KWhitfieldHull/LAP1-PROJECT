# The Historian - A History Quiz
<img src="Img/Churchill.png" width="400">
<br></br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Created by - Bad Response Boys](https://img.shields.io/badge/Created_by-Bad_Response_Boys-2ea44f)](https://github.com/KWhitfieldHull/LAP1-PROJECT)
[![version - 1.6](https://img.shields.io/badge/version-1.6-1081c2)](https://github.com/KWhitfieldHull/LAP1-PROJECT)
 
## Description

Students have expressed a strong desire for a more engaging approach to learning non-STEM subjects. In response, this project has been developed with the primary goal of making learning enjoyable and interactive for all students. Specifically designed as a history quiz, our project is tailored to benefit key stage 3 students. Our aim is to reinforce the knowledge students acquire in their history lessons by presenting questions related to key subject areas. These topics encompass Medieval history, Revolutions, as well as World War 1 and World War 2.

## Installation and Usage

### Installation
To start this quiz:

* In terminal `git clone` the repository to local machine
* In terminal `npm install` to have all the required packages
* `npm run start` to start the server
* In terminal run `node ./User/Index.html`
* Possible in one line: `npm install && npm run start && node ./User/Index.html`

### Usage

#### HomePage

<img src="Img/Homepage.png" width="800" height="400">

* On home page input your name
* You will now have a choice of starting a random quiz or choosing a category
* If you click start quiz, a random selection of questions from all topics will be presented
* If you click choose category, the list of topics will be presented
* After choosing a topic, a quiz will be presented only containing questions from the selected topic

#### Quiz

* During the quiz a question will be presented to the user
* User will have four answers to choose from, click on answer to select
* After selection, click on Check button to see if the selected answer is correct

#### Correct

* If answer is correct, answer will appear green
* To move on, click on next question and repeat the process

#### Incorrect

* If answer is incorrect, selected answer will appear red, along with the correct answer appearing green
* If you want to research more on the topic, a link will appear at the bottom of the page
* By clicking on the link, the user will be redirected to the relevant wikipedia article
* Once ready, click on next question and repeat the process


#### End of Quiz

* At the end of the quiz, result will be shown
* If tne result is greater than or equal to 7/10, quiz will be passed
* Otherwise quiz will be failed
* You now can retake the quiz
* Or return back to the home page 


## Technologies 

* Javascript
* BootStrap 5.3.1
* HTML/CSS
* Express JS
* JEST
* SuperTest
* Trivia API


## Process

### Backend

<img src="Img/Backend_image.png">

* Began by trying to find a trivia api with history questions: https://the-trivia-api.com/api/questions?categories=history
* Then created the backend by fetching the data from the api
* We then found the relevant topics from the history api by using tags
* Then we created separated sections for each of the topics

### HTML/CSS

<img src="Img/Html_image.jpeg" width="750">

* Created relevant html tags with classes and IDs so that they can be used in the frontend code
* Styled all the pages using the latest version of bootstrap - Version 5.3.1

### Frontend

<img src="Img/Frontend_image.png">

* Created functionality for the buttons
* Made sure a random selection of questions was supplied from the api
* Made sure the answers had randomised positions
* Made sure when check is clicked, if answer is correct, answer appears green
* Made sure when answer is incorrect, incorrect answer appears red, along with correct answer appearing green
* Made sure when answer is incorrect a section appears at the bottom of the screen that takes the user to the relevant Wikipedia article
* Next button takes the user the next question
* After ten questions the user receives a score
* Options to do retake the quiz or go back to the homepage

### Testing

<img src="Img/testing_image.png">

* Used JEST and Supertest to test the functionality of the backend
* Supertest was used to make sure that the server was running as expected
* checked that each section obtained the relevant information and returned an object
