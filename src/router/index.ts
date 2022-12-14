import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CONSTANTS from "@/constants/constants";
import MainPage from "@/components/site/MainPage/MainPage.vue";

Vue.use(VueRouter);

const DetailsPage = () =>
  import("@/components/site/DetailsPage/DetailsPage.vue");
const NotFoundPage = () =>
  import("@/components/site/NotFoundPage/NotFoundPage.vue");

const routes: Array<RouteConfig> = [
  {
    path: CONSTANTS.ROUTES.MAIN_PATH,
    name: "MainPage",
    component: MainPage,
  },
  {
    path: CONSTANTS.ROUTES.DETAILS_PATH,
    name: "DetailsPage",
    component: DetailsPage,
  },
  {
    path: CONSTANTS.ROUTES.NOT_FOUND_PATH,
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
