import { createStore } from "vuex";

import { dataService } from "../services";

import {
  GET_MOVIES,
  GET_MOVIE,
  GET_TVSHOWS,
  GET_TVSHOW,
} from "./mutation-types";

const state = () => ({
  movies: [],
  tvShows: [],
});

const mutations = {
  [GET_MOVIE](state, movie) {
    state.movie = movie;
  },
  [GET_MOVIES](state, movies) {
    state.movies = movies;
  },
  [GET_TVSHOW](state, tvShow) {
    state.tvShow = tvShow;
  },
  [GET_TVSHOWS](state, tvShows) {
    state.tvShows = tvShows;
  },
};

const actions = {
  async getMovie({ commit }, imdbId) {
    let details = await dataService.getMovie(imdbId);
    commit(GET_MOVIE, details);
  },
  async getMovies({ commit }, sort) {
    let movies = await dataService.getMovies(sort);
    commit(GET_MOVIES, movies);
  },
  async getTvShow({ commit }, imdbId, deal) {
    console.log(deal);
    let details = await dataService.getTvShow(imdbId, deal);
    commit(GET_TVSHOW, details);
  },
  async getTvShows({ commit }, sort) {
    let tvShows = await dataService.getTvShows(sort);
    commit(GET_TVSHOWS, tvShows);
  },
};

const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getMovieById: (state) => (id) => {
    state.movies.find((movie) => movie.imdb_id === id);
  },
  getTvShowById: (state) => (id) => {
    state.tvShows.find((tvshow) => tvshow.imdb_id === id);
  },
};

const modules = [];

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules,
});
