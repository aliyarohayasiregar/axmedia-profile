<script setup lang="ts">
import { work } from '~/data/company'
</script>

<template>
  <section id="karya" class="scroll-mt-24 py-28 md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Karya pilihan</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">Dampak yang bisa diukur</h2>
        </AppReveal>
      </div>

      <div class="mt-16">
        <AppReveal
          v-for="(item, i) in work"
          :key="item.title"
          :delay="i * 70"
          class="group rule cursor-default"
        >
          <div
            class="grid items-baseline gap-3 py-8 transition-[padding] duration-500 group-hover:md:pl-6 md:grid-cols-[0.2fr_1fr_0.35fr_0.1fr]"
          >
            <p class="label">{{ item.client }}</p>
            <h3 class="display text-2xl md:text-[2rem]">{{ item.title }}</h3>
            <p class="text-sm text-muted">{{ item.result }}</p>
            <p class="text-sm text-muted md:text-right">{{ item.year }}</p>
          </div>
        </AppReveal>
        <div class="rule" />
      </div>
    </div>
  </section>
</template>
