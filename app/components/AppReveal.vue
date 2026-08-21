<script setup lang="ts">
const props = withDefaults(defineProps<{ delay?: number; as?: string }>(), {
  delay: 0,
  as: 'div',
})

const el = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      visible.value = true
      observer?.disconnect()
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="props.delay ? { transitionDelay: `${props.delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>
