<template>
  <div class="">
    <section class="">
      <Header />
    </section>
    <section class="mt-8">
      <UserDetails />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import UserDetails from "../components/userDetails.vue";
export default {
  components: {
    Header,
    UserDetails,
  },
};
</script>
