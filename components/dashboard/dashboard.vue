<template>
  <v-form class="conOfForm">
    <v-container>
      <div>
        <v-row>
          <br />
          <h1 class="text-center ma-auto">Total number of scanned attendees</h1>
          <v-col cols="12 d-flex text-field-style">
            <v-col md="6" class="">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">attendees per day</div>
                    <v-list-item-title class="text-h5 mb-1">
                      total number
                    </v-list-item-title>
                    <v-list-item-subtitle>50</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">attendees all days</div>
                    <v-list-item-title class="text-h5 mb-1">
                      total number
                    </v-list-item-title>
                    <v-list-item-subtitle>500</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12 text-field-style">
            <h2>ATTENDEES ALL DAYS</h2>
            <br />
            <div class="dashboard">
              <v-row>
                <v-col md="4" cols="12">
                  <v-text-field outlined label="search by age" dense>
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-select :items="genders" outlined label="Gender" dense>
                  </v-select>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field outlined label="search by diabetic" dense>
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field outlined label="search by hypertensive" dense>
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field outlined label="search by Dyslipidemic" dense>
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field outlined label="search by smoker" dense>
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field
                    outlined
                    label="search by risk assessment"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-data-table
                :headers="headers"
                :items="data"
                :items-per-page="5"
                class="elevation-1"
              >
                <template #[`item.Actions`]="{ item }">
                  <v-btn icon elevation="0" color="primary">
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Gender", value: "gender" },
        { text: "Age", value: "Age" },
        { text: "ID", value: "ID" },
        { text: "Actions", value: "Actions" },
      ],
      genders: ["Male", "Female"],
      data: [
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
        {
          name: "Ahmed",
          gender: "Male",
          Age: 26,
          ID: 123654,
        },
      ],
    };
  },
  created () {
    this.getData()
  },
  methods: {
    async  getData() {
      const currentDay = new Date().toISOString().slice(0, 10);
      const data = await this.$axios.$get(`/admin/count_attendees?ber_day=${currentDay}`);
      console.log('data', data)
    }
  }
};
</script>
<style>
.v-sheet.v-card {
  border-radius: 15px !important;
}
</style>
