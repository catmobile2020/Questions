<template>
  <v-form class="conOfForm">
    <div class="logIn">
      <v-container>
        <div>
          <v-container class="loginForm">
            <div class="userID">
              <div class="btn-container">
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      outlined
                      class="formInput"
                      placeholder="user id"
                      required
                      hide-details="auto"
                      solo
                      v-model="formData.uuid"
                      :rules="validRule"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-btn type="button" class="primary" id="scanner-btn" data-toggle="modal"
                                @click="dialog = true, onDetect()">
                            Scan QR Code
                        </v-btn>
                  </v-col>
                  <v-col md="6" v-if="userData && userData.type_id">
                    <!-- Conditionally render the nuxt-link based on type_id -->
                    <nuxt-link
                      v-if="userData.type_id === 2 && userData.step === 'one'"
                      :to="{
                        name: 'userDetails',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                    <nuxt-link
                      v-else-if="
                        userData.type_id === 2 && userData.step === 'two'
                      "
                      :to="{
                        name: 'userDetailsTwo',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                    <nuxt-link
                      v-else-if="
                        userData.type_id === 2 && userData.step === 'three'
                      "
                      :to="{
                        name: 'userDetailsThree',
                        query: { uuid: formData.uuid },
                      }"
                      class="link"
                    >
                      <v-btn class="primary" :disabled="!isFormValid">
                        Search
                      </v-btn>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-container>
        </div>
      </v-container>
    </div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <div class="modal-body">
            <qrcode-stream @detect="onDetect"></qrcode-stream>
            <!-- <qrcode-drop-zone></qrcode-drop-zone>
            <qrcode-capture></qrcode-capture> -->
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn type="button" class="secondary" @click="dialog = false">
            Close
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data() {
    return {
      dialog: false,
      userID: null,
      formData: {
        uuid: "",
      },
    };
  },
  methods: {
    async onDetect (detectedCodes) {
    // ...
    const data  = await detectedCodes
    if(data.content) {
      if (this.userData.type_id === 2 && this.userData.step === 'one'){
      this.$router.push(`/userDetails?uuid=${data.content}`)
    }
    if (this.userData.type_id === 2 && this.userData.step === 'two'){
      this.$router.push(`/userDetailsTwo?uuid=${data.content}`)
    }
    if (this.userData.type_id === 2 && this.userData.step === 'three'){
      this.$router.push(`/userDetailsThree?uuid=${data.content}`)
    }
    }
  },
  async getData() {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        this.userData = JSON.parse(storedUserData);
        console.log("this.userData", this.userData);
      }
    },
  },
  created() {
    this.getData();
  },
  computed: {
    isFormValid() {
      return this.formData.uuid;
    },
  },
};
</script>
