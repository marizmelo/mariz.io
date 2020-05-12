<template>
  <div id="homepage">
    <div class="mm-container">
      <h1>Hello! I’m <b>Mariz Melo</b><span class="role_1">, a product designer</span><span class="role_2">, a systems designer</span></h1>
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
  .role_1 {
    animation: role1;
  }
  .role_2 {
    animation: role2;
  }
  .role_1, .role_2 {
    overflow: hidden;
    width: 0;
    white-space: nowrap;
    display: inline-flex;
    position: relative;
    animation-delay: 1s;
    animation-duration: 12s;
    animation-timing-function: steps(25, end);
    animation-iteration-count: infinite;
  }
  h1 span::after {
    content: "_";
    position: absolute;
    right: -2px;
    animation: caret infinite;
    animation-duration: 1s;
    animation-timing-function: steps(1, end);
  }

  h1 {
    line-height: 1.2em;
    display: inline-block;
    font-size: 3rem;
    text-align: center;
    padding: 100px 0;
    top: 0;
  }
  /* Role animation */
  @keyframes role2 {
    0%, 50%, 100% {
      width: 0;
    }
    60%, 90% {
      width: 8.5em;
    }
  }
  @keyframes role1 {
    0%, 50%, 100% {
      width: 0;
    }
    10%, 40% {
      width: 8.3em;
    }
  }
  @keyframes caret {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
