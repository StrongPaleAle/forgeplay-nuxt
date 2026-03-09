<script lang="ts" setup>
  const { data } = await useAsyncData("jobs", () => {
    return queryCollection("job")
      .select(
        "title",
        "path",
        "job_id",
        "expiration_date",
        "creation_date",
        "job_title",
        "location",
        "contract_type",
        "budget",
        "location_type",
        "employment_type",
        "department",
      )
      .all();
  });
</script>

<template>
  <section>
    <SvgNoiseBg />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 pb-10 relative items-start"
    >
      <BaseCopyBlock
        kicker="Join us"
        title="Our latest job openings"
        class="md:sticky top-8 z-10"
      >
        <p class="sm:text-lg mb-6">
          We believe that video games can be much more than just entertainment!
          <br />For this reason, we want to transform them into an opportunity
          to make people think, learn and grow.
        </p>
      </BaseCopyBlock>

      <div class="grid grid-cols-1 gap-10 xl:gap-16">
        <div v-for="job in data" :key="job.job_id">
          <JobsCard :job="job" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    position: relative;
    isolation: isolate;
    background-image: radial-gradient(
      circle 30vw at 70% 40%,
      --alpha(var(--color-orange) / 40%),
      transparent
    );
  }
  .card {
    :deep(.copy-block) {
      .copy-block__content {
        @apply text-right;
        .btn {
          @apply ml-auto text-right;
        }
      }
    }
  }
</style>
