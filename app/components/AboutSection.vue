<script setup lang="ts">
import { stats } from '~/data/company'
</script>

<template>
  <section id="about" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
      <AppReveal as="p" class="label">About Nova Axmedia</AppReveal>

      <div>
        <AppReveal>
          <p class="display text-3xl leading-snug md:text-[2.7rem]">
            We turn retail spaces into brand experiences.
          </p>
        </AppReveal>
        <AppReveal :delay="120">
          <p class="mt-10 max-w-2xl text-base leading-relaxed text-muted">
            PT Nova Axmedia Branding is a specialist retail branding and out-of-home media company
            based in Indonesia. We don’t just design signs — we craft the visual journey that
            connects brands with people, from a single storefront to a nationwide rollout.
          </p>
        </AppReveal>

        <div class="mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4">
          <AppReveal v-for="(item, i) in stats" :key="item.label" :delay="i * 90">
            <p class="display text-5xl">{{ item.value }}</p>
            <p class="mt-2 text-sm text-muted">{{ item.label }}</p>
          </AppReveal>
        </div>
      </div>
    </div>
  </section>
</template>
