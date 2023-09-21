<template>
  <div class="homepage">
    <section class="">
      <Navbar />
    </section>
    <section class="mt-8">
      <TeamDetailes />
    </section>
  </div>
</template>

<script>
import Navbar from "../components/layout/navbar.vue";
import TeamDetailes from "../components/admin/teamDetailes";
export default {
  name: "home",
  components: {
    Navbar,
    TeamDetailes,
  },
  created() {
    if (!localStorage.getItem("accessToken")) {
      this.$router.push("/");
    }
  },
};
</script>
