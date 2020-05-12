<template>
  <router-link :to="'/work/'+work.location" class="work-card-container" :class="activate ? 'active':''">
    <div class="work-card" :style="backgroundStyles(work.background, work.color, work.text)">
      <div class="card-title">
        <img :src="work.logo" :alt="work.description">
        <p>{{work.description}}</p>
      </div>
      <div class="card-preview" :style="backgroundStyles(work.preview)"></div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "",
  props: {
    work: {},
    activate: Boolean
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
  a {
    text-decoration: none;
    color: black;
  }
  .work-card-container {
    outline: none;
    display: flex;
    width: 100%;
  }
  .work-card {
    position: relative;
    overflow: hidden;
    flex: 1;
    box-sizing: border-box;
    margin: 10px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
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
  .work-card-container:hover .card-title, .work-card-container:focus .card-title, .work-card-container.active .card-title {
    margin-top: -100px;
  }
  .work-card-container:hover .card-preview, .work-card-container:focus .card-preview, .work-card-container.active .card-preview {
    bottom: 0;
  }
  .work-card-container.active {
    cursor: default;
  }
</style>
