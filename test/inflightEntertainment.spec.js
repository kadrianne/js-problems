const watchMovies = require('../inflightEntertainment.js')

describe('#watchMovies', () => {
    it('should return true given flight time of 120 and movie lengths of [70,50]', () => {
        const flightTime = 120
        const movieLengths = [70,50]
        expect(watchMovies(flightTime, movieLengths)).toEqual(true)
    })
    it('should return true given flight time of 120 and movie lengths of [60,60]', () => {
        const flightTime = 120
        const movieLengths = [60,60]
        expect(watchMovies(flightTime, movieLengths)).toEqual(true)
    })
    it('should return false given flight time of 120 and movie lengths of [50,40]', () => {
        const flightTime = 120
        const movieLengths = [50,40]
        expect(watchMovies(flightTime, movieLengths)).toEqual(false)
    })
    it('should return true given flight time of 180 and movie lengths of [120,70,110]', () => {
        const flightTime = 180
        const movieLengths = [120,70,110]
        expect(watchMovies(flightTime, movieLengths)).toEqual(true)
    })
    it('should return false given flight time of 180 and movie lengths of [60,10,110]', () => {
        const flightTime = 180
        const movieLengths = [60,10,110]
        expect(watchMovies(flightTime, movieLengths)).toEqual(false)
    })
    it('should return true given flight time of 180 and movie lengths of [120,90,90]', () => {
        const flightTime = 180
        const movieLengths = [120,90,90]
        expect(watchMovies(flightTime, movieLengths)).toEqual(true)
    })
})