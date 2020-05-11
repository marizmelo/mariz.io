<template>
  <div>
    <iframe width="100%" :height="content.height || 400" :src="content.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <small class="caption"><i>{{content.caption}}</i></small>
  </div>
</template>
<script>
export default {
  props: {
    content: {}
  },
  name: "Youtube",
  data: () => ({

  })
}
</script>
<style scoped>
  small {
    display: block;
    text-align: center;
    opacity: .6;
    padding: 24px 0;
  }
</style>
