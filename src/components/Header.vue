<template>
  <header id="header">
    <div class="_container">
      <a class="_logo" href="">
        <img src="img/logo.png" />
        <h3 class="hom">box</h3>
      </a>
      <div class="_nav">
        <ul id="navbar">
          <li>
            <a href=""
              ><span class="som ion-home"></span
              ><span class="hom">Home</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="som ion-monitor"></span
              ><span class="hom">TV Shows</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="som ion-ios-film"></span
              ><span class="hom">Movies</span></a
            >
          </li>
          <li>
            <a href=""
              ><span class="som ion-film-marker"></span
              ><span class="hom">Series</span></a
            >
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
};
</script>

<style></style>
