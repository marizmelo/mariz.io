<template>
  <div id="app">
    <Navigation/>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer
  },
  name: 'App'
}
</script>

<style>
  @import 'assets/styles.css';
  .fade-enter-active, .fade-enter-to, .fade-leave, .fade-leave-active {
    transition: margin 0.3s ease-out, opacity 0.3s ease-out;
  }
  .fade-enter, .fade-leave-to {
    margin-top: 50px;
    opacity: 0;

  }
</style>
