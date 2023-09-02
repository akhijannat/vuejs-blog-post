<script setup>
import { ref, reactive, onUpdated } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

import PostList from "../components/PostList.vue";

const posts = reactive({});
const isNull = ref(true);

onUpdated(async () => {
  await axios
    .get(`https://basic-blog.teamrabbil.com/api/post-list/${route.params.id}`)
    .then(function (response) {
      isNull.value = false;
      Object.assign(posts, response.data);
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
