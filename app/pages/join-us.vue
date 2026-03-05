<script lang="ts" setup>
  const route = useRoute();
  const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("content").path(route.path).first();
  });
  useHead({
    title: page.value?.title,
  });
</script>

<template>
  <main id="main" class="games-page">
    <ContentRenderer v-if="page" :value="page" class="renderer-wrapper" />
    <section class="relative">
      <BaseGridBg />
      <AboutStats />
      <HomeCardGrid />
    </section>
    <JobsSection />
  </main>
</template>

<style scoped></style>
