<template>
  <header id="header">
    <div class="_container">
      <router-link class="_logo" to="/">
        <img src="img/logo.png" />
        <h3 class="hom">box</h3>
      </router-link>
      <div class="_nav">
        <ul id="navbar">
          <li>
            <router-link to="/">
              <span class="som ion-home"></span>
              <span class="hom">Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/tvShows">
              <span class="som ion-monitor"></span>
              <span class="hom">TV Shows</span>
            </router-link>
          </li>
          <li>
            <router-link to="/movies">
              <span class="som ion-ios-film"></span>
              <span class="hom">Movies</span>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <span class="som ion-film-marker"></span>
              <span class="hom">Series</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="_actions">
        <div class="search">
          <img src="svg/search.svg" alt="search" />
        </div>
        <div class="notification">
          <img src="svg/bell_notify.svg" alt="notfication" />
        </div>
        <div class="user">
          <img src="svg/add_user.svg" alt="create user" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      home: "/home",
      movies: "/movies",
      tvShows: "/tvshows",
    };
  },
};
</script>

<style></style>
