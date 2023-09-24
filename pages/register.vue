<template>
  <div class="Header">
    <section class="">
      <Header />
    </section>
    <section class="">
      <register />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import register from "../components/register.vue";
export default {
  components: {
    Header,
    register,
  },
};
</script>
