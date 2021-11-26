<template>
  <main>
    <section id="movieDetails">
      <div class="_container">
        <div class="_header">
          <div class="fanart">
            <img :src="movie.fanart" :alt="`${movie.title}-fanart`" />
          </div>
          <button class="playButton"><i class="ion-play"></i></button>
          <div class="_trailer">
            <iframe width="100%" height="100%" src=""></iframe>
          </div>
        </div>
        <div class="_content">
          <div class="_details">
            <div class="_poster">
              <img :src="movie.poster" :alt="movie.title" />
            </div>
            <div class="_highlights">
              <h2 class="_title">{{ movie.title }}</h2>
              <ul class="_info">
                <li>
                  Genres:
                  <ul
                    v-if="
                      typeof movie.genre == 'object' &&
                      movie.genre instanceof Array
                    "
                    class="genres"
                  >
                    <li v-for="(item, index) in movie.genre" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                  <span class="genres" v-else>{{ movie.Genre }}</span>
                </li>
                <li>
                  Year: <span class="year">{{ movie.Year }}</span>
                </li>
                <li>
                  Rated: <span class="pg">{{ movie.Rated }}</span>
                </li>
                <li>
                  Runtime: <span class="runtime">{{ movie.Runtime }}</span>
                </li>
                <li>
                  Language: <span class="language">{{ movie.Language }}</span>
                </li>
                <li>
                  IMDB Ratings:
                  <span class="rating">
                    <i class="ion-star"></i>
                    {{ movie.imdbRating }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="description">
            <h2>Description</h2>
            <input type="checkbox" name="show-text" id="show-text" hidden />
            <p>{{ movie.Plot }}</p>
            <label for="show-text"></label>
          </div>
          <div class="directors">
            <h2>Directors</h2>
            <ul
              v-if="
                typeof movie.Director == 'object' &&
                movie.genre instanceof Array
              "
            >
              <li v-for="(item, index) in movie.Director" :key="index">
                {{ item }}
              </li>
            </ul>
            <span v-else>{{ movie.Director }}</span>
          </div>
          <div class="casts">
            <h2>Casts</h2>
            <ul
              v-if="
                typeof movie.Actors == 'object' && movie.genre instanceof Array
              "
            >
              <li v-for="(item, index) in movie.Actors" :key="index">
                {{ item }}
              </li>
            </ul>
            <span v-else>{{ movie.Actors }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { dataService } from "../services";

export default {
  name: "Movie-Details",
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    await this.loadMovie(this.$route.params.movieId);
  },
  computed: {
    ...mapGetters(["getMovieById"]),
    ...mapActions(["getmovie"]),
  },
  methods: {
    async playTrailer(trailerId) {
      console.log(trailerId);
    },
    async loadMovie(imdbId) {
      this.loading = true;
      this.movie = {
        ...(await dataService.getMovie(imdbId)),
        ...(await dataService.getMovieImages(imdbId)),
      };
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
