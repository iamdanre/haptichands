<template>
  <section id="contact" class="py-30 bg-brand text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold mb-10">Get in touch</h2>
      <h4 class="text-xl mb-10">For more information and bookings, please contact:</h4>

      <div class="flex justify-center">
        <div class="w-full max-w-md">
          <div class="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <img
              class="w-full h-[350px] object-cover object-top"
              src="/img/sole.webp"
              alt="Solé"
            >
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-2">Solé</h3>
              <p class="text-gray-500 mb-6">
                Owner and founder. Lead Swimming Instructor.<br>
                Honours Degree in Kinderkinetics.
              </p>
              <div class="flex justify-center gap-4">
                <a
                  href="tel:+264813039115"
                  class="contact-btn border-brand text-brand hover:bg-brand hover:text-white"
                  aria-label="Call"
                >
                  <i class="bi bi-telephone text-2xl"></i>
                </a>
                <a
                  href="mailto:solehenning@gmail.com"
                  class="contact-btn border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  aria-label="Email"
                >
                  <i class="bi bi-envelope text-2xl"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=264813039115"
                  class="contact-btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <i class="bi bi-whatsapp text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
