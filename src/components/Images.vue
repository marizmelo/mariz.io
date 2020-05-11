<template>
  <img :src="content.url" :width="content.width || '100%'" :alt="content.alt">
</template>
<script>
export default {
  name: "",
  props: {
    content: {}
  },
  data: () => ({})
}
</script>
<style scoped>
</style>
