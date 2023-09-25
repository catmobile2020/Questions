<template>
  <div>
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
              v-model="formData.name"
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
              v-model="formData.age"
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
              v-model="formData.gender"
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
              v-model="formData.national_id"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            v-for="(item, i) in questions"
            :key="i"
            class="text-field-style"
          >
            <p>{{ item }}</p>
            <v-radio-group mandatory row v-model="formData[item.toLowerCase()]">
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" class="text-field-style">
            <p>Family history of premature CAD</p>
            <v-radio-group
              mandatory
              row
              v-model="formData.family_history_of_premature_CAD"
            >
              <v-radio label="Yes" value="yes"></v-radio>
              <v-radio label="No" value="no"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="12" class="d-flex justify-center">
            <v-btn class="primary registerStartBtn" @click="save()">
              Start
            </v-btn>
          </v-col>
        </v-row>
        <v-dialog v-model="showDialog" max-width="500">
          <v-card>
            <v-card-title class="d-flex justify-center">
              <h3>{{ formData.name }}</h3>
              <v-icon class="mark"> mdi-checkbox-marked-circle </v-icon>
            </v-card-title>
            <v-card-text>
              <span class="thankYou">Thank You For Your Registration</span>
              <v-col>
                <h3>
                  Your id is :
                  <span class="userId"> {{ apiResponse.uuid }} </span>
                </h3>
              </v-col>
              <v-col>
                <h3>And QR Code is:</h3>
                <img width="400" :src="apiResponse.qrCode" alt="" />
              </v-col>
            </v-card-text>
            <v-card-actions class="pb-10">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="showDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      showDialog: false,
      apiResponse: {},
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
      formData: {
        name: "",
        gender: "",
        age: "",
        national_id: "",
        diabetic: "",
        hypertensive: "",
        dyslipidemia: "",
        smoker: "",
        family_history_of_premature_CAD: "",
      },
      genders: ["male", "female"],
      questions: ["Diabetic", "Hypertensive", "Dyslipidemia", "Smoker"],
    };
  },
  methods: {
    async save() {
      try {
        const data = await this.$axios.$post("/step-one/store", this.formData);
        this.apiResponse = data.data;
        this.showDialog = true;
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  components: {},
};
</script>
