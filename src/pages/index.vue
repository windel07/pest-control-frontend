<script setup lang="ts">
import AuthLoginForm from '@components/auth/AuthLoginForm.vue';
</script>

<template>
  <section
    class="vh-100 d-flex flex-column align-items-center justify-content-center"
  >
    <div class="container">
      <img
        src="@assets/img/logo.png"
        alt="DripScan"
        width="125"
        height="125"
        class="mx-auto mb-7 d-table"
      />

      <h1 class="mb-5 text-center text-dark fw-bold">Login</h1>

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
