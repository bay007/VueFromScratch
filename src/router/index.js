import Vue from "vue";
import Router from "vue-router";
import UsersForm from "@/components/Formulary";
import Test from "@/components/Test";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/registro",
      component: UsersForm
    },
    {
      path: "/",
      component: Test
    }
  ]
});
