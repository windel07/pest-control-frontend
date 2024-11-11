<script lang="ts" setup>
import { computedAsync } from '@vueuse/core';

import type { User } from '@types';
import { UserService } from '@services';

import type { UserFieldProps } from './UserDropdown.types';

const props = defineProps<UserFieldProps>();

const { data, execute: runFetch } = UserService.list(
  { role: props.role },
  false,
);

const options = computedAsync(async () => {
  await runFetch();

  const { data: records } = data.value || {};
  const { data: users } = records || {};

  return Array.from(users, (user: User) => ({
    text: user.name,
    value: user.id,
  }));
}, []);
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
