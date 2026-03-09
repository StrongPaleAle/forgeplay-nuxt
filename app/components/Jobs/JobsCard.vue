<script lang="ts" setup>
  import type { JobCollectionItem } from "@nuxt/content";
  import { useTimeAgo } from "@vueuse/core";

  const { job } = defineProps<{
    job: Partial<JobCollectionItem>;
  }>();
  const formattedDate = computed(() => {
    if (!job.creation_date) return null;
    return useTimeAgo(new Date(job.creation_date));
  });

  const { getJobEnumLabel, getLocationString } = useJobEnum();
</script>

<template>
  <div class="card">
    <div class="copy-block @container/block">
      <header class="@2xl/block:w-1/2">
        <div class="flex items-center justify-between">
          <p class="kicker">{{ job.department }}</p>
          <p v-if="job.creation_date" class="date">
            Posted {{ formattedDate }}
          </p>
        </div>
        <h2 class="section-title">{{ job.title }}</h2>
      </header>
      <div class="copy-block__content @2xl/block:w-1/2 @2xl/block:ml-auto">
        <ul class="flex gap-6 text-sm text-neutral-400 mb-4 mt-2">
          <JobsFeature
            v-if="job.location || job.location_type"
            :feature="getLocationString(job.location, job.location_type)"
            tag="li"
            icon="pixelarticons:pin"
            icon-class="text-yellow"
          />
          <JobsFeature
            :feature="getJobEnumLabel([job.employment_type, job.contract_type])"
            tag="li"
            icon="pixelarticons:briefcase"
            icon-class="text-yellow"
          />
        </ul>
        <div class="text-right">
          <NuxtLink v-if="job.path" class="btn" :to="job.path"
            >See details</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @reference 'assets/css/main.css';
  .date {
    @apply text-sm text-neutral-400;
  }
</style>
