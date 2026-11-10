<template>
  <div
    class="w-[220px] h-[220px] md:w-[320px] md:h-[320px] shrink-0 border-2 border-white rounded-full overflow-hidden shadow-2xl"
  >
    <img
      :src="`${baseURL}img/avatar.jpg`"
      alt="Dariusz Kaczmarek"
      width="320"
      height="320"
      fetchpriority="high"
      class="w-full h-full block object-cover object-center"
    />
  </div>
</template>

<script setup lang="ts">
const { baseURL } = useRuntimeConfig().app;
</script>
