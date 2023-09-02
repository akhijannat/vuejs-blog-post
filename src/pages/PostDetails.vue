<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const post = reactive({});
const isNull = ref(false);

onBeforeMount(async () => {
  await axios
    .get(
      `https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`
    )
    .then(function (response) {
      if (response.data.postDetails) {
        Object.assign(post, response.data.postDetails);
      } else {
        isNull.value = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>

<template>
  <div class="p-40 bg-pink-100/50 rounded-3xl" v-if="isNull">
    <div
      class="flex items-center justify-center max-w-3xl mx-auto bg-yellow-500/30 h-72 rounded-2xl"
    >
      <div class="text-3xl font-bold text-center text-red-500">
        <h2>দুঃখিত বিস্তারিত তথ্য পাওয়া যায়নি</h2>
        <router-link
          to="/"
          class="inline-flex items-center justify-between gap-2 px-5 py-3 mt-10 rounded-xl hover:bg-gray-200"
          :class="route.name == 'home' ? 'bg-gray-200' : 'bg-yellow-200'"
        >
          হোম এ ফিরে যান
        </router-link>
      </div>
    </div>
  </div>
  <div class="" v-else>
    <img :src="post.img" class="rounded-t-lg" alt="" />
    <div class="px-3 pb-3">
      <h3 class="py-3 font-bold">{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<style scoped></style>
