<template>
  <div class="mm-container">
    <component v-for="(item, index) in data.components" :key="index" :is="item.component" :content="item.props"></component>
  </div>
</template>
<script>

import TextContent from '@/components/TextContent'
import Footer from '@/components/Footer'
export default {
  components: {
    TextContent,
    Footer
  },
  name: "",
  data: () => ({
    data: {},
    swapComponent: "TextContent"
  }),
  beforeMount() {
    console.log();
    this.axios.get('static/work/'+this.$route.params.id+'/data.json')
    .then(response => {
      this.data = response.data

    })
    .catch(e => {
      return;
    })
  }
}
</script>
<style scoped>
</style>
