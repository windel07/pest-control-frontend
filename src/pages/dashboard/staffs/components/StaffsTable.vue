<script setup lang="ts">
import StaffsTableDeleteButton from './StaffsTableDeleteButton.vue';
</script>

<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Municipality</th>
          <th>Barangay</th>
          <th width="100" class="position-sticky end-0"></th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="position-sticky end-0">
            <div class="d-flex align-items-center justify-content-center">
              <RouterLink to="/dashboard/records/1" class="btn btn-link px-2">
                <i class="bi bi-pencil"></i>
              </RouterLink>

              <StaffsTableDeleteButton />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
