<script lang="ts" setup>
import { computed } from 'vue';
import { useFormErrors, useIsSubmitting } from 'vee-validate';

import type { BaseFormProps } from './BaseForm.types';

const isSubmitting = useIsSubmitting();
const errors = useFormErrors();

const props = defineProps<BaseFormProps>();

const isLoading = computed<boolean>(() => props.loading || isSubmitting.value);
</script>

<template>
  <form v-loading="isLoading" class="form">
    <fieldset class="form-fieldset" :disabled="isLoading">
      <legend v-if="props.title" class="form-fieldset__title">
        {{ props.title }}
      </legend>

      <p v-if="props.subTitle" class="form-fieldset__subtitle">
        {{ props.subTitle }}
      </p>

      <div v-if="props.title && props.subTitle" class="form-spacer"></div>

      <BaseAlert v-if="errors.nonFieldErrors" variant="danger" dismissable>
        {{ errors.nonFieldErrors }}
      </BaseAlert>

      <div class="d-grid row-gap-3">
        <slot />
      </div>

      <div
        v-if="!!$slots.footer"
        class="mt-3 mt-lg-4 d-flex justify-content-between"
      >
        <slot name="footer" />
      </div>
    </fieldset>
  </form>
</template>
