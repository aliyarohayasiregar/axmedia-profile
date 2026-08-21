<script setup lang="ts">
import { company } from '~/data/company'
</script>

<template>
  <section id="kontak" class="rule scroll-mt-24 py-28 md:py-36">
    <div class="shell grid gap-14 md:grid-cols-[0.35fr_0.65fr]">
      <AppReveal as="p" class="label">Kontak</AppReveal>

      <div>
        <AppReveal>
          <h2 class="display text-5xl md:text-[5rem]">
            Mari mulai<br >
            percakapannya
          </h2>
        </AppReveal>

        <AppReveal :delay="120">
          <p class="mt-8 max-w-lg text-base leading-relaxed text-muted">
            Ceritakan tantangan merek Anda. Kami akan menyiapkan pandangan awal dan rekomendasi
            langkah berikutnya dalam waktu dua hari kerja.
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
              <p class="label">Telepon</p>
              <p class="mt-2">{{ company.contact.phone }}</p>
            </div>
            <div>
              <p class="label">Kantor</p>
              <p class="mt-2">{{ company.contact.address }}</p>
            </div>
            <div>
              <p class="label">Jam kerja</p>
              <p class="mt-2">Senin – Jumat, 09.00 – 18.00 WIB</p>
            </div>
          </div>
        </AppReveal>
      </div>
    </div>
  </section>
</template>
