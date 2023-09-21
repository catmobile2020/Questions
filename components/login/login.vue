<template>
  <div class="">
    <v-form class="conOfForm logIn">
      <v-container>
        <div>
          <v-container fluid>
            <v-row class="d-flex justify-center">
              <v-col md="6" cols="12" class="loginForm">
                <v-col cols="12">
                  <v-text-field
                    outlined
                    placeholder="Email Address"
                    required
                    solo
                    hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12 pb-2">
                  <v-text-field
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
                <v-col cols="12" md="12" class="d-flex justify-center">
                  <v-btn class=""> Login </v-btn>
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
      email: "",
      password: "",
      Me: {},
      successSnackbar: false,
      errorSnackbar: false,
      timeout: 3000,
      successMessage: "",
      errorMessage: "",
    };
  },
  components: {},
  methods: {},
};
</script>
