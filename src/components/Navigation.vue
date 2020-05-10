<template>
  <nav id="navigation" class="mm-container">
    <div>
      <img src="static/marizmelo-logo.svg">
      <ul>
        <li><a href="">Work</a></li>
        <li><a href="">Get in touch</a></li>
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
    background: white;
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
    right: 0;
    font-size: 1.25rem;
  }
  li {
    padding: 12px;
  }
  a {
    display: inline-block;
    position: relative;
    color: black;
    text-decoration: none;
  }
  a::after {
    content: "";
    background: none;
    position: absolute;
    left: 0;
    width: 100%;
    height: 95%;
    border-bottom: 2px solid transparent;
    transition: all .2s ease-in-out;
  }
  a:hover:after {
    content: "";
    height: 110%;
    border-bottom: 2px solid black;
  }
</style>
