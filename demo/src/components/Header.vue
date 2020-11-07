<template>
  <div>
    <div id="header">
      <v-container
        ><v-row>
          <v-col cols="12" xl="1" class="hidden-lg-and-down"></v-col>
          <v-col cols="1" sm="1" lg="3" md="3" xl="2"
            ><h2 class="hidden-sm-and-down" style="color: white">
              DRAWING GENIE
            </h2>
            <h2 style="color: white" class="hidden-md-and-up">DG</h2>
          </v-col>
          <v-col cols="2" sm="5" lg="4" md="3" xl="5"></v-col>
          <v-col cols="9" sm="6" lg="5" md="6" xl="4">
            <v-btn
              class="mr-5 hidden-sm-and-down"
              dark
              color="rgb(230,138,0)"
              style="display: inline-block"
              >Generate</v-btn
            >
            <v-btn
              class="mr-2 hidden-md-and-up"
              small
              dark
              color="rgb(230,138,0)"
              style="display: inline-block"
              ><v-icon>mdi-cloud-upload</v-icon></v-btn
            >

            <v-icon class="mr-2" id="coin" style="display: inline-block"
              >mdi-currency-usd-circle</v-icon
            >
            <p class="mr-5" style="display: inline-block; color: white">20</p>
            <v-icon class="mr-2" style="color: white; display: inline-block"
              >mdi-account-circle-outline</v-icon
            >
            <p
              class="mr-5 hidden-sm-and-down"
              style="color: white; display: inline-block"
            >
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
    <div id="header2">
      <v-container
        ><v-row>
          <v-col class="blank hidden-lg-and-down" cols="12" xl="1"></v-col
          ><v-col
            cols="2"
            xl="1"
            lg="1"
            md="1"
            sm="1"
            style="align-self: center"
            ><v-btn text>Feed</v-btn></v-col
          >
          <v-col
            cols="2"
            xl="1"
            lg="1"
            md="1"
            sm="1"
            class="mr-4"
            style="align-self: center"
            ><v-btn text>Latest</v-btn></v-col
          >
          <v-col cols="2" xl="1" lg="1" md="1" sm="1" style="align-self: center"
            ><v-btn text>Best</v-btn></v-col
          >
        </v-row></v-container
      >
    </div>
    <div id="header3">
      <v-container
        ><v-row
          ><v-col class="blank hidden-lg-and-down" cols="12" xl="1"></v-col
          ><v-col
            cols="2"
            xl="1"
            lg="1"
            md="1"
            sm="1"
            style="align-self: center"
            ><v-btn color="grey darken-1" small text>Today</v-btn></v-col
          >
          <v-col cols="2" xl="1" lg="1" md="1" sm="1" style="align-self: center"
            ><v-btn color="grey darken-1" small text>Month</v-btn></v-col
          >
          <v-col cols="2" xl="1" lg="1" md="1" sm="1" style="align-self: center"
            ><v-btn color="grey darken-1" small text>Week</v-btn></v-col
          >
          <v-col cols="2" xl="1" lg="1" md="1" sm="1" style="align-self: center"
            ><v-btn color="grey darken-1" small text>Year</v-btn></v-col
          ></v-row
        ></v-container
      >
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
#header2 {
  display: flex;
  align-items: center;
  height: 47px;
  background: white;
  border-bottom: solid 1px lightgray;
}
#header3 {
  display: flex;
  align-items: center;
  height: 41px;
}
#coin {
  color: white;
}
</style>