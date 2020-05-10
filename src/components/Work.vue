<template>
  <section id="work">
    <div class="mm-container">
      <WorkCard/>
      <WorkCard/>
    </div>
    <div class="mm-container">
      <WorkCard/>
      <WorkCard/>
    </div>
  </section>
</template>
<script>
import WorkCard from '@/components/WorkCard'
export default {
  components: {
    WorkCard
  },
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
  #work {
    padding-top: 56px;
  }
  
</style>
