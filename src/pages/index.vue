<script setup lang="ts">
import AuthLoginForm from '@components/auth/AuthLoginForm.vue';
</script>

<template>
  <section>
    <div class="container">
      <h1 class="mb-3 text-center">Login</h1>

      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-5">
          <div class="card border-0 shadow">
            <div class="card-body">
              <AuthLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
