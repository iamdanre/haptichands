<template>
  <header class="masthead-bg min-h-[30rem] lg:h-screen relative flex items-center justify-center pt-32 pb-32">
    <div class="container mx-auto text-center my-auto">
      <a
        class="inline-block btn-brand px-10 py-5 text-lg rounded shadow cursor-pointer no-underline"
        href="#about"
        @click.prevent="scrollTo('#about')"
      >
        Find Out More
      </a>
    </div>
  </header>
</template>

<script setup>
function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
