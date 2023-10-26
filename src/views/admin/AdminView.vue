<template>
  <div class="container p-5">
    <h3>這是後台</h3>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <RouterLink to="/admin/articles">後台文章</RouterLink>|
        <RouterLink to="/admin/products">後台產品</RouterLink>|
        <RouterLink to="/admin/checks">後台訂單</RouterLink>|
        <RouterLink to="/">返回前台</RouterLink>|
      </div>
      <button class="btn btn-outline-info" type="button" @click="logout">
        登出
      </button>
    </div>
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import loginStore from "../../stores/loginStore.js";
import { mapActions } from "pinia";
export default {
  components: {
    RouterView,
  },
  methods: {
    ...mapActions(loginStore, ["logout"]),
  },
};
</script>
