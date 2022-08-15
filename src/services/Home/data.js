import { apiURL, getData } from "../../data";

export const getMovieList = () => {
    return getData("/list_movies.json")
}