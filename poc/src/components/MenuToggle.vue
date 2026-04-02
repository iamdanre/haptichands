<template>
  <a
    class="fixed right-4 top-4 w-[50px] h-[50px] text-center text-white bg-gray-800/50 leading-[50px] z-[999] rounded shadow hover:bg-gray-800 transition-colors cursor-pointer"
    href="#"
    @click.prevent="$emit('toggle')"
  >
    <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
  </a>
</template>

<script setup>
defineProps({ isOpen: Boolean })
defineEmits(['toggle'])
</script>
