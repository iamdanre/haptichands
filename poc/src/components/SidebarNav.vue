<template>
  <nav id="sidebar-wrapper" :class="{ active: isOpen }">
    <ul class="list-none m-0 p-0 absolute top-0 w-[250px]">
      <li class="text-lg h-20 leading-[50px] pt-4 pb-4 pl-4 bg-white/10">
        <a class="text-white no-underline" href="#page-top" @click.prevent="closeSidebar('#page-top')">Haptic Hands</a>
      </li>
      <li v-for="item in navItems" :key="item.href">
        <a
          class="block text-white no-underline py-4 px-4 hover:bg-white/20 transition-colors"
          :href="item.href"
          @click.prevent="closeSidebar(item.href)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({ isOpen: Boolean })
const emit = defineEmits(['toggle'])

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'What We Offer' },
  { href: '#portfolio', label: 'Gallery' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

function closeSidebar(hash) {
  emit('toggle')
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
