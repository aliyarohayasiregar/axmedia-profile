<script setup lang="ts">
import { services } from '~/data/company'
</script>

<template>
  <section id="layanan" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Layanan</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">
            Empat kapabilitas,<br >
            satu tim terpadu
          </h2>
        </AppReveal>
      </div>

      <div class="mt-20 grid gap-px bg-line md:grid-cols-2">
        <AppReveal
          v-for="(service, i) in services"
          :key="service.index"
          :delay="(i % 2) * 100"
          class="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-12"
        >
          <p class="label transition-colors duration-500 group-hover:text-paper/60">
            {{ service.index }}
          </p>
          <h3 class="display mt-8 text-3xl md:text-[2.1rem]">{{ service.title }}</h3>
          <p
            class="mt-5 max-w-md text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/70"
          >
            {{ service.description }}
          </p>
          <ul class="mt-8 space-y-2 text-sm">
            <li v-for="point in service.points" :key="point" class="flex items-center gap-3">
              <span class="h-px w-5 bg-current opacity-40" />
              {{ point }}
            </li>
          </ul>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
