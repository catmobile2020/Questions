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
                    placeholder="Enter Your Name"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="d-flex justify-center">
                  <v-btn class="submitBtn" @click="saveName()">
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
        register: 1,
      },
    };
  },
  components: {},
  created() {},
  methods: {
    async saveName() {
      const name = this.registerForm.name;
      if (name) {
        localStorage.setItem("user_name", name);
      } else {
      }
      try {
        const data = {
          register: this.registerForm.register,
          name: localStorage.getItem("user_name"),
        };
        const response = await this.$axios.$post("/store-score", data);
        console.log("API Response:", response);
        this.$router.push("/Questions");
      } catch (error) {
        const errorData = error.data.error.name;
        this.errorSnackbar = true;
        this.errorMessage = errorData;
      }
    },
  },
};
</script>
