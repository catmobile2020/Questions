<template>
  <div class="homepage">
    <section class="questions-section">
      <Questions />
    </section>
  </div>
</template>

<script>
import Questions from "../components/questions/questions.vue";

export default {
  name: "home",
  components: {
    Questions,
  },
  created() {
    if (!localStorage.getItem("accessToken")) {
      this.$router.push("/");
    } else if (JSON.parse(localStorage.getItem("userData")).is_surveyed == 1) {
      this.$router.push("/team");
    }
  },
};
</script>
