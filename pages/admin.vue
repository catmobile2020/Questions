<template>
  <div class="homepage">
    <section class="">
      <Admin />
    </section>
  </div>
</template>

<script>
import Admin from "../components/admin/admin.vue";
export default {
  name: "home",
  components: {
    Admin,
  },
  created() {
    console.log("test", JSON.parse(localStorage.getItem("userData")).type);
    if (
      !localStorage.getItem("accessToken") ||
      JSON.parse(localStorage.getItem("userData")).type != "Admin"
    ) {
      this.$router.push("/");
    }
  },
};
</script>
