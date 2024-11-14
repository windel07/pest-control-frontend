<script lang="ts" setup>
import { computed } from 'vue';
import { useField } from 'vee-validate';

import { useUID } from '@composables';

import type { BaseInputProps } from './BaseInput.types';

const inputId = useUID();
const helpTextId = useUID('id-help');

defineModel<string>();

const {
  disabled,
  helpText,
  label,
  name,
  placeholder,
  size,
  type,
  wrapperClass,
  icon,
} = defineProps<BaseInputProps>();

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField<string>(() => name, undefined, {
  syncVModel: true,
});

const isHidden = computed<boolean>(() => 'hidden' === type);

const inputClasses = computed<Record<string, boolean>>(() => ({
  [`form-control-${size}`]: !!size,
  [`ps-8`]: !!icon,
  'is-invalid': !!errorMessage.value,
}));

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div :class="wrapperClass" :hidden="isHidden">
    <label v-if="!!label || !!$slots.label" class="form-label" :for="inputId">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>

    <div class="position-relative">
      <i
        v-if="!!icon"
        :class="`bi-${icon}`"
        class="bi ms-3 position-absolute top-50 start-0 translate-middle-y text-secondary"
      ></i>

      <input
        v-bind="$attrs"
        v-model="inputValue"
        class="form-control"
        :id="inputId"
        :class="inputClasses"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type || 'text'"
        :aria-describedby="!!helpText ? helpTextId : undefined"
        :aria-labelledby="!!label ? inputId : undefined"
        @input="handleChange"
        @blur="handleBlur"
      />
    </div>

    <div v-if="!!helpText" :id="helpTextId" class="form-text">
      {{ helpText }}
    </div>

    <div v-if="!!errorMessage" class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>
