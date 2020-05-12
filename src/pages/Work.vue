<template>
  <div>
    <div class="mm-container mm-header">
      <WorkHeader work='static/work/oracle-com/background.jpg'/>
    </div>
    <div  class="mm-container">
      <div class="spacer">
        <component v-for="(item, index) in data.components" :key="index" :is="item.name" :content="item.props" class="spacer"></component>
      </div>
    </div>
  </div>
</template>
<script>
import WorkHeader from '@/components/WorkHeader'
import TextContent from '@/components/TextContent'
import Images from '@/components/Images'
import Youtube from '@/components/Youtube'
import Footer from '@/components/Footer'
export default {
  components: {
    WorkHeader,
    TextContent,
    Images,
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
   padding: 16px 0;
  }
  .mm-container {
    max-width: 768px;
  }
  .mm-header {
    max-width: 1280px;
  }
</style>
