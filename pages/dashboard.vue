<template>
    <div class="dashboard">
      <section class="">
        <dashboard />
      </section>
    </div>
  </template>
  
  <script>
  import dashboard from "../components/dashboard/dashboard.vue";
  export default {
    name: "landingPages",
    components: {
        dashboard,
    },
  };
  </script>
  