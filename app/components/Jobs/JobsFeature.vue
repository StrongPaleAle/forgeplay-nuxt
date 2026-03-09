<script lang="ts" setup>
  const props = defineProps<{
    feature: string;
    icon: string;
    tag?: string;
    iconClass?: string;
  }>();

  const ComponentTag = props.tag || "span";
</script>

<template>
  <component :is="ComponentTag" class="flex gap-2 items-center">
    <Icon :name="icon" :class="iconClass" />
    {{ feature }}
  </component>
</template>

<style lang="postcss" scoped></style>
