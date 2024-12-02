<script setup lang="ts">
import AuthLoginForm from '@components/auth/AuthLoginForm.vue';
</script>

<template>
  <section
    class="vh-100 d-flex flex-column align-items-center justify-content-center"
  >
    <div class="container">
      <div class="text-center">
        <img
          src="../assets/images/farmer.webp"
          alt="Farmer"
          width="350px"
          height="350px"
          class="mb-5"
        />

        <h1 class="text-dark fw-bold">Welcome !</h1>
        <p class="">Login to continue</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <AuthLoginForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  letter-spacing: 1px;
}

p {
  letter-spacing: 2px;
}
</style>
