import axios from "axios";
require("dotenv").config();

const getMovies = async function () {
  let data;
  let options = {
    method: "GET",
    url: "https://imdb-api.com/en/API/MostPopularMovies/k_dyrq2qt2",
  };
  await axios
    .request(options)
    .then((response) => {
      data = Object.freeze(response.data.movie_results);
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getMovie = async function (imdbId, deal) {
  let data, options;
  if (deal === "full") {
    options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { type: "get-movie-details", imdb: imdbId },
      headers: {
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.VUE_APP_API_KEY}`,
      },
    };
  } else {
    options = {
      method: "GET",
      url: "http://www.omdbapi.com/?apikey=809bd0e6",
      params: { type: "movie", i: imdbId },
    };
  }
  await axios
    .request(options)
    .then((response) => {
      data = Object.freeze(response.data);
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getMovieImages = async function (imdbId) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: `get-movies-images-by-imdb`, imdb: imdbId },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.VUE_APP_API_KEY}`,
    },
  };
  await axios
    .request(options)
    .then((response) => {
      data = Object.freeze(response.data);
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getTvShows = async function () {
  let data;
  let options = {
    method: "GET",
    url: "https://imdb-api.com/en/API/MostPopularTVs/k_dyrq2qt2",
  };
  await axios
    .request(options)
    .then((response) => {
      console.log(response)
      data = Object.freeze(response.data.items);
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getTvShow = async function (imdbId) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: "get-show-details", imdb: imdbId },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.VUE_APP_API_KEY}`,
    },
  };
  await axios
    .request(options)
    .then((response) => {
      data = Object.freeze(response.data);
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getTvShowImages = async function (imdbId) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: `get-show-images-by-imdb`, imdb: imdbId },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.VUE_APP_API_KEY}`,
    },
  };
  await axios
    .request(options)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

const getPosters = async(imdbId)=>{
  let data;
  let options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/Posters/k_dyrq2qt2/${imdbId}`,
  };
  await axios
    .request(options)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      data = err;
    });

  return data;

}

export const dataService = {
  getMovie,
  getMovies,
  getMovieImages,
  getTvShow,
  getTvShows,
  getTvShowImages,
  getPosters,
};
