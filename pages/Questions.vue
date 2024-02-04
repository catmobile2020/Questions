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
      <Questions />
    </section>
  </div>
</template>
<script>
import Questions from "../components/Questions.vue";
export default {
  components: {
    Questions,
  },
};
</script>
