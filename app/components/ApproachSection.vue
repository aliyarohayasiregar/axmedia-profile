<script setup lang="ts">
import { approach } from '~/data/company'
</script>

<template>
  <section id="pendekatan" class="scroll-mt-24 bg-ink py-28 text-paper md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label text-paper/50">Pendekatan</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">
            Cara kerja yang<br >
            terstruktur dan transparan
          </h2>
        </AppReveal>
      </div>

      <div class="mt-20 grid gap-12 md:grid-cols-4">
        <AppReveal v-for="(item, i) in approach" :key="item.step" :delay="i * 100">
          <div class="border-t border-paper/20 pt-6">
            <p class="label text-paper/50">0{{ i + 1 }}</p>
            <h3 class="display mt-4 text-3xl">{{ item.step }}</h3>
            <p class="mt-4 text-sm leading-relaxed text-paper/60">{{ item.description }}</p>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
