<script setup lang="ts">
import { clients } from '~/data/company'
</script>

<template>
  <section class="rule py-24">
    <div class="shell">
      <AppReveal as="p" class="label">Dipercaya oleh</AppReveal>
      <div class="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4">
        <AppReveal v-for="(client, i) in clients" :key="client" :delay="i * 60">
          <p class="text-lg text-muted transition-colors duration-300 hover:text-ink">
            {{ client }}
          </p>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
