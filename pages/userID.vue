<template>
  <div class="register">
    <section class="">
      <Header />
    </section>
    <section class="mt-8">
      <UserID />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import UserID from "../components/userID.vue";
export default {
  layout: "dashboard",
  components: {
    UserID,
    Header,
  },
};
</script>
