<template>
  <div class="conOfForm logIn">
    <v-container class="loginForm">
      <div class="userDetails">
        <v-row>
          <v-col cols="12" md="12" class="">
            <p class="text-field-style">Diabetic : Yes</p>
            <p class="text-field-style">Hypertensive : Yes</p>
            <p class="text-field-style">Dyslipidemic : No</p>
            <p class="text-field-style">Smoker : Yes</p>
            <p class="text-field-style">Family history of premature CAD : NO</p>
          </v-col>
          <v-col md="6">
            <label>Pressure Scale</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              type="number"
              required
              hide-details="auto"
              solo
              v-model="pressureScale"
            ></v-text-field>
          </v-col>
          <v-col md="6">
            <label>Blood Sugar Level</label>
            <v-text-field
              outlined
              class="formInput"
              placeholder="Number"
              type="number"
              required
              hide-details="auto"
              solo
              v-model="bloodSugarLevel"
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <v-col md="12" class="d-flex justify-center">
        <v-btn
          class="primary SubmitBtn"
          :disabled="!pressureScale || !bloodSugarLevel"
        >
          Submit
        </v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressureScale: null,
      bloodSugarLevel: null,
    };
  },
};
</script>
