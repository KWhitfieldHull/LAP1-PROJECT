const each = require("jest-each").default;
const window = require("whatwg-fetch")
const { text } = require("express");
const { fetchQuestionData, displayQuestion, doTheQuiz, startQuiz } = require("../User/assests/scripts.js");
const app = require("./app.js")
const request = require("supertest") // Another testing library, used for backend code. 

//fetchQuestionData section
describe("fetchQuestionData", () => {

    it("Is a function", () => {
        expect(fetchQuestionData).toBeDefined();
        expect(fetchQuestionData instanceof Function).toEqual(true);
    })
})

//displayQuestion

describe("displayQuestion", () => {

    it("Is a function", () => {
        expect(displayQuestion).toBeDefined();
        expect(displayQuestion instanceof Function).toEqual(true);
    })
})

//doTheQuiz

describe("doTheQuiz", () => {

    it("Is a function", () => {
        expect(doTheQuiz).toBeDefined();
        expect(doTheQuiz instanceof Function).toEqual(true);
    })
})

describe("startQuiz", () => {

    it("Is a function", () => {
        expect(startQuiz).toBeDefined();
        expect(startQuiz instanceof Function).toEqual(true);
    })
})

describe('server is running', () => {
    describe('get /', () => {
      it('should return status code 200', () => {
        request(app).get('/').then((res) => {
          expect(res.statusCode).toBe(200);
        });
      });
    });
  });

describe('Endpoint testing', () => {
    it('tests / endpoint', async() => {
        request(app).get("/").then((res) => {
            expect(res.text).toEqual("Hello History API!");
        });   
    })


    it('/questions/section1 exists and returns correct data', async() => {
        await request(app).get("/questions/section1").then((res) => {
            expect(res.body).toHaveLength(10);            
            expect(res.body).toEqual(expect.arrayContaining([expect.any(Object)]))
        });   
    })


    it('/questions/section2 exists and returns correct data', async() => {
        await request(app).get("/questions/section2").then((res) => {
            expect(res.body).toHaveLength(10);            
            expect(res.body).toEqual(expect.arrayContaining([expect.any(Object)]))
        });   
    })


    it('/questions/section3 exists and returns correct data', async() => {
        await request(app).get("/questions/section3").then((res) => {
            expect(res.body).toHaveLength(10);            
            expect(res.body).toEqual(expect.arrayContaining([expect.any(Object)]))
        });  
    })

})
