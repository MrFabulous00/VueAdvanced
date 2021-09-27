<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ user.id }}</div>
      <template slot="time">{{ user.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
  </div>
</template>
<script>
import UserProfile from '../components/UserProfile.vue';
// import axios from 'axios';

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    // console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>
<style lang=""></style>
