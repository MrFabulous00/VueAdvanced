import ListView from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('FETCH_LIST', this.$route.name);
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
