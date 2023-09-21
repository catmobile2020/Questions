<template>
  <div class="homepage">
    <section class="">
      <Login />
    </section>
  </div>
</template>

<script>
import Login from "../components/login/login.vue";
export default {
  name: "landingPages",
  components: {
    Login,
  },
};
</script>
