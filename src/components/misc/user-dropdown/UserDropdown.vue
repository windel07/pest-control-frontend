<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import type { User } from '@types';
import { UserService } from '@services';

import type { UserFieldProps } from './UserDropdown.types';

const props = defineProps<UserFieldProps>();

const options = ref<Record<string, string>[]>([]);

const handleFetch = async () => {
  const { data } = await UserService.list(
    () => `role=${props.role}&per_page=1000`,
  );
  const { data: results } = data.value || {};

  options.value = results.data.map((user: User) => ({
    text: user.name,
    value: user.id,
  }));
};

onMounted(handleFetch);
</script>

<template>
  <BaseSelect :options="options" name="user_id" :label="props.label || 'User'">
    <template v-slot:first>
      <option :value="undefined" disabled>
        Select {{ props.label || 'User' }}
      </option>
    </template>
  </BaseSelect>
</template>
