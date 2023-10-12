<template>
  <div class="topRank">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <h2 v-if="rank !== null">
            Your Rank:
            <span class="rank">{{ rank }}</span>
          </h2>
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
      userData: "",
      rank: null,
      userRank: [],
      tableHeaders: [
        { text: "Name", value: "name" },
        { text: "Score", value: "score" },
      ],
    };
  },
  created() {
    this.getData();
    this.rank = this.$route.query.rank;
  },
  computed: {
    score() {
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
<style>
.rank {
  color: Red;
  font-size: 25px;
}
</style>
