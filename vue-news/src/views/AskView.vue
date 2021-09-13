<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  computed: {
    ...mapGetters(['fetchedAsk']),
    // #2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_ASK');

    // fetchAskList()
    //   .then(function(response) {
    //     this.ask = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
};
</script>
<style></style>
