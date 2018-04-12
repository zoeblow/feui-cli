import Vue from "vue";
import Router from "vue-router";

//pages
import hello from "@/pages/Hello";
import index from "@/pages/Index";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "hello",
      component: hello
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
  ]
});
