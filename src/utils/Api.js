import axios from "axios"

  const BASE_URL = "https://api.themoviedb.org/3"

  const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjE4NzE1YTUwODI2ZDFmNWQ0ZTQwYWMyYThiMWRlZSIsInN1YiI6IjY1ZGVmMzdkOGM0NGI5MDE3YzE0MzAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q1-gA1NTkEqnn4m0v6bK40MXAOEQcetVky0Vfl6-ClE"

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


