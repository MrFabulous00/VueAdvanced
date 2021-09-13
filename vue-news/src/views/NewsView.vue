<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then((response) => {
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>
<style></style>
