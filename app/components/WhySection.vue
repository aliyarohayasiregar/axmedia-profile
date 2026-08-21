<script setup lang="ts">
import { reasons } from '~/data/company'
</script>

<template>
  <section id="why" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Why choose Nova</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">
            Not a general agency.<br >
            A retail branding specialist.
          </h2>
        </AppReveal>
      </div>

      <div class="mt-20 grid gap-12 md:grid-cols-3">
        <AppReveal v-for="(item, i) in reasons" :key="item.index" :delay="i * 100">
          <div class="rule pt-6">
            <p class="label">{{ item.index }}</p>
            <h3 class="display mt-4 text-3xl">{{ item.title }}</h3>
            <p class="mt-4 text-sm leading-relaxed text-muted">{{ item.description }}</p>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
