<script setup>
import { RouterLink } from "vue-router";
const navLink = "ease-in duration-300 text-sm py-1 px-3 hover:text-[#e8505b]";
</script>

<template>
  <footer class="border">
    <div
      class="container mx-auto p-4 lg:px-10 font-bold flex items-center justify-between md:flex-row lg:text-xl"
    >
      <RouterLink to="/">
        <h1
          class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600"
        >
          BLOG
        </h1>
      </RouterLink>
      <div>
        <RouterLink to="/" :class="navLink">Home</RouterLink>
        <RouterLink to="/library" :class="navLink">Library</RouterLink>
        <RouterLink to="/history" :class="navLink">History</RouterLink>
        <RouterLink to="/sport" :class="navLink">Sport</RouterLink>
        <RouterLink to="/bangladesh" :class="navLink">Bangladesh</RouterLink>
        <RouterLink to="/science" :class="navLink">Science</RouterLink>
        <RouterLink to="/biography" :class="navLink">Biography</RouterLink>
        <RouterLink to="/lifestyle" :class="navLink">Lifestyle</RouterLink>
        <RouterLink to="/fable" :class="navLink">Fable</RouterLink>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
