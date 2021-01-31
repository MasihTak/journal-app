<template>
  <footer>
    <div class="container">
      <p>Made with <span class="text-danger">❤</span> using <span class="text-success">Vue.js</span> by <a class="link-info" href="https://twitter.com/masihtak">MasihTak</a></p>
    </div>
  </footer>
</template>

<script>
export default {
name: "JFooter"
}
</script>

<style scoped>

footer {
  grid-area: footer;
  grid-row-start: -1;
}

</style>
