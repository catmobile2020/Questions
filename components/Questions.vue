<template>
  <div>
    <div>
      <div class="questionComponent">
        <v-form class="conOfForm">
          <v-container>
            <v-row class="d-flex justify-center">
              <v-col cols="12" md="8" class="questionForm">
                <v-col cols="12" class="score"
                  >Your Score {{ answers.length }}</v-col
                >
                <v-col cols="12" v-if="currentIndex === 0">
                  <label>Which CDK is more targeting breast cancer?</label>

                  <v-radio-group v-model="selectedQ1Answer">
                    <v-radio
                      label="CDK4"
                      value="CDK4"
                      @change="checkQuestionOneAnswer('CDK4')"
                      :disabled="selectedQ1Answer"
                    ></v-radio>
                    <v-radio
                      label="CDK1"
                      value="CDK1"
                      @change="checkQuestionOneAnswer('CDK1')"
                      :disabled="selectedQ1Answer"
                    ></v-radio>
                    <v-radio
                      label="CDK7"
                      value="CDK7"
                      @change="checkQuestionOneAnswer('CDK7')"
                      :disabled="selectedQ1Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ1MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ1Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 1">
                  <label
                    >Which CDK4/6i has a higher affinity towards CDK4 over CDK?
                  </label>

                  <v-radio-group v-model="selectedQ2Answer">
                    <v-radio
                      label="KISQALI"
                      value="KISQALI"
                      @change="checkQuestionTwoAnswer('KISQALI')"
                      :disabled="selectedQ2Answer"
                    ></v-radio>
                    <v-radio
                      label="Verzenio"
                      value="Verzenio"
                      @change="checkQuestionTwoAnswer('Verzenio')"
                      :disabled="selectedQ2Answer"
                    ></v-radio>
                    <v-radio
                      label="Ibrance"
                      value="Ibrance"
                      @change="checkQuestionTwoAnswer('Ibrance')"
                      :disabled="selectedQ2Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ2MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ2Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 2">
                  <label
                    >How many folds does Ribocicib (KISQALI) selects CDK4 over
                    CDK6?
                  </label>

                  <v-radio-group v-model="selectedQ3Answer">
                    <v-radio
                      label="8 folds"
                      value="8 folds"
                      @change="checkQuestionThreeAnswer('8 folds')"
                      :disabled="selectedQ3Answer"
                    ></v-radio>
                    <v-radio
                      label="5 folds"
                      value="5 folds"
                      @change="checkQuestionThreeAnswer('5 folds')"
                      :disabled="selectedQ3Answer"
                    ></v-radio>
                    <v-radio
                      label="3 folds"
                      value="3 folds"
                      @change="checkQuestionThreeAnswer('3 folds')"
                      :disabled="selectedQ3Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ3MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ3Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 3">
                  <label
                    >Which CDK4/6i showed consistent and statistically
                    significant Overall Survival benefit across all three phase
                    3 studies?
                  </label>

                  <v-radio-group v-model="selectedQ4Answer">
                    <v-radio
                      label="KISQALI"
                      value="KISQALI"
                      @change="checkQuestionFourAnswer('KISQALI')"
                      :disabled="selectedQ4Answer"
                    ></v-radio>
                    <v-radio
                      label="Verzenio"
                      value="Verzenio"
                      @change="checkQuestionFourAnswer('Verzenio')"
                      :disabled="selectedQ4Answer"
                    ></v-radio>
                    <v-radio
                      label="Ibrance"
                      value="Ibrance"
                      @change="checkQuestionFourAnswer('Ibrance')"
                      :disabled="selectedQ4Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ4MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ4Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 4">
                  <label
                    >In which clinical trial did KISQALI show the longest median
                    overall survival in 1st line metastatic breast cancer with
                    Fulvestrant?
                  </label>

                  <v-radio-group v-model="selectedQ5Answer">
                    <v-radio
                      label="MONALEESA-2"
                      value="MONALEESA-2"
                      @change="checkQuestionFiveAnswer('MONALEESA-2')"
                      :disabled="selectedQ5Answer"
                    ></v-radio>
                    <v-radio
                      label="MONALEEZA-3"
                      value="MONALEEZA-3"
                      @change="checkQuestionFiveAnswer('MONALEEZA-3')"
                      :disabled="selectedQ5Answer"
                    ></v-radio>
                    <v-radio
                      label="NATALEE"
                      value="NATALEE"
                      @change="checkQuestionFiveAnswer('NATALEE')"
                      :disabled="selectedQ5Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ5MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ5Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 5">
                  <label
                    >In MONALEESA-3 clinical trial, the longest median OS
                    reported in advanced setting after >6 years follow up was?
                  </label>

                  <v-radio-group v-model="selectedQ6Answer">
                    <v-radio
                      label="34 months"
                      value="34 months"
                      @change="checkQuestionSixAnswer('34 months')"
                      :disabled="selectedQ6Answer"
                    ></v-radio>
                    <v-radio
                      label="67.6 Months"
                      value="67.6 Months"
                      @change="checkQuestionSixAnswer('67.6 Months')"
                      :disabled="selectedQ6Answer"
                    ></v-radio>
                    <v-radio
                      label="54 moths"
                      value="54 moths"
                      @change="checkQuestionSixAnswer('54 moths')"
                      :disabled="selectedQ6Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ6MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ6Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 6">
                  <label
                    >In MONALEESA-3 clinical trial, the longest median OS
                    reported in advanced setting after >6 years follow up was?
                  </label>

                  <v-radio-group v-model="selectedQ7Answer">
                    <v-radio
                      label="KISQALI"
                      value="KISQALI"
                      @change="checkQuestionSevenAnswer('KISQALI')"
                      :disabled="selectedQ7Answer"
                    ></v-radio>
                    <v-radio
                      label="Verzenio"
                      value="Verzenio"
                      @change="checkQuestionSevenAnswer('Verzenio')"
                      :disabled="selectedQ7Answer"
                    ></v-radio>
                    <v-radio
                      label="Ibrance"
                      value="Ibrance"
                      @change="checkQuestionSevenAnswer('Ibrance')"
                      :disabled="selectedQ7Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ7MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ7Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 7">
                  <label
                    >Which CDK4/6i has proven non inferiority in terms of
                    efficacy at lower dose with better toxicity profile ?
                  </label>

                  <v-radio-group v-model="selectedQ8Answer">
                    <v-radio
                      label="KISQALI"
                      value="KISQALI"
                      @change="checkQuestionEightAnswer('KISQALI')"
                      :disabled="selectedQ8Answer"
                    ></v-radio>
                    <v-radio
                      label="Verzenio"
                      value="Verzenio"
                      @change="checkQuestionEightAnswer('Verzenio')"
                      :disabled="selectedQ8Answer"
                    ></v-radio>
                    <v-radio
                      label="Ibrance"
                      value="Ibrance"
                      @change="checkQuestionEightAnswer('Ibrance')"
                      :disabled="selectedQ8Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ8MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ8Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 8">
                  <label
                    >Which CDK4/6i is recommended as Category 1 in NCCN
                    guidelines for showing OS benefit at 1L for Patients with
                    HR+/HER2- mBC.?
                  </label>

                  <v-radio-group v-model="selectedQ9Answer">
                    <v-radio
                      label="KISQALI"
                      value="KISQALI"
                      @change="checkQuestionNineAnswer('KISQALI')"
                      :disabled="selectedQ9Answer"
                    ></v-radio>
                    <v-radio
                      label="Verzenio"
                      value="Verzenio"
                      @change="checkQuestionNineAnswer('Verzenio')"
                      :disabled="selectedQ9Answer"
                    ></v-radio>
                    <v-radio
                      label="Ibrance"
                      value="Ibrance"
                      @change="checkQuestionNineAnswer('Ibrance')"
                      :disabled="selectedQ9Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ9MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ9Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 9">
                  <label
                    >KISQALI demonstrated significant OS throughout the 3 phase3
                    trials regardless of the menopausal state, line of therapy,
                    and the ET partner?
                  </label>

                  <v-radio-group v-model="selectedQ10Answer">
                    <v-radio
                      label="True"
                      value="True"
                      @change="checkQuestionTenAnswer('True')"
                      :disabled="selectedQ10Answer"
                    ></v-radio>
                    <v-radio
                      label="False"
                      value="False"
                      @change="checkQuestionTenAnswer('False')"
                      :disabled="selectedQ10Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-center">
                    <div
                      :class="
                        resultQ10MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ10Message }}
                    </div>
                  </v-col>
                </v-col>
                <v-col cols="12" v-if="currentIndex === 10">
                  <label
                    >In MAIC analysis of QOL in MONALEESA-2 vs MONARCH 3 RIB
                    showed significant favor vs ABEMA for diarrhea, fatigue,
                    appetite loss, and arm symptoms?
                  </label>

                  <v-radio-group v-model="selectedQ11Answer">
                    <v-radio
                      label="True"
                      value="True"
                      @change="checkQuestionElevenAnswer('True')"
                      :disabled="selectedQ11Answer"
                    ></v-radio>
                    <v-radio
                      label="False"
                      value="False"
                      @change="checkQuestionElevenAnswer('False')"
                      :disabled="selectedQ11Answer"
                    ></v-radio>
                  </v-radio-group>
                  <v-col cols="12" class="d-flex justify-end">
                    <div
                      :class="
                        resultQ11MessageColor === 'green'
                          ? 'success-message'
                          : 'error-message'
                      "
                    >
                      {{ resultQ11Message }}
                    </div>
                  </v-col>
                </v-col>

                <v-col cols="12" class="d-flex justify-end">
                  <v-btn
                    class="submitBtn"
                    @click="nextQuestion()"
                    v-if="!isFinished"
                    >Next</v-btn
                  >
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <v-btn
                    class="submitBtn"
                    @click="storeScore()"
                    v-if="isFinished"
                    >Display Top Score</v-btn
                  >
                </v-col>
              </v-col>
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
      formData: {
        name: "",
      },
      resultQ1MessageColor: null,
      resultQ2MessageColor: null,
      resultQ3MessageColor: null,
      resultQ4MessageColor: null,
      resultQ5MessageColor: null,
      resultQ6MessageColor: null,
      resultQ7MessageColor: null,
      resultQ8MessageColor: null,
      resultQ9MessageColor: null,
      resultQ10MessageColor: null,
      resultQ11MessageColor: null,
      currentIndex: 0,
      selectedQ1Answer: null,
      selectedQ2Answer: null,
      selectedQ3Answer: null,
      selectedQ4Answer: null,
      selectedQ5Answer: null,
      selectedQ6Answer: null,
      selectedQ7Answer: null,
      selectedQ8Answer: null,
      selectedQ9Answer: null,
      selectedQ10Answer: null,
      selectedQ11Answer: null,
      resultQ1Message: null,
      resultQ2Message: null,
      resultQ3Message: null,
      resultQ4Message: null,
      resultQ5Message: null,
      resultQ6Message: null,
      resultQ7Message: null,
      resultQ8Message: null,
      resultQ9Message: null,
      resultQ10Message: null,
      resultQ11Message: null,
      answers: [],
    };
  },
  computed: {
    isFinished() {
      return this.currentIndex === 11; // Assuming you have 11 questions
    },
  },
  created() {},
  watch: {},
  methods: {
    checkQuestionOneAnswer(selectedQ1Answer) {
      if (selectedQ1Answer === "CDK4") {
        this.resultQ1Message = "Your answer is correct!";
        this.resultQ1MessageColor = "green";
        this.answers.push(selectedQ1Answer);
      } else {
        this.resultQ1Message = "Sorry, you missed this point.";
        this.resultQ11MessageColor = "red";
      }
    },
    checkQuestionTwoAnswer(selectedQ2Answer) {
      if (selectedQ2Answer === "KISQALI") {
        this.resultQ2Message = "Your answer is correct!";
        this.resultQ2MessageColor = "green";

        this.answers.push(selectedQ2Answer);
      } else {
        this.resultQ2Message = "Sorry, you missed this point.";
        this.resultQ2MessageColor = "red";
      }
    },
    checkQuestionThreeAnswer(selectedQ3Answer) {
      if (selectedQ3Answer === "8 folds") {
        this.resultQ3Message = "Your answer is correct!";
        this.resultQ3MessageColor = "green";

        this.answers.push(selectedQ3Answer);
      } else {
        this.resultQ3Message = "Sorry, you missed this point.";
        this.resultQ3MessageColor = "red";
      }
    },
    checkQuestionFourAnswer(selectedQ4Answer) {
      if (selectedQ4Answer === "KISQALI") {
        this.resultQ4Message = "Your answer is correct!";
        this.resultQ4MessageColor = "green";

        this.answers.push(selectedQ4Answer);
      } else {
        this.resultQ4Message = "Sorry, you missed this point.";
        this.resultQ4MessageColor = "red";
      }
    },
    checkQuestionFiveAnswer(selectedQ5Answer) {
      if (selectedQ5Answer === "MONALEEZA-3") {
        this.resultQ5Message = "Your answer is correct!";
        this.resultQ5MessageColor = "green";

        this.answers.push(selectedQ5Answer);
      } else {
        this.resultQ5Message = "Sorry, you missed this point.";
        this.resultQ5MessageColor = "red";
      }
    },
    checkQuestionSixAnswer(selectedQ6Answer) {
      if (selectedQ6Answer === "67.6 Months") {
        this.resultQ6Message = "Your answer is correct!";
        this.resultQ6MessageColor = "green";

        this.answers.push(selectedQ6Answer);
      } else {
        this.resultQ6Message = "Sorry, you missed this point.";
        this.resultQ6MessageColor = "red";
      }
    },
    checkQuestionSevenAnswer(selectedQ7Answer) {
      if (selectedQ7Answer === "KISQALI") {
        this.resultQ7Message = "Your answer is correct!";
        this.resultQ7MessageColor = "green";

        this.answers.push(selectedQ7Answer);
      } else {
        this.resultQ7Message = "Sorry, you missed this point.";
        this.resultQ7MessageColor = "red";
      }
    },
    checkQuestionEightAnswer(selectedQ8Answer) {
      if (selectedQ8Answer === "KISQALI") {
        this.resultQ8Message = "Your answer is correct!";
        this.resultQ8MessageColor = "green";

        this.answers.push(selectedQ8Answer);
      } else {
        this.resultQ8Message = "Sorry, you missed this point.";
        this.resultQ8MessageColor = "red";
      }
    },
    checkQuestionNineAnswer(selectedQ9Answer) {
      if (selectedQ9Answer === "KISQALI") {
        this.resultQ9Message = "Your answer is correct!";
        this.resultQ9MessageColor = "green";

        this.answers.push(selectedQ9Answer);
      } else {
        this.resultQ9Message = "Sorry, you missed this point.";
        this.resultQ9MessageColor = "red";
      }
    },
    checkQuestionTenAnswer(selectedQ10Answer) {
      if (selectedQ10Answer === "True") {
        this.resultQ10Message = "Your answer is correct!";
        this.answers.push(selectedQ10Answer);
        this.resultQ10MessageColor = "green";
      } else {
        this.resultQ10Message = "Sorry, you missed this point.";
        this.resultQ10MessageColor = "red";
      }
    },
    checkQuestionElevenAnswer(selectedQ11Answer) {
      if (selectedQ11Answer === "True") {
        this.resultQ11Message = "Your answer is correct!";
        this.resultQ11MessageColor = "green";
        this.answers.push(selectedQ11Answer);
      } else {
        this.resultQ11Message = "Sorry, you missed this point.";
        this.resultQ11MessageColor = "red";
      }
    },
    nextQuestion() {
      this.currentIndex++;
      //   this.selectedAnswer = null;
    },

    async storeScore() {
      try {
        const data = {
          score: this.answers.length,
          name: localStorage.getItem("user_name"),
        };
        const response = await this.$axios.$post("/store-score", data);
        this.$router.push({
          name: "topRank",
          params: { score: this.answers.length },
        });
      } catch (error) {
        console.error("API Error:", error);
      }
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
.Message {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #bf9021 !important;
  font-weight: bold;
  height: 100vh;
}
.resultMessage {
  font-size: 30px;
}
.success-message {
  color: green;
  font-size: 20px;
  text-align: center;
}
.error-message {
  color: red;
  font-size: 20px;
}
</style>
