import axios from "axios"

  const BASE_URL = "https://api.themoviedb.org/3"

  const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU1NTJjYjYxNzA3MzFlODBmODQxNjNhYWRjNzI1YyIsInN1YiI6IjY0ODE5ZmQ5YmYzMWYyMDBlM2ZiYjNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ov5gRXC8Zbb8kVxla5aaCC4ubZUEO2dk2Q7v3M5m3bw"


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


