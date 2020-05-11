<template>
  <div class="work-card" :style="backgroundStyles(work.background, work.color, work.text)" tabindex="0">
    <div class="card-title">
      <img :src="work.logo" :alt="work.description">
      <p>{{work.description}}</p>
    </div>
    <div class="card-preview" :style="backgroundStyles(work.preview)"></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    work: {}
  },
  data: () => ({
    logo: "static/marizmelo-logo.svg",
    description: "Description here",
    background: "",
    color: "#E5E5E5",
    preview: ""
  }),
  methods: {
    beforeMount() {
      this.logo = work.logo
    },
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
  .work-card {
    outline: none;
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
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease-in-out;
  }
  .card-title p {
    opacity: .6;
  }
  .card-preview {
    background-position: center;
    background-size: cover !important;
    width: 100%;
    max-width: 450px;
    height: 210px;
    background: #C4C4C4;
    bottom: -190px;
    left: calc(50% - 225px);
    position: absolute;
    transition: all .3s  ease-in-out;
  }
  .work-card:hover .card-title, .work-card:focus .card-title {
    margin-top: -100px;
  }
  .work-card:hover .card-preview, .work-card:focus .card-preview {
    bottom: 0;
  }
</style>
