<template>
  <div>
    <div class="mm-container mm-header">
      <a :href="data.work.url" target="_blank" class="link" v-if="data.work.url">Visit project</a>
      <WorkCard :work='data.work' :activate='true' />
    </div>
    <div  class="mm-container">
      <div class="spacer">
        <component v-for="(item, index) in data.components" :key="index" :is="item.name" :content="item.props" class="spacer"></component>
      </div>
    </div>
  </div>
</template>
<script>
import WorkCard from '@/components/WorkCard'
import TextContent from '@/components/TextContent'
import Images from '@/components/Images'
import Youtube from '@/components/Youtube'
import Footer from '@/components/Footer'
export default {
  components: {
    WorkCard,
    TextContent,
    Images,
    Youtube,
    Footer
  },
  name: "",
  data: () => ({
    data: {
      work:''
    }
  }),
  created() {
    this.axios.get('/static/work/'+this.$route.params.id+'/data.json')
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
  .link {
    position: absolute;
    z-index: 10;
    background: white;
    padding: 8px 16px;
    border-radius: 100px;
    right: 80px;
    top: 24px;
    font-size: .8em;
    color: black;
    text-decoration: none;
  }
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
