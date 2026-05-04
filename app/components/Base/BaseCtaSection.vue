<script lang="ts" setup>
  defineProps<{
    kicker?: string;
    title?: string;
    ctaLabel: string;
    ctaUrl: string;
    bgImage?: string;
  }>();
</script>

<template>
  <section class="cta-section">
    <NuxtImg
      v-if="bgImage"
      :src="bgImage"
      alt=""
      fit="cover"
      sizes="100vw sm:100vw lg:100vw xl:100vw 2xl:100vw 100vw"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none full-width"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 items-start">
      <div class="card card--secondary">
        <BaseCopyBlock
          :kicker="kicker"
          :title="title"
          :cta-label="ctaLabel"
          :cta-url="ctaUrl"
        >
          <slot />
        </BaseCopyBlock>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .cta-section {
    position: relative;
    padding-block: 2.75rem;
  }
</style>
