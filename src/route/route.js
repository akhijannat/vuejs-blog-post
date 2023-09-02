import NewestPost from "../pages/NewestPost.vue";
import PostByCategory from "../pages/PostByCategory.vue";
import PostDetails from "../pages/PostDetails.vue";
const routes = [
  { path: "/", name: "home", component: NewestPost },
  { path: "/post/:category/:id", component: PostByCategory },
  { path: "/post-details/:id", component: PostDetails },
];

export default routes;
