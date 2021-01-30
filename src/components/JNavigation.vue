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
            <a class="nav-link" href="" @click.prevent="newJournal">Create A Note</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-primary" to="/log-in">Log In</router-link>
          </li>
            <router-link class="nav-link text-primary" to="/sign-up">Sign up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    newJournal() {
      this.$store.commit('createNewJournal')
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
}
</script>

<style scoped>

nav {
  grid-area: header;
}

</style>
