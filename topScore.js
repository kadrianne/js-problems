// You created a game that is more popular than Angry Birds.

// Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

const unsortedScores = [37, 37, 41, 65, 91, 53]
const HIGHEST_POSSIBLE_SCORE = 100

function sortScores(unsortedScores, highestPossibleScore) {
    const possibleScores = [...Array(highestPossibleScore+1).keys()]
    let scoreMap = {}
    let sortedScores = []
    
    unsortedScores.forEach(score => {
        
        if (scoreMap[score]) {
            scoreMap[score] += 1
        } else {
            scoreMap[score] = 1
        }
    })

    possibleScores.forEach(score => {
        if (scoreMap[score] > 0) {
            for (let i = 0; i < scoreMap[score]; i++){
                sortedScores.unshift(score)
            }
        }
    })

    return sortedScores
}

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)

module.exports = sortScores