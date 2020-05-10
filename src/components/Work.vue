<template>
  <section id="work">
    <div class="mm-container">
      <div class="grid-container">
        <WorkCard logo="static/work/oracle-com/logo.svg" description="Oracle corporate website" background="static/work/oracle-com/background.jpg" preview="static/work/oracle-com/preview.jpg"/>
        <WorkCard logo="static/work/oracle-cloud/logo.svg" description="Oracle Cloud Web Console" background="static/work/oracle-cloud/background.jpg" preview="static/work/oracle-cloud/preview.jpg"/>
        <WorkCard logo="static/work/oracle-com/logo.svg" description="Oracle corporate website" background="static/work/oracle-com/background.jpg" preview="static/work/oracle-com/preview.jpg"/>
        <WorkCard logo="static/work/oracle-cloud/logo.svg" description="Oracle Cloud Web Console" background="static/work/oracle-cloud/background.jpg" preview="static/work/oracle-cloud/preview.jpg"/>
        <WorkCard logo="static/work/oracle-com/logo.svg" description="Oracle corporate website" background="static/work/oracle-com/background.jpg" preview="static/work/oracle-com/preview.jpg"/>
        <WorkCard logo="static/work/oracle-cloud/logo.svg" description="Oracle Cloud Web Console" background="static/work/oracle-cloud/background.jpg" preview="static/work/oracle-cloud/preview.jpg"/>
      </div>
    </div>
    {{data}}
  </section>
</template>
<script>
import WorkCard from '@/components/WorkCard'
import WorkData from '@/data/Work'
export default {
  components: {
    WorkCard
  },
  name: "",
  data: () => ({
    data: WorkData
  })
}
</script>
<style scoped>
  #work {
    padding-top: 56px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
