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
                    placeholder="Name"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="d-flex justify-center">
                  <v-btn class="submitBtn" @click="saveName()">
                    Click for the survey
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
    };
  },
  components: {},
  created() {},
  methods: {
    saveName() {
      const name = this.registerForm.name;
      if (name) {
        localStorage.setItem("user_name", name);
        this.$router.push("/Questions");
      } else {
        this.errorSnackbar = true;
        this.errorMessage = "Please enter your name.";
      }
    },
  },
};
</script>
