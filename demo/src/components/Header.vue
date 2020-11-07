<template>
  <div>
    <div id="header">
      <v-container
        ><v-row>
          <v-col cols="12" sm="2" lg="3" md="3"
            ><h2 class="hidden-sm-and-down" style="color: white">
              DRAWING GENIE
            </h2>
            <h2 style="color: white" class="hidden-md-and-up">DG</h2>
          </v-col>
          <v-col cols="12" sm="1" lg="4" md="3"></v-col>
          <v-col cols="12" sm="9" lg="5" md="6">
            <v-btn
              class="mr-2"
              dark
              color="rgb(230,138,0)"
              style="display: inline-block"
              >Generate</v-btn
            ><v-icon class="mr-2" id="coin" style="display: inline-block"
              >mdi-currency-usd-circle</v-icon
            >
            <p class="mr-2" style="display: inline-block; color: white">20</p>
            <v-icon class="mr-2" style="color: white; display: inline-block"
              >mdi-account-circle-outline</v-icon
            >
            <p class="mr-2" style="color: white; display: inline-block">
              username
            </p>
            <v-icon class="mr-2" style="color: white; display: inline-block"
              >mdi-magnify</v-icon
            >
            <v-icon class="mr-2" style="color: white; display: inline-block"
              >mdi-email</v-icon
            >
            <v-icon style="color: white; display: inline-block"
              >mdi-earth</v-icon
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  height: 60px;
  background: rgb(38, 38, 40);
}
#coin {
  color: white;
}
</style>