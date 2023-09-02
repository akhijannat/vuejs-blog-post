<script setup>
import { ref, onMounted } from "vue";
import PostList from "../components/PostList.vue";

let posts = ref(null);

onMounted(async () => {
  await axios
    .get("https://basic-blog.teamrabbil.com/api/post-newest")
    .then(function (response) {
      posts.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>

<template>
  <PostList :posts="posts" />
</template>

<style scoped></style>
