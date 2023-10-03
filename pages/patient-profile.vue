<template>
  <div class="Header">
    <section class="">
      <Header />
    </section>
    <section class="">
      <PatientProfile />
    </section>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import PatientProfile from "../components/patient-profile.vue";
export default {
  components: {
    Header,
    PatientProfile,
  },
};
</script>
