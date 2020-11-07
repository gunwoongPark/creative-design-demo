<template>
  <div>
    <Header></Header>

    <v-container
      ><v-row
        ><v-col class="blank" cols="1" xl="2" lg="1" md="1" sm="1"></v-col
        ><v-col
          ><v-card
            ><v-img src="../assets/tiger.png"></v-img>

            <v-container style="display: flex"
              ><v-row>
                <v-col
                  class="hidden-sm-and-down"
                  cols="9"
                  xl="10"
                  lg="10"
                  md="10"
                  sm="9"
                  style="display: flex"
                  ><v-icon x-large class="ml-3 mr-2"
                    >mdi-account-circle-outline</v-icon
                  >
                  <div>
                    <h1 class="mr-2" style="color: rgb(230, 138, 0)">
                      username
                    </h1>
                    <h5 style="color: gray; align-self: center">5 days ago</h5>
                  </div></v-col
                >
                <v-col
                  class="hidden-md-and-up"
                  cols="8"
                  xl="10"
                  lg="10"
                  md="10"
                  sm="9"
                  style="display: flex"
                  ><v-icon large class="ml-3 mr-2"
                    >mdi-account-circle-outline</v-icon
                  >
                  <div>
                    <h2 class="mr-2" style="color: rgb(230, 138, 0)">
                      username
                    </h2>
                    <h6 style="color: gray; align-self: center">5 days ago</h6>
                  </div></v-col
                >

                <v-col
                  class="hidden-sm-and-down"
                  cols="3"
                  xl="2"
                  lg="2"
                  md="2"
                  sm="3"
                  style="align-self: center; display: flex"
                  ><v-icon class="mr-2" x-large>mdi-heart-outline</v-icon>
                  <h2
                    style="
                      display: inline-block;
                      color: gray;
                      align-self: center;
                    "
                  >
                    270
                  </h2>
                  <v-icon x-large>mdi-dots-vertical</v-icon>
                </v-col>

                <v-col
                  class="hidden-md-and-up"
                  cols="4"
                  xl="2"
                  lg="2"
                  md="2"
                  sm="3"
                  style="align-self: center; display: flex"
                  ><v-icon class="mr-2" medium>mdi-heart-outline</v-icon>
                  <h3
                    style="
                      display: inline-block;
                      color: gray;
                      align-self: center;
                    "
                  >
                    270
                  </h3>
                  <v-icon medium>mdi-dots-vertical</v-icon>
                </v-col>
              </v-row></v-container
            >
          </v-card> </v-col
        ><v-col
          class="blank"
          cols="1"
          xl="2"
          lg="1"
          md="1"
          sm="1"
        ></v-col></v-row
    ></v-container>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped></style>
