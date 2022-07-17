<template>
  <main>
    <section id="vanguard">
      <Vanguard v-bind:vanguard="vanguard[0]" />
    </section>

    <!-- Categories -->
    <section id="categories">
      <hr />

      <div class="_container tv_shows">
        <div class="_title">
          <h2>Trending TV Shows</h2>
        </div>
        <Category v-bind:items="tv_shows" v-bind:type="`tvshows`" />
      </div>

      <div class="_container movies">
        <div class="_title">
          <h2>Trending Movies</h2>
        </div>
        <Category v-bind:items="moviez" v-bind:type="'movies'" />
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

// @ is an alias to /src
import Vanguard from "@/components/Vanguard";
import Category from "@/components/Category";

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
      vanguard: [],
    };
  },
  components: {
    Vanguard,
    Category,
  },
  async created() {
    await this.loadVanguard("tt11198330");
    [this.loadTvShows(), this.loadMovies()];
  },
  methods: {
    ...mapActions(["getMovies", "getTvShows"]),

    async loadMovies() {
      this.loading = true;
      await this.getMovies("trending");
      // Load just the first 10 Movies
      await this.movies.map(async (movie, index) => {
        if (index < 10) {
          let image = await dataService.getPosters(movie["id"])["posters"][0][
            "link"
          ];
          console.log(image);
          this.moviez.push({
            id: movie["id"],
            image,
          });
        }
      });
      this.loading = false;
    },

    async loadTvShows() {
      this.loading = true;
      await this.getTvShows("trending");
      // Load just the first 10 shows
      await this.tvShows.map(async (tvShow, index) => {
        if (index < 10) {
          let image = await dataService.getPosters(tvShow["id"])["posters"][0][
            "link"
          ];
          this.tv_shows.push({
            id: tvShow["id"],
            image,
          });
        }
      });
      this.loading = false;
    },

    async loadVanguard(imdbId) {
      let data = {
        ...(await dataService.getTvShow(imdbId)),
        ...(await dataService.getTvShowImages(imdbId)),
      };
      this.vanguard.push(data);
    },
  },

  computed: {
    ...mapState(["movies", "tvShows"]),
  },
};
</script>
