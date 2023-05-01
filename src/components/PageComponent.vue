<template>
  <div class="pagination justify-content-center mt-3">
    <button
      type="button"
      class="page-link"
      :disabled="currentPage === 1"
      @click="updateCurrentPage(currentPage - 1)"
    >
      上一頁
    </button>
    <button
      type="button"
      class="page-link"
      v-for="i in pageCount"
      :key="i"
      :class="{ active: currentPage === i }"
      @click="updateCurrentPage(i)"
    >
      {{ i }}
    </button>
    <button
      type="button"
      class="page-link"
      :disabled="currentPage === pageCount"
      @click="updateCurrentPage(currentPage + 1)"
    >
      下一頁
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    pageCount: Number,
    updateCurrentPage: Function,
  },
};
</script>
