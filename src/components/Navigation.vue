<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand fs-3" to="/">Digital Journal</router-link>
      <ul class="navbar-nav me-auto">
        <span class="nav-item align-self-center">|</span>
        <li class="nav-item">
          <a class="nav-link" href="">Create A Note</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-primary" to="/log-in">Log In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-primary" to="/sign-up">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
