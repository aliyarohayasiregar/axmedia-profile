<script setup lang="ts">
import { approach } from '~/data/company'
</script>

<template>
  <section id="process" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Engagement process</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">
            Brief to handover —<br >
            one team, one accountable timeline.
          </h2>
        </AppReveal>
      </div>

      <div class="mt-20 grid gap-12 md:grid-cols-4">
        <AppReveal v-for="(item, i) in approach" :key="item.step" :delay="i * 100">
          <div class="rule pt-6">
            <p class="label">0{{ i + 1 }}</p>
            <h3 class="display mt-4 text-3xl">{{ item.step }}</h3>
            <p class="mt-4 text-sm leading-relaxed text-muted">{{ item.description }}</p>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
