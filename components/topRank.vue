<template>
  <div class="topRank">
    <v-container>
      <v-row>
        <v-row class="d-flex">
          <v-col md="12" class="d-flex justify-center orange-color">
            <h2>
              your score is
              <span class="rank">{{ score }}</span>
            </h2>
          </v-col>
          <v-col md="12" class="d-flex justify-center orange-color">
            <h2 v-if="rank !== null">
              Your ranked
              <span class="rank">{{ rank }}th </span>
              in the league
            </h2>
          </v-col>
        </v-row>
        <v-col cols="12">
          <h3>league Score</h3>
        </v-col>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <td class="">Name</td>
                  <td class="">Score</td>
                  <td class="">Rank</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in userData"
                  :key="index"
                  :class="{ 'user-row': item.name === userName }"
                >
                  <td class="specificationName">{{ item.name }}</td>
                  <td class="specificationValue">{{ item.score }}</td>
                  <td class="specificationValue">{{ item.rank }}</td>
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
      score: null,
      userData: [],
      rank: null,
      userRank: null,
      userName: null,
      tableHeaders: [
        { text: "Name", value: "name" },
        { text: "Score", value: "score" },
      ],
    };
  },
  created() {
    this.getData();
    this.rank = this.$route.query.rank;
    this.score = localStorage.getItem("score");
    // const userName = localStorage.getItem("user_name");
    this.userName = localStorage.getItem("user_name");
    // Find the user's data in the userData array
    this.userRank = this.userData.find((item) => item.name === userName) || {};
    console.log("userRank", this.userName);
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

.user-row {
  background-color: #f2772e;
}
</style>
