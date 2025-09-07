<template>
  <div>
    <img class="rounded-lg size-50 shrink-0" :src="img" :alt="imgAlt" width="auto" />
    <div class="mt-4">
      <div class="text-xs font-bold text-sky-500">{{ eyebrow }}</div>
      <div class="mt-1 font-bold text-gray-700">
        <a :href="url" class="hover:underline">
          {{ title }}
        </a>
      </div>
      <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacationCard',
  props: {
    img: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      default: ''
    },
    eyebrow: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    pricing: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>
<style>
@import "tailwindcss";
@layer components {
  .btn-primary {
    border-radius: calc(infinity * 1px);
    background-color: var(--color-violet-500);
    padding-inline: --spacing(5);
    padding-block: --spacing(2);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
}
</style>