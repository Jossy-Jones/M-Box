<template>
  <div class="_content carousel">
    <!-- Navigation -->
    <span class="nav-left"></span>

    <div class="carousel-container">
      <div class="card-container">
        <template v-for="(item, index) in items" :key="index">
          <div class="card" :id="item.IMDB">
            <router-link :to="`/${this.collection}/${item.id}`">
              <div class="card-body">
                <img :src="item.image" :alt="item.title" />
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>

    <span class="nav-right"></span>
  </div>
</template>

<script>
export default {
  name: "category",
  props: ["items", "type"],
  data() {
    return {
      collection:
        this.type === "movies"
          ? "movies"
          : this.type === "tvshows"
          ? "tvshows"
          : false,
    };
  },
  created() {
    console.log(this.collection);
  },
  methods: {
    next() {
      console.log("next");
    },
    prev() {
      console.log("previous");
    },
  },
};
</script>

<style>
.hello {
  color: inherit;
}
</style>
