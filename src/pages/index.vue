<script setup lang="ts">
import AuthLoginForm from '@components/auth/AuthLoginForm.vue';
</script>

<template>
  <section
    class="vh-100 d-flex flex-column align-items-center justify-content-center"
  >
    <div class="container">
      <h1 class="mb-5 text-center text-dark fw-bold">Login</h1>

      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div class="card border-0 shadow">
            <div class="card-body py-6 px-8">
              <AuthLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
