import Vue from "vue";
import Router from "vue-router";

//pages
import Hello from "@/pages/Hello";
import index from "@/pages/index";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
  ]
});
