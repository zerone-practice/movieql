import axios from 'axios'

const BASE_URL = 'https://yts.am/api/v2'
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`

export const getMovies = async (limit, rating) => {
  return await axios(LIST_MOVIES_URL, { params: { limit, rating } }).then(({ data }) => data.data.movies)
}

export const getMovie = async (id) => {
  return await axios(MOVIE_DETAILS_URL, { params: { movie_id: id } }).then(({ data }) => data.data.movie)
}

export const getSuggestions = async (id) => {
  return await axios(MOVIE_SUGGESTIONS_URL, { params: { movie_id: id } }).then(({ data }) => data.data.movies)
}
