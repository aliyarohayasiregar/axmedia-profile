<script setup lang="ts">
import { stats } from '~/data/company'
</script>

<template>
  <section id="tentang" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
      <AppReveal as="p" class="label">Tentang kami</AppReveal>

      <div>
        <AppReveal>
          <p class="display text-3xl leading-snug md:text-[2.7rem]">
            Kami percaya komunikasi terbaik lahir dari kesederhanaan: satu gagasan yang jelas,
            dieksekusi dengan presisi, dan diukur dengan jujur.
          </p>
        </AppReveal>
        <AppReveal :delay="120">
          <p class="mt-10 max-w-2xl text-base leading-relaxed text-muted">
            Sejak awal berdiri, Axmedia mendampingi merek nasional dan multinasional merancang
            strategi media yang relevan dengan perilaku audiens Indonesia. Tim kami menggabungkan
            perencana media, kreatif, dan analis dalam satu meja kerja sehingga setiap keputusan
            berpijak pada data dan tetap berani secara ide.
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
