<template>
  <div class="card-container">
    <template v-for="(movie, index) in moviez" :key="index">
      <div class="card" :id="movie.imdbId">
        <div class="card-body">
          <img :src="movie.poster" :alt="movie.title" srcset="" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "movies",
  props: ["moviez"],
};
</script>

<style>
.hello {
  color: inherit;
}
</style>
