<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <footer class="rule">
    <div class="shell grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p class="font-display text-3xl">Axmedia<span class="text-accent">.</span></p>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {{ company.legalName }} — {{ company.contact.address }}
        </p>
      </div>

      <div class="space-y-3 text-sm">
        <p class="label">Kontak</p>
        <a :href="`mailto:${company.contact.email}`" class="link-underline block">
          {{ company.contact.email }}
        </a>
        <a :href="`tel:${company.contact.phone.replace(/\s/g, '')}`" class="link-underline block">
          {{ company.contact.phone }}
        </a>
      </div>

      <div class="space-y-3 text-sm">
        <p class="label">Ikuti</p>
        <a
          v-for="item in company.social"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener"
          class="link-underline block"
        >
          {{ item.label }}
        </a>
      </div>
    </div>

    <div class="shell rule flex flex-col justify-between gap-2 py-6 text-xs text-muted md:flex-row">
      <p>© {{ company.year }} {{ company.legalName }}. All rights reserved.</p>
      <p>Jakarta · Indonesia</p>
    </div>
  </footer>
</template>
