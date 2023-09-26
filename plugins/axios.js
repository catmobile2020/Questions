import Vue from "vue";
import axios from "axios";
export default function ({
  $axios,
  redirect,
  $auth,
  $toast,
  app,
  store,
  $nuxt,
}) {
  $axios.onRequest((config) => {
    if (process.browser === true) {
      console.log("testtt", config);
      if (localStorage.getItem("token")) {
        config.headers.Authorization =
          localStorage.getItem("token");
      }
    }

    return config;
  });
  $axios.onResponse((response) => {
    return response;
  });

  $axios.onError((error) => {
    return error.response;
  });
  $axios.onResponse((response) => {
    return response;
  });
}
Vue.use(axios);
