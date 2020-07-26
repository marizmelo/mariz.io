<template>
  <nav id="navigation" class="mm-container">
    <div>
      <img src="/static/marizmelo-logo.svg">
      <ul>
        <li><router-link to="/">Work</router-link></li>
        <li><a href="/static/mariz.pdf" target="_blank">Get in touch</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
  #navigation {
    padding: 44px;
    font-family: 'Playfair Display', serif;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    position: absolute;
    top: 36px;
    right: 48px;
    font-size: 1.25rem;
    box-sizing: border-box;
  }
  li {
    padding: 12px;
  }
  a {
    outline: none;
    display: inline-block;
    position: relative;
    text-decoration: none;
  }
  a::after {
    content: "";
    background: none;
    position: absolute;
    left: 0;
    width: 100%;
    height: 95%;
    border-bottom: 2px solid white; /* bug on safari for transparent, investigate later, this does not scale */
    transition: all .2s ease-in-out;
  }
  a:hover:after, a:focus:after {
    content: "";
    height: 110%;
    border-bottom: 2px solid black;
  }

  @media screen and (max-width: 480px) {
    #navigation {
      padding: 24px;
      /* margin-bottom: 24px; */
    }
    ul {
      position: relative;
      display: block;
      right: auto;
      top: 24px;
    }
    li {
      padding: 12px 0;
    }
    a:hover:after {
      pointer-events: none !important;
    }
  }
</style>
