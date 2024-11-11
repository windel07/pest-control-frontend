<script lang="ts" setup>
import { useFormErrors, useIsSubmitting } from 'vee-validate';

import type { BaseFormProps } from './BaseForm.types';

const isSubmitting = useIsSubmitting();
const errors = useFormErrors();

const { title, subTitle, loading } = defineProps<BaseFormProps>();
</script>

<template>
  <form class="form">
    <fieldset class="form-fieldset" :disabled="loading || isSubmitting">
      <legend v-if="title" class="form-fieldset__title">
        {{ title }}
      </legend>

      <p v-if="subTitle" class="form-fieldset__subtitle">
        {{ subTitle }}
      </p>

      <div v-if="title && subTitle" class="form-spacer"></div>

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
