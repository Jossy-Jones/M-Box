<template>
  <main>
    <section id="vanguard">
      <Carousel />
    </section>

    <!-- Categories -->
    <section id="categories">
      <hr />

      <div class="_container tv_shows">
        <div class="_title">
          <h2>Trending TV Shows</h2>
        </div>
        <div class="_content carousel">
          <!-- Navigation -->
          <span class="nav-left"></span>
          <span class="nav-right"></span>
          <TvShows v-bind:tvShows="tv_shows" />
        </div>
      </div>

      <div class="_container movies">
        <div class="_title">
          <h2>Trending Movies</h2>
        </div>
        <div class="_content carousel">
          <!-- Navigation -->
          <span class="nav-left"></span>
          <span class="nav-right"></span>
          <Movies v-bind:moviez="moviez" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

// @ is an alias to /src
import Carousel from "@/components/Carousel";
import TvShows from "@/components/TvShows";
import Movies from "@/components/Movies";

// dispatch
import { dataService } from "../services";

export default {
  name: "Home",
  data() {
    return {
      search: null,
      loading: false,
      tv_shows: [],
      moviez: [],
    };
  },
  components: {
    Carousel,
    TvShows,
    Movies,
  },
  async created() {
    await this.loadTvShows();
    await this.loadMovies();
  },
  methods: {
    ...mapActions(["getMovies", "getTvShows"]),
    async loadMovies() {
      this.loading = true;
      await this.getMovies("trending");
      // Load just the first 10 Movies
      await this.movies.forEach(async (movie, index) => {
        if (index < 10) {
          await this.loadMovieImages(movie["imdb_id"]);
        }
      });
      this.loading = false;
    },
    async loadTvShows() {
      this.loading = true;
      await this.getTvShows("trending");
      // Load just the first 10 shows
      await this.tvShows.forEach(async (tvShow, index) => {
        if (index < 10) {
          await this.loadShowImages(tvShow["imdb_id"]);
        }
      });
      this.loading = false;
    },
    async loadShowImages(imdbId) {
      this.loading = true;
      this.tv_shows.push(await dataService.getTvShowImages(imdbId));
      this.loading = false;
    },
    async loadMovieImages(imdbId) {
      this.loading = true;
      this.moviez.push(await dataService.getMovieImages(imdbId));
      this.loading = false;
    },
  },
  computed: {
    ...mapState(["movies", "tvShows"]),
  },
};
</script>
