import axios from "axios";

const getMovies = async function (sort) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: `get-${sort}-movies`, page: "1" },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
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
        "x-rapidapi-key": process.env.API_KEY,
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
      "x-rapidapi-key": process.env.API_KEY,
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

const getTvShows = async function (sort) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: `get-${sort}-shows`, page: "1" },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
    },
  };
  await axios
    .request(options)
    .then((response) => {
      // console.log(response);
      data = Object.freeze(response.data.tv_results);
    })
    .catch((err) => {
      data = err;
    });
  return data;
};

const getTvShow = async function (imdbId, deal) {
  let data, options;
  if (deal === "full") {
    options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { type: "get-shows-details", imdb: imdbId },
      headers: {
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY,
      },
    };
  } else {
    options = {
      method: "GET",
      url: "http://www.omdbapi.com/?apikey=809bd0e6",
      params: { type: "series", i: imdbId },
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

const getTvShowImages = async function (imdbId) {
  let data;
  let options = {
    method: "GET",
    url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
    params: { type: `get-show-images-by-imdb`, imdb: imdbId },
    headers: {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
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

export const dataService = {
  getMovie,
  getMovies,
  getMovieImages,
  getTvShow,
  getTvShows,
  getTvShowImages,
};
