<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const navLink = "ease-in duration-300 text-sm py-1 px-3 hover:text-[#e8505b]";

const route = useRoute();
const isActive = (routePath) => {
  return route.path === routePath
    ? "bg-gradient-to-r from-pink-400 to-yellow-600 text-white hover:text-white rounded-tr-[20px] rounded-bl-[20px]"
    : "";
};

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
<template>
  <header class="bg-white py-4 sticky top-0 shadow-sm">
    <div class="container mx-auto px-4 lg:px-10">
      <nav
        class="relative flex flex-col md:flex-row items-center justify-between"
      >
        <RouterLink to="/">
          <h1
            class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600"
          >
            BLOG
          </h1>
        </RouterLink>
        <button
          @click="toggleMobileMenu"
          class="absolute top-0 right-0 ml-auto text-gray-500 focus:outline-none md:hidden"
        >
          <svg
            v-show="!mobileMenuOpen"
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>

          <svg
            v-show="mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          :class="mobileMenuOpen ? 'flex' : 'hidden'"
          class="flex-col md:flex md:flex-row lg:text-xl font-bold md:items-center"
        >
          <RouterLink to="/" :class="[navLink, isActive('/')]">Home</RouterLink>
          <RouterLink to="/library" :class="[navLink, isActive('/library')]"
            >Library</RouterLink
          >
          <RouterLink to="/history" :class="[navLink, isActive('/history')]"
            >History</RouterLink
          >
          <RouterLink to="/sport" :class="[navLink, isActive('/sport')]"
            >Sport</RouterLink
          >
          <RouterLink
            to="/bangladesh"
            :class="[navLink, isActive('/bangladesh')]"
            >Bangladesh</RouterLink
          >
          <RouterLink to="/science" :class="[navLink, isActive('/science')]"
            >Science</RouterLink
          >
          <RouterLink to="/biography" :class="[navLink, isActive('/biography')]"
            >Biography</RouterLink
          >
          <RouterLink to="/lifestyle" :class="[navLink, isActive('/lifestyle')]"
            >Lifestyle</RouterLink
          >
          <RouterLink to="/fable" :class="[navLink, isActive('/fable')]"
            >Fable</RouterLink
          >
        </div>

        <div
          :class="mobileMenuOpen ? 'block' : 'hidden'"
          class="md:flex md:items-center md:mt-0 mt-3"
        >
          <div class="flex space-x-1 lg:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped></style>
