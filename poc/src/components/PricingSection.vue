<template>
  <!-- Pricing header -->
  <section id="pricing" class="py-16 bg-accent text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-5xl font-bold mb-2">Pricing</h2>
    </div>
  </section>

  <!-- Pricing table -->
  <section class="py-30 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-2xl font-bold mb-4 underline">Swimming Lessons</h2>

      <div class="bg-white rounded-2xl shadow overflow-hidden mb-5">
        <table class="w-full text-left">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="py-3 px-4 font-semibold">Program</th>
              <th class="py-3 px-4 font-semibold">Duration and Frequency</th>
              <th class="py-3 px-4 font-semibold">Cost*</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <!-- Splash -->
            <tr
              class="cursor-pointer hover:bg-gray-50 transition-colors"
              :aria-expanded="openRow === 'splash' ? 'true' : 'false'"
              @click="toggleRow('splash')"
            >
              <td class="py-3 px-4">
                <div class="flex items-center">
                  <i class="rotate-icon mr-2 text-brand text-sm" :class="openRow === 'splash' ? 'rotate-90' : ''">&#9654;</i>
                  <div>
                    Group Baby "Splash" Lessons<br>
                    <span class="text-gray-400 text-sm">7 months - 3 years</span>
                  </div>
                </div>
              </td>
              <td class="py-3 px-4">30 minutes<br>Once a week</td>
              <td class="py-3 px-4">N$500.00</td>
            </tr>
            <tr v-if="openRow === 'splash'">
              <td colspan="3" class="px-12 py-3">
                <ul class="list-disc text-sm text-gray-500 space-y-1">
                  <li>For babies 7 months up to 3 years old.</li>
                  <li>Groups of 4 babies accompanied by a parent/guardian.</li>
                  <li>Babies begin to learn the basics of swimming.</li>
                </ul>
              </td>
            </tr>

            <!-- Group swimming -->
            <tr
              class="cursor-pointer hover:bg-gray-50 transition-colors"
              :aria-expanded="openRow === 'group' ? 'true' : 'false'"
              @click="toggleRow('group')"
            >
              <td class="py-3 px-4">
                <div class="flex items-center">
                  <i class="rotate-icon mr-2 text-brand text-sm" :class="openRow === 'group' ? 'rotate-90' : ''">&#9654;</i>
                  <div>
                    Group Swimming Lessons<br>
                    <span class="text-gray-400 text-sm">3-8 years</span>
                  </div>
                </div>
              </td>
              <td class="py-3 px-4">30 minutes<br>Once a week</td>
              <td class="py-3 px-4">N$600.00</td>
            </tr>
            <tr v-if="openRow === 'group'">
              <td colspan="3" class="px-12 py-3">
                <ul class="list-disc text-sm text-gray-500 space-y-1">
                  <li>Structured group session for children generally aged 3 years and older.</li>
                  <li>Requires skills to swim with peers of equal ability.</li>
                  <li>Groups of 2-3 children.</li>
                </ul>
              </td>
            </tr>

            <!-- Admin fee -->
            <tr class="bg-gray-50">
              <td class="py-3 px-4"></td>
              <td class="py-3 px-4 font-bold">Administration fee*</td>
              <td class="py-3 px-4">N$200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-gray-500 text-sm space-y-1 mt-3">
        <p><i class="bi bi-info-circle mr-2"></i><strong>Venue is dependent on the day of the week.</strong></p>
        <p><i class="bi bi-info-circle mr-2"></i><strong>All prices are monthly.</strong></p>
        <p><i class="bi bi-info-circle mr-2"></i><strong>For areas outside of Windhoek, N$250 is charged monthly for fuel.</strong></p>
        <p><i class="bi bi-info-circle mr-2"></i><strong>Administration fees are once-off.</strong></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const openRow = ref(null)
function toggleRow(id) {
  openRow.value = openRow.value === id ? null : id
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
