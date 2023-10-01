<template>
  <div>
    <div class="image">
      <v-col class="logOutBtn" cols="2">
        <v-btn class="primary LoginBtn" v-if="loggedIn" @click="logOut()">
          Logout
        </v-btn>
      </v-col>
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
