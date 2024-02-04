<template>
  <div class="Header">
    <section class="image">
      <img
        class=""
        width="300"
        src="@/assets/Photos/Leqvio-logo_GenericOnly_4C_Rball.png"
      />
    </section>
    <section class="">
      <register />
    </section>
  </div>
</template>
<script>
import register from "../components/register.vue";
export default {
  components: {
    register,
  },
};
</script>
