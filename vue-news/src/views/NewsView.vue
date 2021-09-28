<template lang="">
  <div>
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>
<script>
export default {
  created() {
    // fetchNewsList()
    //   .then((response) => {
    //     console.log(response);
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>
<style lang=""></style>
