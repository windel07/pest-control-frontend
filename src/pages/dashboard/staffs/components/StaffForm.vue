<script setup lang="ts"></script>

<template>
  <form action="">
    <fieldset>
      <div class="d-grid row-gap-2">
        <BaseInput name="pest_type" label="Pest type" />
        <BaseInput name="soil_type" label="Soil type" />
        <BaseInput name="city" label="Municipality" />
        <BaseInput name="barangay" label="Barangay" />
      </div>

      <BaseButton type="submit" class="mt-3">Submit</BaseButton>
    </fieldset>
  </form>
</template>
