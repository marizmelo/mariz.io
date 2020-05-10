<template>
  <div class="work-card" :style="backgroundStyles(background, color)">
    <div class="card-title">
      <img :src="logo">
      <p>{{description}}</p>
    </div>
    <div class="card-preview" :style="backgroundStyles(preview)"></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    logo: {
      default: "static/marizmelo-logo.svg"
    },
    description: {
      default: "Description here"
    },
    preview: {
      default: ''
    },
    background: String,
    color: {
      default: "#E5E5E5"
    }
  },
  data: () => ({

  }),
  methods: {
    backgroundStyles(image, color) {
      return {
        'background-image': `url(${image})`,
        'background-color': `${color}`
      }
    }
  }
}
</script>
<style scoped>
  .work-card {
    position: relative;
    overflow: hidden;
    flex: 1;
    box-sizing: border-box;
    margin: 10px;
    cursor: pointer;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease-in-out;
  }
  .card-preview {
    width: 100%;
    max-width: 450px;
    height: 200px;
    background: #C4C4C4;
    bottom: -200px;
    left: calc(50% - 225px);
    position: absolute;
    transition: all .3s  ease-in-out;
  }
  .work-card:hover .card-title {
    margin-top: -100px;
  }
  .work-card:hover .card-preview {
    bottom: 0;
  }
</style>
