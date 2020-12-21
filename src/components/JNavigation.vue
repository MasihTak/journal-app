<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container">
      <router-link class="navbar-brand fs-3" to="/">Digital Journal</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <span class="nav-item align-self-center d-none d-md-block">|</span>
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
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

nav {
  grid-area: header;
}

</style>
