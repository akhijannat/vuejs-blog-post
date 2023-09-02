<script setup>
import { RouterView } from "vue-router";
import Header from "./components/HeaderView.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto my-10">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
