<template>
  <div class="register">
    <section class="mt-12">
      <Register />
    </section>
  </div>
</template>

<script>
import Register from "../components/register/register.vue";
export default {
  name: "home",
  components: {
    Register,
  },
};
</script>
