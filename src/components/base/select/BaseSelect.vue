<script lang="ts" setup>
import { computed } from 'vue';
import { useField } from 'vee-validate';

import { useUID } from '@composables';

import type { BaseSelectProps } from './BaseSelect.types';

defineModel<string | number>();

const {
  disabled,
  helpText,
  label,
  multiple,
  name,
  options,
  size,
  wrapperClass,
} = defineProps<BaseSelectProps>();

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField<string>(() => name, undefined, {
  syncVModel: true,
});

const selectId: string = useUID();
const helperId: string = useUID('id-help');

const selectClasses = computed<Record<string, boolean>>(() => ({
  [`form-select-${size}`]: !!size,
}));
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="!!label || !!$slots.label" class="form-label" :for="selectId">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>

    <select
      v-model="inputValue"
      class="form-select"
      :id="selectId"
      :class="selectClasses"
      :multiple="multiple"
      :name="name"
      :disabled="disabled"
      :aria-describedby="!!helpText ? helperId : undefined"
      :aria-labelledby="!!label ? selectId : undefined"
      @input="handleChange"
      @blur="handleBlur"
    >
      <slot name="first" />

      <template v-for="option in options">
        <option v-if="'string' === typeof option" :value="option">
          {{ option }}
        </option>
        <option v-else :value="option.value" :disabled="option?.disabled">
          <span v-if="option.html" v-html="option.html"></span>
          <template v-else>{{ option.text }}</template>
        </option>
      </template>
    </select>

    <div v-if="!!helpText" class="form-text" :id="helperId">
      {{ helpText }}
    </div>

    <div v-if="!!errorMessage" class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>
