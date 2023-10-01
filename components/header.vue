<template>
  <div>
    <div class="image">
      <v-col class="logOutBtn" cols="2">
        <v-btn class="primary LoginBtn" v-if="loggedIn" @click="logOut()">
          Logout
        </v-btn>
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
    return {
      loggedIn: false,
    };
  },
  mounted() {},

  methods: {
    async logOut() {
      try {
        await this.$axios.$post("/auth/logout");
        console.log("Successfully logged out");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("userData");
        this.loggedIn = false;
        this.$router.push("/");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.loggedIn = true;
    }
  },
};
</script>
<style></style>
