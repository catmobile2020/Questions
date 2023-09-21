<template>
  <div class="homepage">
    <section class="questions-section">
      <Survey />
    </section>
  </div>
</template>

<script>
import Survey from "../components/survey/survey.vue";

export default {
  name: "home",
  components: {
    Survey,
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
