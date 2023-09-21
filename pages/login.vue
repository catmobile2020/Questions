<template>
  <div class="homepage">
    <section class="header-section">
      <Login />
    </section>
  </div>
</template>

<script>
import Login from "../components/login/login.vue";
export default {
  name: "home",
  components: {
    Login,
  },
  created() {
    if(localStorage.getItem('accessToken')){
      this.$router.push('/questions')
    }
  }
};
</script>
