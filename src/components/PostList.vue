<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const readMoreBtn =
  "mt-4 bg-gradient-to-r from-pink-400 via-red-600 to-yellow-600 text-white px-4 py-2 rounded-tl-[20px] rounded-br-[20px]";

const router = useRouter();

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://basic-blog.teamrabbil.com/api/post-newest"
    );
    posts.value = response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

onMounted(() => {
  fetchPosts();
});

const goToPostDetail = (postId) => {
  router.push({ name: "post", params: { id: postId } });
};
</script>

<template>
  <section class="w-4/5 mx-auto my-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="post in posts"
        :key="post.id"
        class="p-4 rounded shadow border"
      >
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="mt-5 text-sm italic">{{ post.short }}...</p>
        <button @click="goToPostDetail(post.id)" :class="readMoreBtn">
          Read More
        </button>
      </div>
    </div>
  </section>
</template>
