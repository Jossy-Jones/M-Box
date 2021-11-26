<template>
  <div class="slide-container">
    <div
      class="slide"
      v-bind:style="{ 'background-image': `url(${vanguard.fanart})` }"
    >
      <div class="_container">
        <div class="_content">
          <h2 class="_title">{{ this.vanguard.title }}</h2>
          <div class="_info">
            <span class="year">{{ this.vanguard.year_started }}</span>
            <span class="pg">{{ this.vanguard.rated }}</span>
            <!-- <span class="seasons">9 Seasons</span> -->
            <span class="rating"
              ><i class="ion-star"></i>{{ this.vanguard.imdb_rating }}</span
            >
          </div>
          <!-- <p class="description">
            {{ this.vanguard.description }}
          </p> -->
          <div class="_actions">
            <button class="btn primary-btn">Watch Trailer</button>
            <button class="btn secondary-btn">More Information</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vanguard",
  props: ["vanguard"],
};
</script>

<style></style>
