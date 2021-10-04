<template lang="">
  <div>
    <canvas ref="barChart" id="barChart"></canvas>
  </div>
</template>
<script>
export default {
  /* eslint-disable no-unused-vars */
  props: ['propsdata'],
  mounted() {
    const barChart = new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
<style lang=""></style>
