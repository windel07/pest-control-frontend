<script setup lang="ts">
const currenYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 text-center">
    <div class="container">
      Copyright &copy; {{ currenYear }}. All Rights Reserved.
    </div>
  </footer>
</template>
