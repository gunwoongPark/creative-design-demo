<template>
  <div id="container">
    <v-sheet
      class="loginBox"
      color="white"
      elevation="1"
      height="486"
      width="382"
    >
      <div id="loginHeader"></div>
      <v-container>
        <v-row
          ><v-col style="display: flex; justify-content: center">
            <p>Log in to your account</p>
          </v-col></v-row
        >
        <v-row>
          <v-col
            ><v-text-field
              color="#30402f"
              label="ID"
              placeholder="input your id"
            ></v-text-field
            ><v-text-field
              color="#30402f"
              label="PW"
              placeholder="input your password"
            ></v-text-field>
            <v-checkbox
              v-model="ex4"
              label="Remember me"
              color="#30402f"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col> <v-btn color="#30402f" dark block> Login </v-btn></v-col>
        </v-row>

        <v-row>
          <v-col cols="6" style="display: flex; justify-content: center">
            <v-btn small text>Home</v-btn></v-col
          >
          <v-col cols="6" style="display: flex; justify-content: center">
            <v-btn small text>Sign up</v-btn></v-col
          >
        </v-row>

        <v-row>
          <v-col style="display: flex; justify-content: center">
            <v-btn small text>Forgot your ID or Password?</v-btn></v-col
          >
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

#loginHeader {
  background: #30402f;
  height: 5px;
}
</style>