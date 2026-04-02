<template>
  <a
    v-show="visible"
    class="scroll-to-top shadow no-underline cursor-pointer"
    href="#page-top"
    @click.prevent="scrollToTop"
  >
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
