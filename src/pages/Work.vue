<template>
  <div class="mm-container">
    <div class="spacer">
      <component v-for="(item, index) in data.components" :key="index" :is="item.name" :content="item.props" class="spacer"></component>
    </div>
  </div>
</template>
<script>

import TextContent from '@/components/TextContent'
import Youtube from '@/components/Youtube'
import Footer from '@/components/Footer'
export default {
  components: {
    TextContent,
    Youtube,
    Footer
  },
  name: "",
  data: () => ({
    data: {},
    swapComponent: "TextContent"
  }),
  mounted() {
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
  .spacer {
   padding: 24px 0;
  }
  .mm-container {
    width: 768px;
  }
</style>
