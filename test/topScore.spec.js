const sortScores = require('../topScore.js')
const HIGHEST_POSSIBLE_SCORE = 100

describe('#sortScores', () => {
    it('should return array of sorted scores from highest to lowest when given [37, 89, 41, 65, 91, 53]', () => {
        const unsortedScores = [37, 89, 41, 65, 91, 53]
        expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([91, 89, 65, 53, 41, 37])
    })
    it('should return array of sorted scores from highest to lowest when given [37, 37, 41, 65, 91, 53]', () => {
        const unsortedScores = [37, 37, 41, 65, 91, 53]
        expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([91, 65, 53, 41, 37, 37])
    })
    it('should return array of sorted scores from highest to lowest when given [0, 100, 100]', () => {
        const unsortedScores = [0, 100, 100]
        expect(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)).toEqual([100, 100, 0])
    })
})