<template>
  <section id="work">
    <div class="mm-container">
      <WorkCard logo="static/work/oracle-com/logo.svg" description="Oracle corporate website" background="static/work/oracle-com/background.jpg" preview="static/work/oracle-com/preview.jpg"/>
      <WorkCard/>
    </div>
    <div class="mm-container">
      <WorkCard/>
      <WorkCard/>
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

</style>
