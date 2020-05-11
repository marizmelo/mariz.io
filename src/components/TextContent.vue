<template>
  <div v-html="content.content"></div>
</template>
<script>
export default {
  props: {
    content: {}
  },
  name: "TextContent",
  data: () => ({})
}
</script>
<style scoped>
</style>
