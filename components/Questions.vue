<template>
  <div>
    <div>
      <div class="questionComponent">
        <v-form class="conOfForm">
          <v-container>
            <v-row> </v-row>
            <v-row
              class="d-flex justify-center align-center flex-column"
              v-if="currentQuestionIndex < questionsData.length && countdown >= 1 && !loading"
            >
              <v-col class="d-flex">
                <v-col>
                  <p class="d-flex justify-center align-center">
                    <span class="Time"> Time remaining : </span>
                    <span class="counter"> {{ countdownTimer }}</span>
                  </p>
                </v-col>
                <v-col>
                  <p class="d-flex justify-center align-center">
                    <span class="Time"> Question &nbsp; </span>
                    <span class="counter">
                      {{ currentQuestionIndex + 1 }} / {{questionsData.length}}</span
                    >
                  </p>
                </v-col>
              </v-col>
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
            <v-row class="d-flex justify-center" v-else-if="countdown >= 1 && loading">
              <div class="Message">
                <p class="success-message">Please wait!</p>
              </div>
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
      countdown: 35 * 60,
      timer: null,
      loading : false,
      userResponses: [],
      questionsData: [],
    };
  },
  computed: {
    countdownTimer() {
      let countdown = this.countdown;
      if (countdown >= 60) {
        let min = Math.floor(countdown / 60); // Calculate minutes
        let sec = countdown % 60; // Calculate remaining seconds
        return `${min} : ${sec.toString().padStart(2, '0')}`; // Ensure seconds are always two digits with leading zeros if necessary
      } else if (countdown < 60 && countdown >= 0) {
        return `00 : ${countdown.toString().padStart(2, '0')}`; // Format seconds with leading zeros
      } else {
        return '00 : 00'; // Default value if countdown is negative
      }
    }
  },
  created() {
    this.startTimer();
    this.getQuestionsData();
    const user_id = localStorage.getItem("user_id");

    const registrationCompleted = sessionStorage.getItem(
      "registration_completed"
    );

    if (!user_id || registrationCompleted !== "true") {
      // Redirect to register page
      this.$router.push("/");
    } else {
      window.addEventListener("beforeunload", this.handleBeforeUnload);
    }
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },

  watch: {},
  methods: {
    handleBeforeUnload() {
      console.log("Before unload. Current sessionStorage:", sessionStorage);

      const registrationCompleted = sessionStorage.getItem(
        "registration_completed"
      );
      if (registrationCompleted) {
        sessionStorage.removeItem("registration_completed");
        console.log("Item 'registration_completed' removed.");
      }

      console.log("After removal. Updated sessionStorage:", sessionStorage);
    },

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
        time_taken: 35 * 60 - this.countdown,
      };
      this.userResponses.push(response);
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      if (this.countdown === 0 || this.currentQuestionIndex >= this.questionsData.length) {
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
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (error) {
        // Handle error
        const errorData = error.data.error.name;
        this.errorSnackbar = true;
        this.errorMessage = errorData;
      }

      console.log(" data :", this.userResponses);
    },
    async getQuestionsData() {
      this.loading = true
      try {
        const data = await this.$axios.$get("/questions");
        this.questionsData = data.questions;
      } catch (err) {} finally {
        this.loading = false
      }
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
  margin-inline-start: 8px;
  display: inline-block;
}
.Message {
  font-size: 30px;
  color: #bf9021;
  font-weight: 500;
}
</style>