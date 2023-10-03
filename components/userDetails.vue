<template>
  <div
    class="conOfForm logIn"
    v-if="userData && Object.keys(userData).length > 0"
  >
    <v-container class="loginForm">
      <div class="userDetails">
        <v-row>
          <v-col
            class="d-flex justify-center"
            v-if="
              userData.step == 2 || userData.step == 3 || userData.step == 4
            "
          >
            <div class="step">
              Step
              <span class="stepNum"> 2 </span>
              <span class="completed">Completed</span>
            </div>
          </v-col>
          <v-col class="d-flex justify-center" v-else>
            <div class="step">
              Step
              <span class="stepNum"> 2 </span>
            </div>
          </v-col>

          <v-col cols="12" md="12" class="">
            <div class="text-field-style">
              <h3>Personal Information</h3>
              <div class="d-flex">
                <v-col md="6" cols="6">
                  <p class="text-field-style">Name : {{ userData.name }}</p>
                  <p class="text-field-style">age : {{ userData.age }}</p>
                </v-col>
                <v-col md="6" cols="6">
                  <p class="text-field-style">gender : {{ userData.gender }}</p>
                  <p class="text-field-style">
                    national id : {{ userData.national_id }}
                  </p>
                </v-col>
              </div>
            </div>
            <v-row class="d-flex">
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Family history of premature CAD :
                  {{ userData.family_history_of_premature_CAD }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Diabetic :
                  {{ userData.diabetic }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Hypertensive :
                  {{ userData.hypertensive }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Dyslipidemia :
                  {{ userData.dyslipidemia }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Smoker :
                  {{ userData.smoker }}
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col md="6" cols="6">
            <label>hpa1c</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.hpa1c"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>Lipid Test</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.lipid_test"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>Total Cholesterol</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.total_cholesterol"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>LDL</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.LDL"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>HDL</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.HDL"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>Triglycerides</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.triglycerides"
              :rules="validRule"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <v-col md="12" class="d-flex justify-center">
        <v-btn
          class="primary SubmitBtn"
          :disabled="!isFormValid"
          @click="submit()"
        >
          Submit
        </v-btn>
      </v-col>
      <v-dialog v-model="showDialog" max-width="500">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <h3>{{ formData.name }}</h3>
            <v-icon class="mark"> mdi-checkbox-marked-circle </v-icon>
          </v-card-title>
          <v-card-text>
            <span class="thankYou">Thank You For Your Registration</span>
          </v-card-text>
          <v-card-actions class="pb-10">
            <v-spacer></v-spacer>
            <nuxt-link to="userID" class="">
              <v-btn color="primary" @click="showDialog = false">Close</v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  </div>
  <div v-else class="errMessage">Patient not found!</div>
</template>

<script>
export default {
  data() {
    return {
      errorSnackbar: false,
      timeout: 3000,
      errorMessage: "",
      validRule: [(v) => !!v || "Filed is Required"],
      showDialog: false,
      pressureScale: null,
      bloodSugarLevel: null,
      userData: {},
      formData: {
        uuid: this.$route.query.uuid,
        lipid_test: "",
        hpa1c: "",
        triglycerides: "",
        HDL: "",
        LDL: "",
        total_cholesterol: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        const data = await this.$axios.$post("/step-two/update", this.formData);
        this.showDialog = true;
      } catch (error) {
        if (error && error.data) {
          const errorData = error.data.error;
          const errorMessages = [];
          for (const field in errorData) {
            if (Array.isArray(errorData[field])) {
              errorData[field].forEach((message) => {
                errorMessages.push(message);
              });
            }
          }
          this.errorSnackbar = true;
          this.errorMessage = errorMessages.join("\n");
        } else {
          this.errorMessage = "Registration failed. Please try again later.";
        }
      }
    },
    async getData() {
      try {
        const data = await this.$axios.$get(
          `/step-two/show/${this.formData.uuid}`
        );

        this.userData = data.data;
        console.error("userData:", this.userData);
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  created() {
    this.getData();
  },
  computed: {
    isFormValid() {
      return (
        this.formData.lipid_test &&
        this.formData.hpa1c &&
        this.formData.triglycerides &&
        this.formData.HDL &&
        this.formData.LDL &&
        this.formData.total_cholesterol
      );
    },
  },
};
</script>
