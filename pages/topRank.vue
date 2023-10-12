<template>
  <div class="Header">
    <section class="">
      <Header />
    </section>
    <section class="">
      <TopRank />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import TopRank from "../components/topRank.vue";
export default {
  components: {
    Header,
    TopRank,
  },
};
</script>
