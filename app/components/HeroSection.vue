<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <section class="relative flex min-h-[92vh] items-end overflow-hidden pb-16 pt-36">
    <div class="shell grid w-full gap-14 md:grid-cols-[1.25fr_0.75fr] md:items-end">
      <div>
        <AppReveal as="p" class="label">{{ company.legalName }} · {{ company.tagline }}</AppReveal>
        <AppReveal :delay="120">
          <h1 class="display mt-8 text-[13vw] leading-[0.95] md:text-[7.4vw]">
            We turn retail spaces<br >
            into <span class="italic">brand experiences</span>
          </h1>
        </AppReveal>
        <AppReveal :delay="240">
          <div class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              class="rounded-full bg-ink px-7 py-3 text-sm text-paper transition-opacity duration-300 hover:opacity-80"
            >
              Start a project
            </a>
            <a href="#services" class="link-underline text-sm text-muted">See what we do</a>
          </div>
        </AppReveal>
      </div>

      <AppReveal :delay="200" class="md:pb-4">
        <p class="max-w-sm text-base leading-relaxed text-muted">
          {{ company.intro }}
        </p>
      </AppReveal>
    </div>

    <div
      class="pointer-events-none absolute -right-40 top-24 hidden h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl md:block"
    />
  </section>
</template>
