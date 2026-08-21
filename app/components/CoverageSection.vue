<script setup lang="ts">
import { coverage } from '~/data/company'

const highlights = [
  { value: '7+', label: 'Regions' },
  { value: '1000+', label: 'Stores branded' },
  { value: '100%', label: 'GPS-verified installs' },
  { value: '24/7', label: 'Field support' },
]
</script>

<template>
  <section id="coverage" class="scroll-mt-24 bg-ink py-28 text-paper md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label text-paper/50">National coverage</AppReveal>
        <div>
          <AppReveal>
            <h2 class="display text-4xl md:text-6xl">From Sabang to Merauke.</h2>
          </AppReveal>
          <AppReveal :delay="120">
            <p class="mt-6 max-w-xl text-base leading-relaxed text-paper/60">
              Active retail branding installations across the archipelago.
            </p>
          </AppReveal>
        </div>
      </div>

      <div class="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <AppReveal v-for="(area, i) in coverage" :key="area.region" :delay="i * 70">
          <div class="border-t border-paper/20 pt-5">
            <h3 class="text-lg">{{ area.region }}</h3>
            <p class="mt-2 text-sm text-paper/60">{{ area.cities }}</p>
          </div>
        </AppReveal>
      </div>

      <div class="mt-20 grid grid-cols-2 gap-y-10 md:grid-cols-4">
        <AppReveal v-for="(item, i) in highlights" :key="item.label" :delay="i * 90">
          <p class="display text-5xl">{{ item.value }}</p>
          <p class="mt-2 text-sm text-paper/60">{{ item.label }}</p>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
