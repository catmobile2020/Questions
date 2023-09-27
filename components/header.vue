<template>
  <div>
    <div class="image">
      <v-col class="logOutBtn" cols="2">
        <v-btn class="primary LoginBtn" @click="logOut()"> LogOut </v-btn>
      </v-col>
      <!-- <img class="image" src="@/assets/Photos/header copy.jpeg" alt="logo" /> -->
      <div class="conOfHeader mb-3">
        <h2 class="HeadOfConOfHeader">
          National ASCVD Risk Assessment Calculator in KSA
        </h2>
        <h5 class="TextOfConOfHeader">
          This interactive tool provides a user-friendly interface for robust
          estimation of Atherosclerotic Cardiovascular Disease (ASCVD) risk in
          the KSA population. It represents a collaborative initiative and
          unifies the efforts to combat cardiovascular disease and improve
          patient outcomes in the Kingdom.
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},

  methods: {
    async logOut() {
      const data = await this.$axios.$post("/auth/logout");
      console.log("data", data);
      // if (data.message === "Successfully logged out") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("name");
      localStorage.removeItem("userData");
      this.$router.push("/");
      // }
    },
  },
};
</script>
<style></style>
