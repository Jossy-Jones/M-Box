import { createRouter, createWebHistory } from "vue-router";

// const parseProps = (r) => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/*webpackChunkName: "bundle.movies" */ "../views/Home.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () =>
      import(/*webpackChunkName: "bundle.movies" */ "../views/MoviesList.vue"),
  },
  {
    path: "/movies/:movieId",
    name: "Movie-Details",
    // props: true,
    component: () =>
      import(
        /*webpackChunkName: "bundle.movies" */ "../views/MovieDetails.vue"
      ),
  },
  {
    path: "/tvshows",
    name: "TvShows",
    component: () =>
      import(/*webpackChunkName: "bundle.movies" */ "../views/TvShowsList.vue"),
  },
  {
    path: "/tvshows/:showId",
    name: "TvShow-Details",
    component: () =>
      import(
        /*webpackChunkName: "bundle.tvshow" */ "../views/TvShowDetails.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
