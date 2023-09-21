# The Historian - A History Quiz

## Description

Students have expressed a strong desire for a more engaging approach to learning non-STEM subjects. In response, this project has been developed with the primary goal of making learning enjoyable and interactive for all students. Specifically designed as a history quiz, our project is tailored to benefit key stage 3 students. Our aim is to reinforce the knowledge students acquire in their history lessons by presenting questions related to key subject areas. These topics encompass Medieval history, Revolutions, as well as World War 1 and World War 2.

## Installation and Usage

### Installation

To start this quiz:

* In terminal git clone the repository to local machine
* In terminal npm install to have all the required packages
* npm run start to start the server
* In terminal run node ./User/Index.html

### Usage

#### HomePage

* On home page input your name
* You will now have a choice of starting a random quiz or choosing a category
* If you click start quiz, a random selection of questions from all topics will be presented
* If you click choose category, the list of topics will be presented
* After choosing a topic, a quiz will be presented only containing questions from the selected topic

#### Quiz

* During the quiz a question will be presented to the user
* User will have four answers to choose from, click on answer to select
* After selection click on Check button to see if selected answer is correct

#### Correct

* If correct answer will appear green
* To move on, click on next question and repeat the process

#### Incorrect

* If answer is incorrect, selected answer will appear red, along with the correct answer appearing green
* If you want to research more on the topic, a link will appear at the bottom of the page
* By clicking on link, user will be redirected to the relevant wikipedia article
* Once ready, click on next question and repeat the process


#### End of Quiz

* At the end of the quiz, result will be shown
* If result greater than or equal to 7/10, quiz will be passed
* Otherwise quiz will be failed
* You now can retake the quiz
* Or return back to the home page 
