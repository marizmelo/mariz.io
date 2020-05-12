<template>
  <div class="container" :style="backgroundStyles(data.background, data.color, data.text)">
    <div class="title">
      <img :src="data.logo" :alt="data.description">
      <p>{{data.description}}</p>
    </div>
    <div class="preview" :style="backgroundStyles(data.preview)"></div>
  </div>
</template>
<script>
export default {
  props: {
    work: {}
  },
  name: "",
  data: () => ({
    data: {
      background: '',
      color: '',
      text: '',
      logo: '',
      description: '',
      preview: ''
    }
  }),
  mounted() {
    setTimeout(()=>{this.data = this.work}, 100)
  },
  methods: {
    backgroundStyles(background, color, text) {
      return {
        'background-image': `url(${background})`,
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
    overflow: hidden;
  }
</style>
