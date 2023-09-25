<template>
  <div class="register">
    <section class="">
      <Header />
    </section>
    <section class="mt-8">
      <Users />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Users from "../components/users/users.vue";
export default {
  layout: "dashboard",
  components: {
    Header,
    Users,
  },
};
</script>
