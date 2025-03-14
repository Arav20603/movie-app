export const fetchMovies = async () => {
    try {
        const response = require('../data/movies.json')
        return response
    } catch (err) {
        throw new Error("Failed to fetch movies")
    }
}