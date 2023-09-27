<template>
  <v-form class="conOfForm">
    <v-container>
      <div>
        <v-row>
          <v-col cols="12 text-field-style">
            <v-col class="d-flex justify-space-between">
              <h2>Users</h2>
              <v-btn class="primary" @click="AddUser = true"> Add User </v-btn>
            </v-col>
            <br />
            <div class="dashboard">
              <v-data-table
                :headers="headers"
                :items="data"
                :items-per-page="15"
                :server-items-length="totalItems"
                :page-count="numberOfPages"
                :options.sync="options"
                class="elevation-1"
              >
                <template #[`item.Actions`]="{ item }">
                  <v-btn icon elevation="0" @click="editUser(item)" color="primary">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon elevation="0" @click="DeleteUser = true" color="primary">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </div>
          </v-col>
        </v-row>
          <v-dialog v-model="AddUser" max-width="800">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add User</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-col>
              <label>Name</label>
              <v-text-field
                class="eachInput"
                placeholder="Name"
                solo
                outlined
                :rules="validRule"
              ></v-text-field>
            </v-col>
            <v-col>
              <label>Email</label>
              <v-text-field
                placeholder="Email"
                solo
                outlined
                :rules="validRule"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select :items="Roles" outlined label="Role" dense v-model="selectedRole">
              </v-select>
            
            </v-col>

            
            <v-col v-if="selectedRole === 'Employee'">
              <label>Employee Role</label>
              <v-radio-group v-model="selectedEmployeeRole">
                <v-radio label="Employee 1" value="Employee 1"></v-radio>
                <v-radio label="Employee 2" value="Employee 2"></v-radio>
                <v-radio label="Employee 3" value="Employee 3"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col>
              <label>Password</label>
              <v-text-field
                solo
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="validRule"
              ></v-text-field>
            </v-col>
            <v-col>
              <label>Confirm Password</label>
              <v-text-field
                solo
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="validRule"
              ></v-text-field>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions class="pb-10">
          <v-spacer></v-spacer>
          <v-btn class="primary" tile @click="AddUser = false">
            Cancel
          </v-btn>
          <v-btn class="primary" @click="saveUser">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-dialog
          scrollable
          v-model="EditUser"
          max-width="800"
       
        >
          <v-card >
            <v-card-title>
              <span class="text-h5">Edit User</span>
             
            </v-card-title>

            <v-card-text >
              <v-container>
              
                  <v-col>
                    <label >Name</label>

                    <v-text-field
                      class="eachInput"
                      placeholder="Name"
                      solo
                      outlined
                    v-model="selectedUserData.name"
                     :rules="validRule"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <label >Email</label>

                    <v-text-field
                    
                      placeholder="Email"
                      solo
                      outlined
                     v-model="selectedUserData.email"

                        :rules="validRule"
                    ></v-text-field>
                  </v-col>
              <v-col>
              <v-select :items="Roles" outlined label="Role" dense v-model="selectedRole">
              </v-select>
            
            </v-col>

            
            <v-col v-if="selectedRole === 'Employee'">
              <label>Employee Role</label>
              <v-radio-group v-model="selectedEmployeeRole">
                <v-radio label="Employee 1" value="Employee 1"></v-radio>
                <v-radio label="Employee 2" value="Employee 2"></v-radio>
                <v-radio label="Employee 3" value="Employee 3"></v-radio>
              </v-radio-group>
            </v-col>

               <v-col>
                     <label >Password</label>
              <v-text-field
         
          solo
          
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :rules="validRule"
        ></v-text-field>
            </v-col>
            
                  <v-col>
                    <label >Confirm Password</label>
                   <v-text-field
          solo       
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :rules="validRule"
        ></v-text-field>
                  </v-col>
           
          
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions class="pb-10">
              <v-spacer></v-spacer>
              <v-btn class="primary" tile @click="EditUser = false">
                Cancel
              </v-btn>
              <v-btn
                class="primary"
         
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
         <v-dialog
          scrollable
          v-model="DeleteUser"
          max-width="500"
       
        >
          <v-card >
            <v-card-title>
              <span class="text-h5">Delete User</span>
             
            </v-card-title>

            <v-card-text >
              <v-container>
              
                <v-col>
                <h3>Are you Sure !!
                <br/> you are going to delete this user </h3>
                </v-col>
          
              
              </v-container>
            </v-card-text>

            <v-card-actions class="pb-10">
              <v-spacer></v-spacer>
              <v-btn class="primary" tile @click="DeleteUser = false">
                Yes
              </v-btn>
              <v-btn class="primary" tile @click="DeleteUser = false">
                No
              </v-btn>
           
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      Roles: ["Admin", "Employee" ,"User"], 
      validRule: [(v) => !!v || "Filed Is Required"],
      showPassword: false,
      AddUser: false,
      EditUser: false,
      DeleteUser: false,
      totalItems: null,
      numberOfPages: null,
      options: {},
         selectedRole: "", 
      selectedEmployeeRole: "", 
       selectedUserData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: this.selectedRole,
      },
      headers: [
           { text: "ID", value: "ID" },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
       
        { text: "Actions", value: "Actions" },
      ],
  
      data: [],
    };
  },
  watch: {
      options: {
        handler () {
          this.getUsers()
        },
      },
    },
methods: {
  async getUsers() {
      const { page, itemsPerPage } = this.options
      const pageNumber = page
      const data = await this.$axios.$get(`/admin/users?page${pageNumber}`);
      this.data = data.data
      this.totalItems = data.meta.total
      this.numberOfPages = data.meta.last_page
    },
    editUser(user) {
      
      this.selectedUserData = {
        name: user.name,
        email: user.email,
        role: this.selectedRole,
        password: "",
        confirmPassword: "",

      };
      this.EditUser = true;
    },
    saveEditedUser() {
     
      console.log("Edited User Data:", this.selectedUserData);
      this.EditUser = false; 
    },
  
  },
};
</script>
<style>
.v-sheet.v-card {
  border-radius: 15px !important;
}
</style>
