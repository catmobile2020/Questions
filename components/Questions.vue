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
              v-if="currentQuestionIndex < questions.length"
            >
              <v-col cols="12" md="6">
                <div>
                  <p>{{ questions[currentQuestionIndex].text }}</p>
                  <v-radio-group
                    v-model="selectedAnswer"
                    @change="handleAnswerChange"
                  >
                    <v-radio
                      v-for="(answer, index) in questions[currentQuestionIndex]
                        .answers"
                      :key="index"
                      :label="answer"
                      :value="answer"
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
      questions: [
        {
          id: 1,
          text: "Question 1?",
          answers: ["Option 1", "Option 2", "Option 3"],
        },
        {
          id: 2,
          text: "Question 2?",
          answers: ["Option 1", "Option 2", "Option 3"],
        },
        {
          id: 3,
          text: "Question 3?",
          answers: ["Option 1", "Option 2", "Option 3"],
        },
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      countdown: 30,
      timer: null,
      userResponses: [],
    };
  },
  computed: {},
  created() {
    // Start the timer for the first question
    this.startTimer();
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
    handleAnswerChange() {
      // Do nothing here, let the countdown continue
    },
    submitAnswer() {
      // Store user response for the current question
      const response = {
        question_id: this.questions[this.currentQuestionIndex].id,
        answer: this.selectedAnswer,
        time: 30 - this.countdown, // Time taken to answer
      };
      this.userResponses.push(response);

      // Move to the next question and reset the countdown
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.countdown = 30;

      // Check if there are more questions
      if (this.currentQuestionIndex < this.questions.length) {
        clearInterval(this.timer);
        this.startTimer();
      } else {
        clearInterval(this.timer);
        // Send userResponses array to the endpoint
        this.sendDataToEndpoint();
      }
    },
    sendDataToEndpoint() {
      // Replace this with your actual API endpoint and method (e.g., using axios)
      // Example using axios:
      // axios.post('your_api_endpoint', this.userResponses)
      console.log(" data :", this.userResponses);
    },
  },
};
</script>

<style>
.v-input--radio-group--column .v-input--radio-group__input {
  flex-direction: unset;
}
.v-radio {
  padding: 0px 30px;
}
.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
  margin-bottom: 0px;
}
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
