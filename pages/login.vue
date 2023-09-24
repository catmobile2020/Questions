<template>
  <div class="homepage">
    <section class="">
      <Header />
    </section>
    <section class="">
      <Login />
    </section>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Login from "../components/login/login.vue";
export default {
  name: "landingPages",
  components: {
    Login,
    Header,
  },
};
</script>
