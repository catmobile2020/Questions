<template>
  <div>
    <v-app-bar fixed app>
      <v-row class="d-block">
        <div class="d-flex justify-space-between">
          <v-row>
            <v-col>
              <nuxt-link to="/" class="link">
                <img
                  class="match-logo"
                  src="../../assets/Photos/Match/match_logo.png"
                  alt=""
                />
              </nuxt-link>
            </v-col>
            <v-col class="d-flex justify-end">
              <a @click="logOut()" class="loginlink"> Logout </a>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // Set RTL Direction
      this.$vuetify.rtl = this.$i18n.locale === "ar";
    });
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

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
<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff;
}
.loginlink {
  color: #bf9021 !important;
}
</style>
