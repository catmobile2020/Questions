<template>
  <div class="landingPage">
    <div class="btn-container">
      <v-row>
        <v-col cols="12" md="12" class="">
          <nuxt-link to="/login" class="link">
            <v-btn class="start-btn primary" x-large> Login </v-btn>
          </nuxt-link>
          <nuxt-link to="/register" class="link">
            <v-btn class="start-btn primary" x-large> Register </v-btn>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
