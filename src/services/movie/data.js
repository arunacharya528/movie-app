import { getData } from "../../data";

export const getMovieDetail = (movieId) => {
    return getData(`/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`)
}

export const getRelatedMovie = (movieId) => {
    return getData(`/movie_suggestions.json?movie_id=${movieId}`)
}

export const getMovieComments = (movieId) => {
    return getData(`/movie_comments.json?movie_id=${movieId}`)
}

export const getMovieReviews = (movieId) => {
    return getData(`/movie_reviews.json?movie_id=${movieId}`)
}

export const getMovieParentalGuide = (movieId) => {
    return getData(`/movie_parental_guides.json?movie_id=${movieId}`)
}