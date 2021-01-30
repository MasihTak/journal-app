<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-5">Sign Up</h2>
        <form action="">
          <div class="row mb-4">
            <div class="col">
              <label for="full_name" class="form-label">Full name</label>
              <input type="text" id="full_name" class="form-control">
            </div>
            <div class="col">
              <label for="user-name" class="form-label">Username</label>
              <input type="text" id="user-name" class="form-control">
            </div>
          </div>
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
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style scoped>

</style>
