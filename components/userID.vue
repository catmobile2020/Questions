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
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <nuxt-link
                      :to="{
                        name: 'userDetails',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary"> Search </v-btn>
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
      userID: null,
      formData: {
        uuid: "",
      },
    };
  },
  methods: {},
};
</script>
