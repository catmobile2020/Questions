<template>
  <div class="conOfForm logIn">
    <v-container class="loginForm">
      <div class="userID">
        <div class="btn-container">
          <v-row>
            <v-col md="6">
              <v-text-field
                outlined
                class="formInput"
                placeholder="user id"
                type="number"
                required
                hide-details="auto"
                solo
                v-model="userID"
              ></v-text-field>
            </v-col>
            <v-col md="6">
              <nuxt-link to="/userDetails" class="link">
                <v-btn class="primary" :disabled="!userID"> Search </v-btn>
              </nuxt-link>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userID: null,
    };
  },
};
</script>
