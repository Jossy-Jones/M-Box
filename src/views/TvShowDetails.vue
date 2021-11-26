<template>
  <main>
    <section id="ShowDetails">
      <div class="_container">
        <div class="_header">
          <div class="fanart">
            <img src="/img/bck.jpg" />
          </div>
          <button class="playButton"><i class="ion-play"></i></button>
          <div class="_trailer">
            <iframe width="100%" height="100%" src=""></iframe>
          </div>
        </div>
        <div class="_content">
          <div class="_details">
            <div class="_poster">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZTllZTdlOGEtZTBmMi00MGQ5LWFjN2MtOGEyZTliNGY1MzFiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX675_.jpg"
              />
            </div>
            <div class="_highlights">
              <h2 class="_title">Ad Astra</h2>
              <ul class="_info">
                <li>
                  Genres:
                  <ul class="genres">
                    <li>Sci-Fi</li>
                    <li>Drama</li>
                    <li>Adventure</li>
                  </ul>
                </li>
                <li>Year: <span class="year"> 2021</span></li>
                <li>Rated: <span class="pg">18+</span></li>
                <li>Seasons: <span class="seasons">9 Seasons</span></li>
                <li>
                  IMDB Ratings:
                  <span class="rating"><i class="ion-star"></i>8.8</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="description">
            <h2>Description</h2>
            <input type="checkbox" name="show-text" id="show-text" hidden />
            <p>
              The near future, a time when both hope and hardships drive
              humanity to look to the stars and beyond. While a mysterious
              phenomenon menaces to destroy life on planet Earth, astronaut Roy
              McBride undertakes a mission across the immensity of space and its
              many perils to uncover the truth about a lost expedition that
              decades before boldly faced emptiness and silence in search of the
              unknown.
            </p>
            <label for="show-text"></label>
          </div>
          <div class="directors">
            <h2>Directors</h2>
            <ul>
              <li>Dan Bradley</li>
              <li>James Gray</li>
              <li>Sharron Reynolds-Enriquez</li>
            </ul>
          </div>
          <div class="casts">
            <h2>Casts</h2>
            <ul>
              <li>Brad Pitt</li>
              <li>Tommy Lee Jones</li>
              <li>Ruth Negga</li>
              <li>John Ortiz</li>
              <li>Donald Sutherland</li>
              <li>Grey Bryk</li>
              <li>Loren Dean</li>
              <li>Kimberly Elise</li>
              <li>John Finn</li>
            </ul>
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
  name: "TvShow-Details",
  data() {
    return {
      Show: {},
    };
  },
  async created() {
    await this.loadShow(this.$route.params.ShowId);
  },
  computed: {
    ...mapGetters(["getShowById"]),
    ...mapActions(["getShow"]),
  },
  methods: {
    async playTrailer(trailerId) {
      console.log(trailerId);
    },
    async loadShow(imdbId) {
      this.loading = true;
      this.Show = {
        ...(await dataService.getShow(imdbId)),
        ...(await dataService.getShowImages(imdbId)),
      };
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
