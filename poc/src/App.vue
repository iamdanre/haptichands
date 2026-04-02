<template>
  <div id="page-top">
    <SidebarNav :is-open="sidebarOpen" @toggle="sidebarOpen = !sidebarOpen" />
    <MenuToggle :is-open="sidebarOpen" @toggle="sidebarOpen = !sidebarOpen" />
    <MastheadSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <PricingSection />
    <ContactSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import MenuToggle from './components/MenuToggle.vue'
import MastheadSection from './components/MastheadSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import PricingSection from './components/PricingSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const sidebarOpen = ref(false)
</script>
