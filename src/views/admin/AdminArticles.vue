<template>
  <!-- {{ articles }} -->
  <div class="container">
    <div class="text-end">
      <button class="btn btn-primary" @click="openArticleBtn">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4 align-middle table-hover">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th width="200">圖片</th>
          <th>標題</th>
          <th width="150">新增時間</th>
          <th width="150">最後修改</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in articles" :key="i.id">
          <td>{{ i.kind }}</td>
          <td>
            <img
              :src="i.imgurl"
              alt="文章圖片"
              style="width: 100px; height: 100px"
            />
          </td>

          <td>{{ i.title }}</td>
          <td>{{ i.addDate }}</td>
          <td>{{ i.editTime }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openArticleBtn('edit', i)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openArticleBtn('del', i)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 編輯文章 -->
    <div
      ref="modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">
              <span v-if="state">新增產品</span>
              <span v-else>最後編輯時間--{{ article.editTime }}</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <h5>分類</h5>
              <select class="form-select-sm" v-model="article.kind">
                <option :value="'線上商城'">線上商城</option>
                <option :value="'活動消息'">活動消息</option>
                <option :value="'園區公告'">園區公告</option>
              </select>
            </div>
            <div class="mb-3">
              <div>
                <h5>圖片</h5>
                <label for="imageUrl" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="請輸入圖片連結"
                  v-model="article.imgurl"
                />
              </div>
              <div style="width: 300px">
                <img class="img-fluid" :src="article.imgurl" alt="文章圖片" />
              </div>
            </div>

            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input
                id="title"
                type="text"
                class="form-control"
                v-model="article.title"
                placeholder="請輸入標題"
              />
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">公告內容</label>
              <textarea
                id="description"
                type="text"
                class="form-control"
                placeholder="請輸入產品描述"
                v-model="article.content"
              >
              </textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="closeBtn(state, article)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除文章 -->
    <div
      id="delProductModal"
      ref="delmodal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="delProductModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger"></strong>
            {{ article.title }}(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="closeBtn('del', article)"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articles from "@/stores/articles";
import { mapState, mapActions } from "pinia";
import modalMixin from "@/mixin/modalMixin";
import delmodalMixin from "@/mixin/delmodalMixin";

export default {
  data() {
    return {
      article: {},
      cart: [],
      state: true,
    };
  },
  computed: {
    ...mapState(articles, ["articles"]),
  },
  mixins: [modalMixin, delmodalMixin],

  methods: {
    ...mapActions(articles, [
      "getArticles",
      "newArticles",
      "sendArticle",
      "delArticle",
    ]),
    openArticleBtn(state, i) {
      if (state === "del") {
        this.delmodal.show();
        this.article = i;
        this.state = false;
      } else if (state == "edit") {
        this.modal.show();
        this.article = { ...i };
        // this.article = JSON.parse(JSON.stringify(i))

        this.state = false;
      } else {
        this.article = {};
        this.state = true;
        this.modal.show();
      }
    },

    closeBtn(state, i) {
      if (state === "del") {
        this.delmodal.hide();
        this.delArticle(i);
        this.getArticles();
      } else {
        this.modal.hide();

        this.sendArticle(this.state, i);
        this.getArticles();
      }
    },

    text() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      setTimeout(() => {
        this.getProducts();
        loader.hide();
      }, 2000);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
