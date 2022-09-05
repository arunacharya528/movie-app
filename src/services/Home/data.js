import { getData } from "../../data";

export const getMovieList = (queries = '') => {
    return getData(`/list_movies.json?${queries}`)
}