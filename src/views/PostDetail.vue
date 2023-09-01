<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const postId = ref(router.currentRoute.value.params.id);

const post = ref({});

const fetchPostDetail = async () => {
  try {
    const response = await axios.get(
      `https://basic-blog.teamrabbil.com/api/post-details/${postId.value}`
    );
    post.value = response.data;
    console.log(postId);
  } catch (error) {
    console.error("Error fetching post detail:", error);
  }
};

fetchPostDetail();

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="w-4/5 mx-auto">
    <img :src="post.img" alt="" class="h-[350px] w-full" />
    <!-- <img
      src="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
      alt=""
      class="h-[350px] w-full"
    /> -->
    <div class="pb-6">
      <h1
        class="text-4xl py-4 text-center bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white font-bold"
      >
        {{ post.title }}
      </h1>
      <p class="mt-10">
        {{ post.content }}
      </p>
      <button
        @click="goBack"
        class="mt-4 bg-gradient-to-r from-pink-400 via-red-600 to-yellow-600 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  </div>
</template>
