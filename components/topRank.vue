<template>
  <div class="topRank">
    <v-container>
      <v-row>
        <v-col>
          <p>Yor Score: {{ score }}</p>
        </v-col>
        <v-col cols="12">
          <h3>Top Score</h3>
        </v-col>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr v-for="(item, index) in userData" :key="index">
                  <td class="specificationName">{{ item.name }}</td>
                  <td class="specificationValue">{{ item.score }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: [],
      tableHeaders: [
        { text: "Name", value: "name" },
        { text: "Score", value: "score" },
      ],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    score() {
      // Access the score from the route parameter
      return this.$route.params.score;
    },
  },
  methods: {
    async getData() {
      try {
        const data = await this.$axios.$get(`/top-rank`);
        this.userData = data.data;
        console.error("userData:", this.userData);
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
};
</script>
<style></style>
