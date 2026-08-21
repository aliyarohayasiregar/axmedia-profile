<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <section id="contact" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
      <AppReveal as="p" class="label">Get in touch</AppReveal>

      <div>
        <AppReveal>
          <h2 class="display text-5xl md:text-[5rem]">
            Your vision.<br >
            Our execution.
          </h2>
        </AppReveal>

        <AppReveal :delay="120">
          <p class="mt-8 max-w-lg text-base leading-relaxed text-muted">
            Let’s build the next big thing together. Send us the brief and we’ll come back with a
            site survey plan and indicative scope.
          </p>
        </AppReveal>

        <AppReveal :delay="200">
          <a
            :href="`mailto:${company.contact.email}`"
            class="link-underline mt-12 inline-block font-display text-3xl md:text-5xl"
          >
            {{ company.contact.email }}
          </a>
        </AppReveal>

        <AppReveal :delay="260">
          <div class="mt-14 grid gap-8 text-sm sm:grid-cols-3">
            <div>
              <p class="label">Phone</p>
              <a
                :href="`tel:${company.contact.phone.replace(/[^+\d]/g, '')}`"
                class="link-underline mt-2 inline-block"
              >
                {{ company.contact.phone }}
              </a>
            </div>
            <div>
              <p class="label">Based in</p>
              <p class="mt-2">{{ company.contact.address }}</p>
            </div>
            <div>
              <p class="label">Scope</p>
              <p class="mt-2">{{ company.tagline }}</p>
            </div>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
