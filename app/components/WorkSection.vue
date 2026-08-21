<script setup lang="ts">
import { work } from '~/data/company'
</script>

<template>
  <section id="work" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell">
      <div class="grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Case studies</AppReveal>
        <AppReveal>
          <h2 class="display text-4xl md:text-6xl">Selected project highlights.</h2>
        </AppReveal>
      </div>

      <div class="mt-20 space-y-24 md:space-y-32">
        <AppReveal v-for="(item, i) in work" :key="item.client" :delay="60">
          <article
            class="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            :class="i % 2 === 1 && 'md:[&>figure]:order-2'"
          >
            <figure class="overflow-hidden bg-line/40">
              <img
                :src="item.image"
                :alt="`${item.client} — ${item.title}`"
                loading="lazy"
                class="h-[320px] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03] md:h-[440px]"
              >
            </figure>

            <div>
              <p class="label">Case study · 0{{ i + 1 }}</p>
              <h3 class="display mt-4 text-4xl md:text-5xl">{{ item.client }}</h3>
              <p class="mt-4 text-lg text-muted">{{ item.title }}</p>
              <p class="mt-6 max-w-xl text-sm leading-relaxed text-muted">
                {{ item.description }}
              </p>

              <ul class="mt-8 flex flex-wrap gap-2">
                <li
                  v-for="scope in item.scope"
                  :key="scope"
                  class="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {{ scope }}
                </li>
              </ul>

              <p class="mt-8 max-w-md border-l border-accent pl-4 text-sm leading-relaxed">
                {{ item.result }}
              </p>
            </div>
          </article>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
