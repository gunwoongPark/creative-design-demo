<template>
  <v-app>
    <v-main id="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>


<style >
#main {
  background: rgb(233, 233, 233);
}
</style>