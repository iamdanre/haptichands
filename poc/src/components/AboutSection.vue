<template>
  <section id="about" class="py-30 bg-gray-100">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">Swimming.</h2>
        <p class="text-lg text-gray-500 mb-10 leading-relaxed">
          Swimming lessons are offered year-round in heated, indoor pools, allowing for consistent
          progress even during winter. We keep groups small (2–3 children) to prioritize
          <strong>individual attention</strong>, tailoring our teaching methods to unique learning styles
          and <strong>special needs</strong>. Grounded in the principles of
          <a
            class="text-brand font-bold no-underline cursor-pointer hover:text-brand-dark"
            href="#kinderkinetics"
            @click.prevent="scrollTo('#kinderkinetics')"
          >Kinderkinetics</a>,
          the program creates a nurturing environment where children build aquatic confidence and skills at their own pace.
        </p>

        <h2 id="kinderkinetics" class="text-4xl font-bold mb-4">Kinderkinetics.</h2>
        <p class="text-lg text-gray-500 mb-10 leading-relaxed">
          A profession that aims to promote and optimize the neuromotoric development of
          children aged 0-13 through scientifically based physical activity. It focuses on the unique
          developmental needs of every individual child and is a fun-orientated
          program that helps to develop a child's motor skills. All programmes within the profession have
          a preventative, stimulating, developmental and remedial nature.
        </p>

        <a
          class="inline-block bg-gray-800 text-white font-bold px-10 py-5 text-lg rounded shadow no-underline cursor-pointer hover:bg-gray-900 transition-colors"
          href="#services"
          @click.prevent="scrollTo('#services')"
        >
          What We Offer
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
