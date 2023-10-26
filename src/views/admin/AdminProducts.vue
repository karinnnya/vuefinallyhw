<template>
  <div class="container">
    <div class="text-end">
      <button class="btn btn-primary" @click="openProdBtn">建立新的產品</button>
    </div>
    <table class="table mt-4 align-middle table-hover">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th width="200">圖片</th>
          <th>產品名稱</th>
          <th width="150">原價</th>
          <th width="100">商品狀態</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="temp in paginatedProducts" :key="temp.id">
          <td>{{ temp.group }}</td>
          <td>
            <img
              :src="temp.imgUrls"
              alt="產品圖片"
              style="width: 100px; height: 100px"
            />
          </td>
          <td>{{ temp.title }}</td>
          <td>{{ temp.price }}</td>
          <td>
            <span class="text-success" v-if="temp.sell">販售中</span>
            <span v-else>缺貨中</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openProdBtn('edit', temp)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openProdBtn('del', temp)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PageComponent
      :currentPage="currentPage"
      :pageCount="pageCount"
      :updateCurrentPage="updateCurrentPage"
    >
    </PageComponent>

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
              <span v-if="newProd">新增產品</span>
              <span v-else>編輯產品--{{ product.title }}</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4 mb-3">
                <div>
                  <h5>圖片</h5>
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="請輸入圖片連結"
                    v-model="product.imgUrls"
                  />
                  <!-- <div v-for="(imageUrl, index) in product.imgUrls" :key="index + 'img'">
                 
                  </div> -->
                </div>
                <div style="width: 300px">
                  <img
                    class="img-fluid"
                    :src="product.imgUrls"
                    alt="產品圖片"
                  />
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <h5>分類</h5>
                  <select class="form-select-sm" v-model="product.group">
                    <option :value="'玩具布偶'">玩具布偶</option>
                    <option :value="'文具周邊'">文具周邊</option>
                    <option :value="'生活用品'">生活用品</option>
                  </select>
                </div>

                <div class="mb-3">
                  <h5>商品名稱</h5>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    v-model="product.title"
                    placeholder="請輸入標題"
                  />
                </div>
                <div class="mb-3">
                  <h5>售價</h5>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="product.price"
                  />
                </div>

                <div class="mb-3">
                  <h5>商品描述</h5>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入商品描述"
                    v-model="product.content"
                  >
                  </textarea>
                </div>

                <div>
                  <h5>是否販售</h5>

                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      v-model="product.sell"
                      checked
                    />
                  </div>
                </div>
              </div>
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
              @click="closeBtn(newProd, product)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除產品 -->
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
            {{ product.title }}(刪除後將無法恢復)。
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
              @click="closeBtn('del', product)"
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
import produceStore from "../../stores/produceStore";
import { mapState, mapActions } from "pinia";
import modalMixin from "../../mixin/modalMixin";
import delmodalMixin from "../../mixin/delmodalMixin";

import PageComponent from "../../components/PageComponent.vue";

export default {
  data() {
    return {
      onePage: 6,
      currentPage: 1,
      product: {},
      newProd: false,
    };
  },
  components: {
    PageComponent,
  },
  computed: {
    ...mapState(produceStore, ["products", "sortProducts", "allPage"]),
    pageCount() {
      return Math.ceil(this.products.length / this.onePage);
    },
    paginatedProducts() {
      console.log(this.currentPage);
      const startIndex = (this.currentPage - 1) * this.onePage;
      const endIndex = startIndex + this.onePage;
      return this.products.slice(startIndex, endIndex);
    },
  },
  mixins: [modalMixin, delmodalMixin],

  methods: {
    // ...mapActions(cartStore, ['addToCart']),
    ...mapActions(produceStore, [
      "getProducts",
      "getPage",
      "sendProduct",
      "delProduct",
    ]),
    updateCurrentPage(page) {
      this.currentPage = page;
    },
    openProdBtn(prod, i) {
      if (prod === "del") {
        this.delmodal.show();
        this.product = i;
        this.newProd = false;
      } else if (prod == "edit") {
        this.modal.show();
        this.product = { ...i };
        this.newProd = false;
      } else {
        this.product = {};
        this.newProd = true;
        this.modal.show();
      }
    },

    closeBtn(state, i) {
      if (state === "del") {
        this.delmodal.hide();
        this.delProduct(i);
        this.getProducts();
      } else {
        this.modal.hide();
        this.sendProduct(this.newProd, i);
        this.getProducts();
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
