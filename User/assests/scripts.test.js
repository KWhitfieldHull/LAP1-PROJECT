
const each = require("jest-each").default;
const { fetchQuestionData, displayQuestion, doTheQuiz, startQuiz, showQuiz } = require("./scripts.js");

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

describe("showQuiz", () => {

    it("Is a function", () => {
        expect(showQuiz).toBeDefined();
        expect(showQuiz instanceof Function).toEqual(true);
    })
})