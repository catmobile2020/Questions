<template>
  <div class="Header">
    <section class="">
      <Header />
    </section>
    <section class="">
      <Questions />
    </section>
  </div>
</template>
<script>
import Questions from "../components/Questions.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Questions,
    Header,
  },
};
</script>
