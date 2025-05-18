

export const TMDB_CONFIG = {
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY : import.meta.env.VITE_APP_TMDB_APIKEY,
    headers : {
        accept: 'application.json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_APITOKEN}`
    }

}


export const fetchMovies = async (query , endurl)=>{
   const endpoint = (query != '') ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    `${TMDB_CONFIG.BASE_URL}${endurl}`

    const response = await fetch(endpoint , {
        method: 'Get',
        headers : TMDB_CONFIG.headers,
    })

    if(!response.ok){
        throw new Error('failed to fetch movies' , response.statusText)

    }

    const data  = await response.json()
    return data.results
}

export const fetchimages = async (id)=>{
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${id}?language=en-US`
    const response = await fetch(endpoint , {
        method: 'Get',
        headers : TMDB_CONFIG.headers,
    })

    if(!response.ok){
        throw new Error('failed to fetch images' , response.statusText)

    }

    const data  = await response.json()
    return data
}

export const fetchvideos = async (id)=>{
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${id}?language=en-US`
    const response = await fetch(endpoint , {
        method: 'Get',
        headers : TMDB_CONFIG.headers,
    })

    if(!response.ok){
        throw new Error('failed to fetch images' , response.statusText)

    }

    const data  = await response.json()
    return data
}

export const fetchcredits = async (id)=>{
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${id}/credits`
    const response = await fetch(endpoint , {
        method: 'Get',
        headers : TMDB_CONFIG.headers,
    })

    if(!response.ok){
        throw new Error('failed to fetch images' , response.statusText)

    }

    const data  = await response.json()
    return data
}
