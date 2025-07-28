<template>
  <div>
    <VisitingCard />

    <div id="about-me">
      <AboutMe />
    </div>

    <div id="experience">
      <Experience />
    </div>

    <div id="goals">
      <Goals />
    </div>

    <div id="contact">
      <Contact />
    </div>
  </div>
</template>

<script setup lang="ts">
import VisitingCard from '~/layouts/VisitingCard.vue';
import AboutMe from '~/layouts/AboutMe.vue';
import Experience from '~/layouts/Experience.vue';
import Contact from '~/layouts/Contact.vue';
import Goals from '~/layouts/Goals.vue';
</script>

<style scoped></style>
