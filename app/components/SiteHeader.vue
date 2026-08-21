<script setup lang="ts">
const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Pendekatan', href: '#pendekatan' },
  { label: 'Karya', href: '#karya' },
  { label: 'Kontak', href: '#kontak' },
]

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.removeProperty('overflow')
})

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    :class="scrolled || open ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'"
  >
    <div class="shell flex h-20 items-center justify-between">
      <NuxtLink to="/" class="flex items-center" aria-label="Axmedia" @click="open = false">
        <img src="/logo.png" alt="Axmedia" class="h-6 w-auto md:h-7" width="1200" height="181">
      </NuxtLink>

      <nav class="hidden items-center gap-10 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="link-underline text-sm text-muted transition-colors hover:text-ink"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="#kontak"
        class="hidden rounded-full border border-ink px-5 py-2 text-sm transition-colors duration-300 hover:bg-ink hover:text-paper md:inline-block"
      >
        Mulai proyek
      </a>

      <button
        class="flex h-10 w-10 items-center justify-center md:hidden"
        :aria-expanded="open"
        aria-label="Buka menu"
        @click="open = !open"
      >
        <span class="relative block h-3 w-6">
          <span
            class="absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-300"
            :class="open && 'translate-y-[6px] rotate-45'"
          />
          <span
            class="absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-300"
            :class="open && '-translate-y-[6px] -rotate-45'"
          />
        </span>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200"
      leave-to-class="opacity-0"
    >
      <nav v-if="open" class="shell flex flex-col gap-6 border-t border-line py-8 md:hidden">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="font-display text-3xl"
          @click="open = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>
