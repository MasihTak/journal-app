<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-5">Login</h2>
        <form action="">
          <div class="row mb-4">
            <div class="col">
              <label for="email_address" class="form-label">Email</label>
              <input type="email" id="email_address" class="form-control">
            </div>
            <div class="col">
              <label for="password" class="form-label">Password</label>
              <input type="password" id="password" class="form-control">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>
