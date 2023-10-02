<template>
  <v-form class="conOfForm">
    <div class="logIn">
      <v-container>
        <div>
          <v-container class="loginForm">
            <div class="userID">
              <div class="btn-container">
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      outlined
                      class="formInput"
                      placeholder="user id"
                      required
                      hide-details="auto"
                      solo
                      v-model="formData.uuid"
                      :rules="validRule"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6" v-if="userData && userData.type_id">
                    <!-- Conditionally render the nuxt-link based on type_id -->
                    <nuxt-link
                      v-if="userData.type_id === 2 && userData.step === 'one'"
                      :to="{
                        name: 'userDetails',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                    <nuxt-link
                      v-else-if="
                        userData.type_id === 2 && userData.step === 'two'
                      "
                      :to="{
                        name: 'userDetailsTwo',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                    <nuxt-link
                      v-else-if="
                        userData.type_id === 2 && userData.step === 'three'
                      "
                      :to="{
                        name: 'userDetailsThree',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-container>
        </div>
      </v-container>
    </div>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      validRule: [(v) => !!v || "Filed is Required"],
      userID: null,
      formData: {
        uuid: "",
      },
    };
  },
  methods: {
    async getData() {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        this.userData = JSON.parse(storedUserData);
        console.log("this.userData", this.userData);
      }
    },
  },
  created() {
    this.getData();
  },
  computed: {
    isFormValid() {
      return this.formData.uuid;
    },
  },
};
</script>
