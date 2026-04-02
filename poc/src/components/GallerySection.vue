<template>
  <section id="portfolio" class="py-30">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="text-5xl font-bold mb-5">Gallery</h2>
      </div>

      <!-- Images row -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="img in images" :key="img.src" class="overflow-hidden rounded-xl shadow">
          <img
            loading="lazy"
            class="w-full h-full object-cover min-h-[200px]"
            :src="img.src"
            :alt="img.alt"
          >
        </div>
      </div>

      <!-- Videos row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div v-for="vid in videos" :key="vid" class="rounded-xl shadow overflow-hidden">
          <video class="w-full block" autoplay loop muted playsinline>
            <source :src="vid" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  { src: '/img/limbo.jpg', alt: 'Boy crawling under limbo pole.' },
  { src: '/img/IMG_7875.jpeg', alt: 'Instructor helping child align hand onto hand print.' },
  { src: '/img/IMG_0529.jpg', alt: 'Baby smiling in swimming pool.' },
  { src: '/img/draw.jpg', alt: 'Boy painting while balancing on exercise ball.' },
]

const videos = ['/vid/swim.mp4', '/vid/lol.mp4', '/vid/float.mp4', '/vid/boop.mp4']
</script>
