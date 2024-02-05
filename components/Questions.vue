<template>
  <div>
    <div>
      <div class="questionComponent">
        <v-form class="conOfForm">
          <v-container>
            <v-row>
              <v-col>
                <p class="d-flex justify-center align-center">
                  <span class="Time"> Time remaining : </span>
                  <span class="counter">{{ countdown }}</span>
                </p>
              </v-col>
            </v-row>
            <v-row
              class="d-flex justify-center align-center"
              v-if="currentQuestionIndex < questionsData.length"
            >
              <v-col cols="12" md="6">
                <div>
                  <p>{{ questionsData[currentQuestionIndex].title }}</p>
                  <v-radio-group
                    v-model="selectedAnswer"
                    @change="handleAnswerChange"
                  >
                    <v-radio
                      v-for="(choice, key) in questionsData[
                        currentQuestionIndex
                      ].answers"
                      :key="key"
                      :label="choice"
                      :value="key"
                    ></v-radio>
                  </v-radio-group>
                </div>
                <div class="d-flex justify-end">
                  <v-btn
                    @click="submitAnswer"
                    class="submitBtn orange-btn-color"
                    >Next
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center" v-else>
              <div class="Message">
                <p class="success-message">Quiz Completed!</p>
              </div>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: null,
      countdown: 30,
      timer: null,
      userResponses: [],
      questionsData: [],
    };
  },
  computed: {},
  created() {
    this.startTimer();
    this.getQuestionsData();
    const user_id = localStorage.getItem("user_id");
  },
  watch: {},
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.countdown--;

        if (this.countdown === 0) {
          this.submitAnswer();
        }
      }, 1000);
    },
    handleAnswerChange() {},
    submitAnswer() {
      const response = {
        question_id: this.questionsData[this.currentQuestionIndex].id,
        user_answer: this.selectedAnswer,
        time_taken: 30 - this.countdown,
      };
      this.userResponses.push(response);
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.countdown = 30;
      if (this.currentQuestionIndex < this.questionsData.length) {
        clearInterval(this.timer);
        this.startTimer();
      } else {
        clearInterval(this.timer);
        this.sendDataToEndpoint();
      }
    },
    async sendDataToEndpoint() {
      try {
        const user_id = localStorage.getItem("user_id");

        const data = {
          user_id: user_id,
          answers: this.userResponses,
        };

        const response = await this.$axios.$post("/upload_answers", data);
        this.countdown = 0;
        console.log("API Response:", response);
      } catch (error) {
        const errorData = error.data.error.name;
        this.errorSnackbar = true;
        this.errorMessage = errorData;
      }

      console.log(" data :", this.userResponses);
    },
    async getQuestionsData() {
      const data = await this.$axios.$get("/questions");
      this.questionsData = data.questions;
    },
  },
};
</script>

<style>
.loginlink {
  color: #bf9021 !important;
}
.Time {
  font-size: 22px;
  color: #000 !important;
  font-weight: bold;
}
.counter {
  font-size: 22px;
  color: red !important;
  font-weight: bold;
}
.Message {
  font-size: 30px;
  color: #bf9021;
  font-weight: 500;
}
</style>
