<template>
    <v-app>
        <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        left
      >
      <v-list>
        <v-list-item class="mx-auto">
          <v-list-item-avatar>
            <v-img src="../assets/Photos/logo.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item class="text-center">
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-center">
              World Heart Day
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
        <v-list
          nav
          dense
          rounded
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="(item, i) in list" :key="i" link :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "DashboardLayout",
    components: {},
    data: () => ({
      drawer: true,
      list: [
        {
            title: 'Dashboard',
            to: '/dashboard'
          },
          {
            title: 'Users',
            to: '/users'
          },
      ]
    }),

    watch: {
    },
  };
  </script>
<style>
/*.v-main{
    padding: unset;
} */
</style>