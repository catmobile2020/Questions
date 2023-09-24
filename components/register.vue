<template>
  <div>
    <div class="conOfRegister mb-3">
      <h2 class="HeadOfConOfRegister">
        National ASCVD Risk Assessment Calculator in KSA
      </h2>
      <h5 class="TextOfConOfRegister">
        This interactive tool provides a user-friendly interface for robust
        estimation of Atherosclerotic Cardiovascular Disease (ASCVD) risk in the
        KSA population. It represents a collaborative initiative and unifies the
        efforts to combat cardiovascular disease and improve patient outcomes in
        the Kingdom.
      </h5>
    </div>
    <div class="conOfForm logIn">
      <v-container class="Register-form">
        <div>
          <span class="patientDetails">
            Kindly fill the data of your patient below</span
          >
          <span
            >- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - -
          </span>
        </div>
        <v-row class="d-flex justify-center mt-3">
          <v-col md="6">
            <v-text-field
              outlined
              placeholder="Name"
              required
              solo
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <v-col md="6">
            <v-text-field
              outlined
              class="formInput"
              placeholder="Age"
              type="number"
              required
              hide-details="auto"
              solo
            ></v-text-field>
          </v-col>
          <v-col md="6">
            <v-select
              :items="genders"
              label="Gender"
              outlined
              required
              hide-details="auto"
              solo
            ></v-select>
          </v-col>
          <v-col md="6">
            <v-text-field
              outlined
              class="formInput"
              placeholder="ID"
              type="number"
              required
              hide-details="auto"
              solo
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            v-for="(item, i) in questions"
            :key="i"
            class="text-field-style"
          >
            <p>{{ item }}</p>
            <v-radio-group mandatory row>
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="No"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <v-btn class="primary registerStartBtn"> Start </v-btn>
          </v-col>
        </v-row>
      </v-container>
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
      radios: null,
      genders: ["male", "Female"],
      questions: [
        "Diabetic",
        "Hypertensive",
        "Dyslipidemic",
        "Smoker",
        "Family history of premature CAD",
      ],
    };
  },
  components: {},
  methods: {},
};
</script>
