<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <div id="error">
          <!-- Error title -->
          <h2 class="text-center title">404</h2>
          <p class="text-center lead font-weight-bold">Page Not Found!</p>
          <!-- Error message -->
          <p class="info mt-5">Oops! Sorry, we are unable to find the page you are looking for. Click the blow button to return home.</p>
          <a href="#" class="btn btn-primary d-block">Home</a>
        </div> <!-- /error -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

.title {
  color: white;
  font-size: 7rem;
  text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #C9C9C9, 0 3px 0 #BBB, 0 4px 0 #B9B9B9, 0 5px 0 #AAA, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15);
}

.btn-primary {
  width: 6.875rem;
  margin: 100px auto 0;
  padding: 10px 20px;
}

/* Medium Devices */
@media screen and (min-width: 46.8em) {
  .title {
    font-size: 8.5rem;
  }
}

/* Large Devices */
@media screen and (min-width: 50em) {
  .title {
    font-size: 10rem;
  }
  .lead {
    font-size: 1.5rem;
  }
  .info {
    font-size: 1.3rem;
  }
}


</style>
