<template>
  <div class="conOfForm logIn">
    <div>
      <div class="image">
        <v-col class="logOutBtn d-flex justify-end" cols="2">
          <nuxt-link to="userID" class="">
            <v-btn text class="primary text"> back </v-btn>
          </nuxt-link>
        </v-col>
      </div>
    </div>
    <v-container class="loginForm">
      <div class="userDetails">
        <v-row>
          <v-col class="d-flex justify-center">
            <div class="step">Patient Profile</div>
          </v-col>
          <v-col cols="12" md="12" class="">
            <div class="text-field-style">
              <h3>Personal Information</h3>
              <v-col class="d-flex justify-center">
                <img width="200" :src="userData.qr_code" alt="" />
              </v-col>
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
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Triglycerides :
                  {{ userData.triglycerides }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  HDL :
                  {{ userData.HDL }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  LDL :
                  {{ userData.LDL }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Total Cholesterol :
                  {{ userData.total_cholesterol }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Systolic Blood Pressure :
                  {{ userData.systolic_blood_pressure }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Diastolic Blood Pressure :
                  {{ userData.diastolic_blood_pressure }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Weight :
                  {{ userData.weight }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Height :
                  {{ userData.height }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Blood Sugar :
                  {{ userData.blood_sugar }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  Pulse :
                  {{ userData.pulse }}
                </p>
              </v-col>
              <v-col md="3" cols="4">
                <p class="text-field-style">
                  10-year estimated risk for ASCVDs :
                  {{ userData.risk_assessment }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressureScale: null,
      bloodSugarLevel: null,
      userData: {},
      formData: {
        uuid: this.$route.query.uuid,
        risk_assessment: "",
      },
    };
  },
  computed: {},
  methods: {
    async getData() {
      try {
        const data = await this.$axios.$get(
          `/step-four/show/${this.formData.uuid}`
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
