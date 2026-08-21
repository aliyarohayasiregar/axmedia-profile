<script setup lang="ts">
import { clients } from '~/data/company'
</script>

<template>
  <section class="rule py-24">
    <div class="shell">
      <div class="grid gap-6 md:grid-cols-[0.35fr_0.65fr]">
        <AppReveal as="p" class="label">Trusted by</AppReveal>
        <AppReveal>
          <p class="max-w-xl text-base leading-relaxed text-muted">
            From global retailers to Indonesia’s largest FMCG principals.
          </p>
        </AppReveal>
      </div>

      <div class="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <AppReveal v-for="(client, i) in clients" :key="client.name" :delay="i * 60">
          <div class="rule pt-5">
            <p class="text-lg">{{ client.name }}</p>
            <p class="mt-1 text-sm text-muted">{{ client.category }}</p>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
