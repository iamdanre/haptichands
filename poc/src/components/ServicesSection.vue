<template>
  <section id="services" class="py-30 bg-brand text-white text-center">
    <div class="container mx-auto px-4">
      <div class="mb-10">
        <h2 class="text-5xl font-bold mb-5">What We Offer</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="service in services" :key="service.title" class="flex flex-col items-center">
          <span class="service-icon rounded-full mx-auto mb-3">
            <i :class="service.icon"></i>
          </span>
          <h4 class="font-bold text-lg mt-2">{{ service.title }}</h4>
          <p class="text-white/50 mt-2">{{ service.description }}</p>
        </div>
      </div>
      <div class="mt-10">
        <a
          class="inline-block bg-gray-800 text-white font-bold px-10 py-5 text-lg rounded shadow no-underline cursor-pointer hover:bg-gray-900 transition-colors"
          href="#pricing"
          @click.prevent="scrollTo('#pricing')"
        >
          Pricing
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'fas fa-swimmer',
    title: 'Swimming Lessons',
    description: 'Development of swimming skills for ages ranging between 7 months to 13 years. Basic to advanced aquatic skills depending on age and requirements. Parents/Guardians may climb in pool.',
  },
  {
    icon: 'fas fa-baby',
    title: 'Baby Stimulation Lessons',
    description: 'Stimulating exercises to enhance development, both gross motor and fine motor activities. Only until the child can walk.',
  },
  {
    icon: 'fas fa-walking',
    title: 'Movement Lessons',
    description: 'Balance, rhythm and timing, locomotion, coordination, ball skills and spatial orientation. Starts when the child can walk until 13 years of age.',
  },
  {
    icon: 'icon-social-dribbble',
    title: 'Wellness Lessons',
    description: 'Focuses on certain sport skills and is more fitness orientated. Examples include hockey drills, soccer, rugby, etc. Ages 6 to 13.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Remedial Lessons',
    description: 'Addresses physical challenges of gross motor movements to ensure readiness for school and improve school performance. Focuses on children\'s individual and specific needs.',
  },
]

function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
