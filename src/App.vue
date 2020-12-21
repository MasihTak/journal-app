<template>
  <JNavigation />
  <JFooter />
  <router-view/>
</template>



<script>
import JNavigation from '@/components/JNavigation'
import JFooter from "@/components/JFooter";

export default {
  components: {
    JNavigation,
    JFooter
  }
}
</script>


<style>

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
