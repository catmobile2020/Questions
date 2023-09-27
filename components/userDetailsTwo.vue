<template>
  <div class="conOfForm logIn">
    <v-container class="loginForm">
      <div class="userDetails">
        <v-row>
          <v-col class="d-flex justify-center">
            <div class="step">
              Step
              <span class="stepNum"> 2 </span>
            </div>
          </v-col>
          <v-col cols="12" md="12" class="">
            <div class="text-field-style">
              <h3>Personal Information</h3>
              <div class="d-flex">
                <p class="text-field-style">Name : {{ userData.name }}</p>
                <p class="text-field-style">age : {{ userData.age }}</p>
                <p class="text-field-style">gender : {{ userData.gender }}</p>
                <p class="text-field-style">
                  national id : {{ userData.national_id }}
                </p>
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
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Lipid Test :
                  {{ userData.lipid_test }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  hpa1c :
                  {{ userData.hpa1c }}
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6" cols="6">
            <label>Systolic Blood Pressure</label>
            <v-text-field
              type="number"
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.systolic_blood_pressure"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>Diastolic Blood Pressure</label>
            <v-text-field
              type="number"
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.diastolic_blood_pressure"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>weight</label>
            <v-text-field
              type="number"
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.weight"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>height</label>
            <v-text-field
              type="number"
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.height"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>Blood Sugar</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              type="number"
              solo
              v-model="formData.blood_sugar"
              :rules="validRule"
            ></v-text-field>
          </v-col>
          <v-col md="6" cols="6">
            <label>pulse</label>
            <v-text-field
              type="number"
              outlined
              class="formInput"
              placeholder="Number"
              required
              hide-details="auto"
              solo
              v-model="formData.pulse"
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validRule: [(v) => !!v || "Filed is Required"],
      showDialog: false,
      pressureScale: null,
      bloodSugarLevel: null,
      userData: {},
      formData: {
        uuid: this.$route.query.uuid,
        systolic_blood_pressure: "",
        diastolic_blood_pressure: "",
        weight: "",
        height: "",
        blood_sugar: "",
        pulse: "",
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.formData.systolic_blood_pressure &&
        this.formData.diastolic_blood_pressure &&
        this.formData.weight &&
        this.formData.height &&
        this.formData.blood_sugar &&
        this.formData.pulse
      );
    },
  },
  methods: {
    async submit() {
      try {
        const data = await this.$axios.$post(
          "/step-three/update",
          this.formData
        );
        this.showDialog = true;
      } catch (error) {
        console.error("API Error:", error);
      }
    },
    async getData() {
      try {
        const data = await this.$axios.$get(
          `/step-three/show/${this.formData.uuid}`
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
};
</script>
