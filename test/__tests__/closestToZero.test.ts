import { createTestCases } from '../cases'
const testCases = createTestCases()

describe(`function closestToZero`, () => {
    for (const testCase of testCases) {
        test(testCase.message, () => {
            const { closestToZero } = require('../../lib/')
            const solution = closestToZero(testCase.input)
            expect.assertions(1)
            expect(solution).toBe(testCase.expected)
        })
    }
})


export {}
