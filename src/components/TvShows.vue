<template>
  <div class="card-container">
    <template v-for="(show, index) in tvShows" :key="index">
      <div class="card" :id="show.imdbId">
        <div class="card-body">
          <img :src="show.poster" :alt="show.title" srcset="" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "tvshows",
  props: ["tvShows"],
};
</script>

<style>
.hello {
  color: inherit;
}
</style>
