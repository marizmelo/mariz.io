<template>
  <div class="container" :style="backgroundStyles(work, work.color, work.text)">
  </div>
</template>
<script>
export default {
  props: ['work'],
  name: "",
  data: () => ({

  }),
  methods: {
    backgroundStyles(image, color, text) {
      return {
        'background-image': `url(${image})`,
        'background-color': `${color}`,
        'color': `${text}`
      }
    }
  }
}
</script>
<style scoped>
  .container {
    width: 100%;
    height: 450px;
    background-size: cover;
    margin-bottom: 24px;
  }
</style>
