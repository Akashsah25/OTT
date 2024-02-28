import axios from "axios"

  const BASE_URL = "https://api.themoviedb.org/3"

  const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWYxYzA1M2ZkNmQxNGZkZTc3NzFmODM0MTJkZGNmOSIsInN1YiI6IjY1YWEzYmI0N2NhYTQ3MDEyODA5Njk3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKRhvkfIGX-p3OdS2eyeT5kfyBFFXwXMv-R8XFtxE9U"

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + TMDB_TOKEN
    }
  }

  export const FetchApi = async (url) => {

    try {
      const result= await axios.get(BASE_URL + url, options)
      return result


     }catch (error) {
      console.error("error fehing data", error.message)
    }
  }


