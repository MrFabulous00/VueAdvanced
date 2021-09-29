<template lang="">
  <div>
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
    // 전부다 동일
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    // }),
    // #2
    // ...mapState({
    //   fetchedAsk: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>
<style lang=""></style>
