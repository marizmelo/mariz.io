<template>
  <router-link :to="'/work/'+work.location" class="work-card-container" :class="activate ? 'active':''">
    <div class="work-card" :style="backgroundStyles(work.background, work.color, work.text)">
      <div class="card-title">
        <img :src="work.logo" :alt="work.description">
        <h2>{{work.description}}</h2>
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
    logo: "",
    description: "",
    background: "",
    color: "",
    preview: "",
    location: ""
  }),
  methods: {
    backgroundStyles(image, color, text) {

      let bg = {
        'background-color': `${color}`,
        'color': `${text}`
      }

      if (image) {
        bg['background-image'] = `url(${image})`
      }

      return bg
    }
  }
}
</script>
<style scoped>
  .card-title h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1em;
    opacity: .6;
    text-align: center;
    line-height: 1.6em;
  }
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
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
  }
  .card-title {
    position: absolute;
    display: block;
    margin-top: 20px;
    transition: all .3s ease-in-out;
    text-align: center;
    z-index: 100;
  }
  .card-preview {
    background-position: center;
    background-size: cover !important;
    width: 100%;
    max-width: 450px;
    height: 210px;
    bottom: -332px;
    position: relative;
    transition: all .3s  ease-in-out;
  }
  .work-card-container:hover .card-title, .work-card-container:focus .card-title, .work-card-container.active .card-title {
    margin-top: -44px;
  }
  .work-card-container:hover .card-preview, .work-card-container:focus .card-preview, .work-card-container.active .card-preview {
    bottom: -150px;
  }
  .work-card-container.active {
    cursor: default;
  }
  .work-card-container.active .work-card {
    margin: 0;
  }

  @media screen and (max-width: 960px) {
      .work-card {
        margin: 10px 0;
      }
      .card-preview {
        background-size: 100%;
        left: 0;
        margin: 0 auto;
      }
  }

  @media screen and (max-width: 480px) {
    .card-title img {
      max-width: 80%;
    }
    .work-card-container .card-title {
      margin-top: -44px !important;
    }
    .work-card-container .card-preview {
      bottom: -150px !important;
    }
  }
</style>
