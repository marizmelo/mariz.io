<template>
  <section id="work">
    <div class="mm-container">
      <div class="grid-container">
        <WorkCard v-for="work in data" :key="work.location" :work="work" />
      </div>
    </div>
  </section>
</template>
<script>
import WorkCard from '@/components/WorkCard'
import WorkData from '@/data/work'
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
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 960px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
