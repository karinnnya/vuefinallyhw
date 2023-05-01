<template>
  <div class="container pt-5">
    <TitleComponent
      :title="$t('title.news')"
      class="text-center mt-5 mb-5"
    ></TitleComponent>
    <div class="d-flex justify-content-center mb-3">
      <button
        type="button"
        class="btn me-3 rounded-pill btn-outline-primary"
        :class="{ active: selectedKind === '活動消息' }"
        @click="selectKind('活動消息')"
      >
        活動消息
      </button>
      <button
        type="button"
        class="btn me-3 rounded-pill btn-outline-secondary"
        :class="{ active: selectedKind === '線上商城' }"
        @click="selectKind('線上商城')"
      >
        線上商城
      </button>
      <button
        type="button"
        class="btn rounded-pill btn-outline-info"
        :class="{ active: selectedKind === '園區公告' }"
        @click="selectKind('園區公告')"
      >
        園區公告
      </button>
    </div>

    <ArticlesComponent :data="paginatedArticles"></ArticlesComponent>

    <div class="pagination justify-content-center mt-3">
      <button
        type="button"
        class="page-link"
        v-for="i in pageCount"
        :key="i"
        :class="{ active: currentPage === i }"
        @click="currentPage = i"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
import ArticlesComponent from "@/components/ArticlesComponent.vue";

import articles from "@/stores/articles";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      onePage: 3,
      currentPage: 1,
      selectedKind: "",
    };
  },
  components: {
    ArticlesComponent,
    TitleComponent,
  },
  computed: {
    ...mapState(articles, ["articles"]),
    pageCount() {
      return Math.ceil(this.filteredArticles.length / this.onePage);
    },
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.onePage;
      const endIndex = startIndex + this.onePage;
      return this.filteredArticles.slice(startIndex, endIndex);
    },

    filteredArticles() {
      let articles = this.articles;

      if (this.selectedKind) {
        articles = articles.filter(
          (articles) => articles.kind === this.selectedKind
        );
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentPage = 1;
      }
      return articles;
    },
  },
  methods: {
    ...mapActions(articles, ["getArticles"]),
    selectKind(kind) {
      if (this.selectedKind === kind) {
        this.selectedKind = "";
      } else {
        this.selectedKind = kind;
      }
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
