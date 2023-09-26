<template>
  <div class="">
    <v-form class="conOfForm">
      <v-container>
        <div>
          <v-container fluid>
            <v-row class="d-flex justify-center align-center">
              <v-col md="6" cols="12" class="loginForm">
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    outlined
                    placeholder="Email Address"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12 pb-2">
                  <v-text-field
                    v-model="form.password"
                    outlined
                    class="formInput"
                    placeholder="Password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    required
                    hide-details="auto"
                    solo
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex justify-center">
                  <!-- <nuxt-link to="/userID" class="link"> -->
                  <v-btn class="primary LoginBtn" @click="doLogin()">
                    Login
                  </v-btn>
                  <!-- </nuxt-link> -->
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </v-form>
    <v-snackbar
      v-model="successSnackbar"
      color="success"
      shaped
      absolute
      bottom
      right
      :timeout="timeout"
    >
      {{ successMessage }}
    </v-snackbar>
    <v-snackbar
      v-model="errorSnackbar"
      color="red"
      shaped
      top
      center
      :timeout="timeout"
    >
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      form: {
        email: "admin@admin.com",
        password: "12345678",
      },

      Me: {},
      successSnackbar: false,
      errorSnackbar: false,
      timeout: 3000,
      successMessage: "",
      errorMessage: "",
    };
  },
  components: {},
  methods: {
    async doLogin() {
      try {
        const data = await this.$axios.$post("/auth/login", this.form);
        console.log("data", data);
        if (data.access_token) {
          localStorage.setItem("token", data.token_type + data.access_token);

          localStorage.setItem("userData", JSON.stringify(data.me));
          if (data.me.type === "Admin") {
            this.$router.push("/dashboard");
          } else {
            this.$router.push("/userID");
          }
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
};
</script>
