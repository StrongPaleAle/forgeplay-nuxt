<template>
  <div
    :class="
      cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)',
        vertical ? 'flex-col' : 'flex-row',
        $props.class,
      )
    "
  >
    <div
      v-for="index in repeat"
      :key="index"
      :class="
        cn(
          'flex shrink-0 justify-around gap-(--gap)',
          vertical
            ? 'animate-marquee-vertical flex-col'
            : 'animate-marquee flex-row',
          pauseOnHover ? 'group-hover:paused' : '',
        )
      "
      :aria-hidden="index > 1"
      :style="{
        animationDirection: reverse ? 'reverse' : 'normal',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { cn } from "@/lib/utils";

  withDefaults(
    defineProps<{
      class?: string;
      reverse?: boolean;
      pauseOnHover?: boolean;
      vertical?: boolean;
      repeat?: number;
    }>(),
    {
      pauseOnHover: false,
      vertical: false,
      repeat: 2,
      class: "",
    },
  );
</script>
