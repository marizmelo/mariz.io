<template>
  <div id="homepage">
    <div class="mm-container title">
      <div>
        <h1>Hello! My name is <b>Mariz</b>.</h1>
        <h2>I'm a hands-on product designer based in San Jose, California.</h2>  
      </div>
    </div>

    <Work/>
  </div>
</template>
<script>
import Work from '@/components/Work'
export default {
  components: {
    Work
  },
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
  .announcements a {
    text-decoration: none;
    font-weight: normal;
  }
  .announcements a:hover {
    text-decoration: underline;
  }
  .title {
    min-height: 360px;
    text-align: center;
    align-items: center;
  }

  h1 {
    display: block;
    font-size: 3rem;
  }
  h2 {
    display: block;
  }

  .announcements {
    margin: 44px auto;
  }

  @media screen and (max-width: 480px) {
    .title {
      /* height: 100px; */
      display: none;
    }
    h1 {
      font-size: 160%;
      padding: 30px 0;
    }
  }

</style>
