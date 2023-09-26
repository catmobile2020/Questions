<template>
  <div class="">
    <section class="">
      <Header />
    </section>
    <section class="mt-8">
      <UserDetailsTwo />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import UserDetailsTwo from "../components/userDetailsTwo.vue";
export default {
  components: {
    Header,
    UserDetailsTwo,
  },
};
</script>
