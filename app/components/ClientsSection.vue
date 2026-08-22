<script setup lang="ts">
import { clients } from '~/data/company'

const lane = [...clients, ...clients]
</script>

<template>
  <section class="rule overflow-hidden py-24">
    <div class="shell grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
      <AppReveal as="p" class="label">Trusted by</AppReveal>
      <AppReveal>
        <p class="max-w-xl text-base leading-relaxed text-muted">
          From global retailers to Indonesia’s largest FMCG principals.
        </p>
      </AppReveal>
    </div>

    <div class="marquee mt-14 w-full">
      <div class="marquee-track flex w-max items-center">
        <div
          v-for="(client, i) in lane"
          :key="`${client.name}-${i}`"
          class="flex shrink-0 items-center gap-4 px-10"
          :aria-hidden="i >= clients.length"
        >
          <img
            v-if="client.logo"
            :src="client.logo"
            :alt="client.name"
            loading="lazy"
            class="h-12 w-auto max-w-[190px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 md:h-14"
          >
          <span
            v-else
            class="whitespace-nowrap text-2xl text-muted transition-colors duration-500 hover:text-ink md:text-3xl"
          >
            {{ client.name }}
          </span>
          <span class="h-8 w-px bg-line" />
        </div>
      </div>
    </div>

    <div class="shell mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <AppReveal v-for="(client, i) in clients" :key="client.name" :delay="i * 60">
        <div class="rule pt-5">
          <img
            v-if="client.logo"
            :src="client.logo"
            :alt="client.name"
            loading="lazy"
            class="mb-4 h-9 w-auto max-w-[150px] object-contain object-left"
          >
          <p class="text-lg">{{ client.name }}</p>
          <p class="mt-1 text-sm text-muted">{{ client.category }}</p>
        </div>
      </AppReveal>
    </div>
  </section>
</template>
