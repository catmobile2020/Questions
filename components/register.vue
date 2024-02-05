<template>
  <div class="RegisterComponent">
    <v-form class="conOfRegisterForm">
      <v-container>
        <div>
          <v-container fluid>
            <v-row class="d-flex justify-center">
              <v-col md="6" cols="12" class="loginForm">
                <v-col cols="12">
                  <v-text-field
                    v-model="registerForm.name"
                    outlined
                    placeholder="Enter your full Name"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="d-flex justify-center">
                  <v-btn class="submitBtn orange-btn-color" @click="saveName()">
                    Let's Go !
                  </v-btn>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <v-snackbar
          v-model="errorSnackbar"
          color="red"
          shaped
          bottom
          right
          :timeout="timeout"
        >
          {{ errorMessage }}
        </v-snackbar>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errorSnackbar: false,
      timeout: 3000,
      errorMessage: "",
      showPassword: false,
      registerData: [],
      Me: {},
      registerForm: {
        name: "",
      },
      userId: null,
    };
  },
  components: {},
  created() {},
  methods: {
    async saveName() {
      const name = this.registerForm.name;

      try {
        const data = {
          name: this.registerForm.name,
        };
        const response = await this.$axios.$post("/user", data);
        this.userId = response.user_id;
        console.log("API Response:", response);
        localStorage.setItem("user_id", this.userId);
        sessionStorage.setItem("registration_completed", true); // Set the flag in sessionStorage

        this.$router.push("/Questions");
      } catch (error) {
        const errorData = error.data.errors.name;
        this.errorSnackbar = true;
        this.errorMessage = errorData;
      }
    },
  },
};
</script>
