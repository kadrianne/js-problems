// module.exports = function watchMovies(flightTime, movieLengths) {
//     let movies = {}

//     movieLengths.forEach(movie => movies[movie] ? movies[movie] += 1 : movies[movie] = 1)

//     for(let i = 0; i < movieLengths.length; i++){
//         let firstMovie = movieLengths[i]
//         let secondMovie = flightTime - firstMovie
//         movies[firstMovie] -= 1

//         if (movies[secondMovie] && movies[secondMovie] > 0) {
//             return true
//         }
//     }

//     return false
// }

module.exports = function watchMovies(flightTime, movieLengths) {
    let movies = new Set()

    for(let i = 0; i < movieLengths.length; i++){
        let firstMovie = movieLengths[i]
        let secondMovie = flightTime - firstMovie

        if (movies.has(secondMovie)){
            return true
        }
        
        movies.add(firstMovie)
    }

    return false
}