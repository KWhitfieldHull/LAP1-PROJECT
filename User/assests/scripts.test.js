const each = require("jest-each").default;
const { fetchQuestionData, displayQuestion, doTheQuiz, startQuiz, showResults, updateInfoSection, doesTagMatchCriteria, checkSelected, showQuizButtons, randomizeAnswersOrder, categoryQuiz } = require("./scripts.js");

//fetchQuestionData section
describe("fetchQuestionData", () => {

    it("Is a function", () => {
        expect(fetchQuestionData).toBeDefined();
        expect(fetchQuestionData instanceof Function).toEqual(true);
    })

    it('returns the data from api', () => {
        return fetchQuestionData('section1')
        .then(data => {
            expect(data).toBeDefined();  // Make an assertion on the result
    })
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

//new stuff

describe("showResults", () => {

    it("Is a function", () => {
        expect(showResults).toBeDefined();
        expect(showResults instanceof Function).toEqual(true);
    })

    

})

describe("updateInfoSection", () => {

    it("Is a function", () => {
        expect(updateInfoSection).toBeDefined();
        expect(updateInfoSection instanceof Function).toEqual(true);
    })


})

describe("doesTagMatchCriteria", () => {

    it("Is a function", () => {
        expect(doesTagMatchCriteria).toBeDefined();
        expect(doesTagMatchCriteria instanceof Function).toEqual(true);
    })

    describe("Tag Matching", () => {


        each([
            [true, { "tags": ["kings", "uk", "middle_ages", "medieval", "history"] }],
            [false, { "tags": ["pizza", "burger", "pasta", "curry", "fish"] }],
            [false, { "tags": ["kings", "medievil", "england", "uk", "war"] }],
            [true, { "tags": ["tech", "Ice-Age", "Greece", "Roman", "medieval"] }],
        ]).test(`Returns %s when passed %s`, (expected, input) => {
            expect(doesTagMatchCriteria(input, "medieval")).toEqual(expected);
        })

        each([
            [true, { "tags": ["kings", "uk", "middle_ages", "revolutions", "history"] }],
            [false, { "tags": ["pizza", "burger", "pasta", "curry", "fish"] }],
            [false, { "tags": ["kings", "revulutions", "england", "uk", "war"] }],
            [true, { "tags": ["tech", "Ice-Age", "Greece", "Roman", "revolutions"] }],
        ]).test(`Returns %s when passed %s`, (expected, input) => {
            expect(doesTagMatchCriteria(input, "revolutions")).toEqual(expected);
        })

        each([
            [true, { "tags": ["kings", "uk", "middle_ages", "world_war_1", "history"] }],
            [false, { "tags": ["pizza", "burger", "pasta", "curry", "fish"] }],
            [false, { "tags": ["kings", "WW1", "england", "uk", "war"] }],
            [true, { "tags": ["tech", "Ice-Age", "Greece", "Roman", "world_war_1"] }],
        ]).test(`Returns %s when passed %s`, (expected, input) => {
            expect(doesTagMatchCriteria(input, "world_war_1")).toEqual(expected);
        })

        each([
            [true, { "tags": ["kings", "uk", "middle_ages", "world_war_2", "history"] }],
            [false, { "tags": ["pizza", "burger", "pasta", "curry", "fish"] }],
            [false, { "tags": ["kings", "wolrd_wor_two", "england", "uk", "war"] }],
            [true, { "tags": ["tech", "Ice-Age", "Greece", "Roman", "world_war_2"] }],
        ]).test(`Returns %s when passed %s`, (expected, input) => {
            expect(doesTagMatchCriteria(input, "world_war_2")).toEqual(expected);
        })
    })

})

describe("checkSelected", () => {

    it("Is a function", () => {
        expect(checkSelected).toBeDefined();
        expect(checkSelected instanceof Function).toEqual(true);
    })


})

describe("showQuizButtons", () => {

    it("Is a function", () => {
        expect(showQuizButtons).toBeDefined();
        expect(showQuizButtons instanceof Function).toEqual(true);
    })


})

describe("randomizeAnswersOrder", () => {

    it("Is a Function", () => {
        expect(randomizeAnswersOrder).toBeDefined();
        expect(randomizeAnswersOrder instanceof Function).toEqual(true);
    })

    each([
        [[1, 14, 7, 2], [1, 14, 7, 2]],
        [[1, 2, 3], [1, 2, 3]],
        [[-1, -10, -100, -1000], [-1, -10, -100, -1000]],
    ]).test(`Returns a non-identical array when passed %s`, (expected, arr) => {
        expect(randomizeAnswersOrder(arr)).not.toBe(expected)
    })

    it("Returns an array when called", () => {
        expect(typeof randomizeAnswersOrder([1, 14, 5, 7]) == "object").toEqual(true);
    })


})

describe("categoryQuiz", () => {

    it("Is a function", () => {
        expect(categoryQuiz).toBeDefined();
        expect(categoryQuiz instanceof Function).toEqual(true);
    })

    // it("Returns a function when called", () => {
    //     expect(typeof categoryQuiz() == "object").toEqual(true);
    // })



})

