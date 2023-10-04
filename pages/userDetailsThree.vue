<template>
  <div class="">
    <section class="">
      <Header />
    </section>
    <section class="mt-8">
      <UserDetailsThree />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import UserDetailsThree from "../components/userDetailsThree.vue";
export default {
  middleware: 'authenticated',
  components: {
    Header,
    UserDetailsThree,
  },
};
</script>
