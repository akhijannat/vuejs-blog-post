<script setup>
import { defineProps } from "vue";
import { RouterLink, useRoute } from "vue-router";

defineProps(["posts"]);

const route = useRoute();
</script>

<template>
  <div class="mb-5 text-center">
    <h2
      class="font-bold inline-block py-3 px-7 bg-gradient-to-r from-pink-400 to-yellow-600 text-white hover:text-white rounded"
    >
      {{ route.params.category ?? "সাম্প্রতিক বিষয় সমূহ" }}
    </h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 p-3 gap-6">
    <div
      :to="`/post-details/${post.id}`"
      class="rounded-b-lg shadow"
      v-for="(post, index) in posts"
      :key="index"
    >
      <img :src="post.img" class="rounded-t-lg max-h-[220px]" alt="" />
      <div class="px-3 pb-3">
        <h3 class="py-3 font-bold">{{ post.title }}</h3>
        <p>{{ post.short }}</p>
        <RouterLink
          :to="`/post-details/${post.id}`"
          class="text-sm inline-block py-1 px-3 mt-3 bg-yellow-600 text-white hover:text-white rounded"
          >আরো জানুন</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
