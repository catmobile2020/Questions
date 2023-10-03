<template>
  <v-form class="conOfForm">
    <v-container>
      <div>
        <v-row>
          <br />
          <h1 class="text-center ma-auto">Total number of scanned attendees</h1>
          <v-col cols="12" class="d-md-flex text-field-style">
            <v-col md="6" cols="12" class="">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">attendees per day</div>
                    <v-list-item-title class="text-h5 mb-1">
                      total number
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                      attends.attendees_ber_day
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="text-overline mb-4">attendees all days</div>
                    <v-list-item-title class="text-h5 mb-1">
                      total number
                    </v-list-item-title>
                    <v-list-item-subtitle>{{
                      attends.total_attendees
                    }}</v-list-item-subtitle>
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
                  <v-text-field
                    v-model="filter.age"
                    outlined
                    label="search by age"
                    dense
                    @input="getAnalysis()"
                  >
                  </v-text-field>
                </v-col>
                <v-col md="4" cols="12">
                  <v-select
                    v-model="filter.gender"
                    :items="genders"
                    outlined
                    label="Gender"
                    dense
                    @input="getAnalysis()"
                  >
                  </v-select>
                </v-col>
                <v-col md="4" cols="12">
                  diabetic
                  <v-radio-group
                    v-model="filter.diabetic"
                    row
                    @change="getAnalysis()"
                  >
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col md="4" cols="12">
                  hypertensive
                  <v-radio-group
                    v-model="filter.hypertensive"
                    row
                    @change="getAnalysis()"
                  >
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col md="4" cols="12">
                  dyslipidemia
                  <v-radio-group
                    v-model="filter.dyslipidemia"
                    row
                    @change="getAnalysis()"
                  >
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col md="4" cols="12">
                  smoker
                  <v-radio-group
                    v-model="filter.smoker"
                    row
                    @change="getAnalysis()"
                  >
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col md="4" cols="12">
                  <v-menu
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="filter.ber_day"
                        label="Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        outlined
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="filter.ber_day"
                      @input="(dateMenu = false), getAnalysis()"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col md="4" cols="12">
                  <v-text-field
                    outlined
                    label="search by risk assessment"
                    dense
                    @input="getAnalysis()"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-data-table
                :headers="headers"
                :items="data"
                :items-per-page="15"
                hide-actions
                :server-items-length="totalItems"
                :page-count="numberOfPages"
                :options.sync="options"
                class="elevation-1"
              >
                <template #[`item.Actions`]="{ item }">
                  <v-btn
                    icon
                    elevation="0"
                    color="primary"
                    @click="showDetails(item)"
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-toolbar color="primary" dark>{{ info.name }}</v-toolbar>
        <v-card-text class="mt-3">
          <v-row>
            <v-col md="6">
              <v-label class="bold-text">Age:</v-label>
              <span>{{ info.age }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Gender:</v-label>
              <span>{{ info.gender }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">UUID:</v-label>
              <span>{{ info.uuid }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Blood sugar:</v-label>
              <span>{{ info.blood_sugar }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Body mass:</v-label>
              <span>{{ info.body_mass }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Diabetic:</v-label>
              <span>{{ info.diabetic }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Diastolic blood pressure:</v-label>
              <span>{{ info.diastolic_blood_pressure }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Dyslipidemia:</v-label>
              <span>{{ info.dyslipidemia }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text"
                >Family history of premature CAD:</v-label
              >
              <span>{{ info.family_history_of_premature_CAD }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Height:</v-label>
              <span>{{ info.height }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Weight:</v-label>
              <span>{{ info.weight }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Hpa1c:</v-label>
              <span>{{ info.hpa1c }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Hypertensive:</v-label>
              <span>{{ info.hypertensive }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Lipid test:</v-label>
              <span>{{ info.lipid_test }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">National id:</v-label>
              <span>{{ info.national_id }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Pulse:</v-label>
              <span>{{ info.pulse }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">smoker:</v-label>
              <span>{{ info.smoker }}</span>
            </v-col>
            <v-col md="6">
              <v-label class="bold-text">Systolic blood pressure:</v-label>
              <span>{{ info.systolic_blood_pressure }}</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      info: {},
      totalItems: null,
      numberOfPages: null,
      options: {},
      attends: {
        attendees_ber_day: 0,
        total_attendees: 0,
      },
      dateMenu: false,
      filter: {
        age: "",
        gender: "",
        diabetic: "",
        hypertensive: "",
        dyslipidemia: "",
        smoker: "",
        risk: "",
        ber_day: "",
      },
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Gender", value: "gender" },
        { text: "Age", value: "age" },
        { text: "UUID", value: "uuid" },
        { text: "Actions", value: "Actions" },
      ],
      genders: ["Male", "Female"],
      data: [],
    };
  },
  created() {
    this.getAttends();
    // this.getAnalysis()
  },
  watch: {
    options: {
      handler() {
        this.getAnalysis();
      },
    },
  },

  methods: {
    showDetails(item) {
      this.info = item;
      this.dialog = true;
    },
    async getAttends() {
      const currentDay = new Date().toISOString().slice(0, 10);
      const data = await this.$axios.$get(
        `/admin/count_attendees?ber_day=${currentDay}`
      );
      this.attends = data.data;
    },
    async getAnalysis() {
      const { page, itemsPerPage } = this.options;
      const pageNumber = page;
      const data = await this.$axios.$get(
        `/admin/analysis?page=${pageNumber}&age=${this.filter.age}&gender=${this.filter.gender}&diabetic=${this.filter.diabetic}&hypertensive=${this.filter.hypertensive}&dyslipidemia=${this.filter.dyslipidemia}&smoker=${this.filter.smoker}&risk=${this.filter.risk}&ber_day=${this.filter.ber_day}`
      );
      this.data = data.data;

      this.totalItems = data.meta.total;
      this.numberOfPages = data.meta.last_page;
    },
  },
};
</script>
<style>
.v-sheet.v-card {
  border-radius: 15px !important;
}
.bold-text {
  font-weight: bold;
}
</style>
