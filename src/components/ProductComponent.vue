<template>
  <div class="row">
    <div class="col-12 col-md-2">
      <ul class="list-group text-center">
        <li class="list-group-item bg-secondary fw-bold">商品分類</li>
        <li
          class="list-group-item"
          :class="{ 'bg-secondary text-white': selectedCategory === '' }"
          @click="selectedCategory = ''"
        >
          <div type="button" style="display: block">全部商品</div>
        </li>
        <li
          class="list-group-item"
          :class="{ 'bg-secondary text-white': selectedCategory === item }"
          v-for="(item, i) in categories"
          :key="i"
          @click="selectedCategory = item"
        >
          <div
            :disabled="selectedCategory === item"
            type="button"
            style="display: block"
          >
            {{ item }}
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-10">
      <div class="d-flex flex-column flex-md-row justify-content-md-between">
        <select v-model="ascending">
          <option value="" disabled>排序方式</option>
          <option value="">最新上架</option>
          <option :value="true">價格高到低</option>
          <option :value="false">價格低到高</option>
        </select>
        <input
          type="text"
          v-model.lazy="searchQuery"
          placeholder="請輸入商品名稱"
        />
      </div>

      <div class="row">
        <div
          v-for="product in paginatedProducts"
          :key="product.id"
          class="col-md-4 col-6 gy-3 d-flex flex-wrap"
        >
          <div class="card productCard hoverImg">
            <div
              class="productBtn"
              role="button"
              style="position: relative; height: 100%; overflow: hidden"
              @click.prevent="getDetail(product)"
            >
              <img
                :src="product.imgUrls"
                class="card-img-top"
                alt="product.title"
                style="height: 100%; object-fit: cover"
              />
            </div>

            <div class="card-body">
              <h5 class="card-title text-truncate">{{ product.title }}</h5>
              <p class="card-text">$ {{ product.price }} 元</p>

              <div v-if="product.sell">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="addBtnnn(product.id)"
                  v-if="!addBtn"
                >
                  加入購物車
                </button>
                <button
                  type="button"
                  class="btn btn-secondary text-white"
                  disabled
                  v-else
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  加入中...
                </button>
              </div>
              <button
                type="button"
                class="btn btn-outline-secondary"
                disabled
                v-else
              >
                商品缺貨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pagination justify-content-center mt-3">
    <button
      class="page-link"
      v-for="i in pageCount"
      :key="i"
      :class="{ 'bg-secondary text-white': currentPage === i }"
      @click="goToPage(i)"
    >
      {{ i }}
    </button>
  </div>

  <!-- Modal -->
  <div
    class="modal fade productInfo"
    ref="modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ product.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div>
          <div>
            <img
              v-bind:src="product?.imgUrls"
              class="card-img-top primary-image"
              alt="主圖"
              style="height: 500px"
            />
            <div class="p-3">
              <span class="badge bg-secondary">{{ product.group }}</span>
              <h5 class="card-title mt-1 mb-2">
                {{ product.title }}
              </h5>
              <p class="card-text">商品描述：{{ product.content }}</p>

              <p class="card-text me-2">價格：{{ product.price }} 元</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary text-white"
            @click.prevent="addToCart(product.id)"
            v-if="product.sell"
          >
            加入購物車
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary"
            disabled
            v-else
          >
            缺貨中
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.productBtn::after {
  content: "查看詳細";

  color: black;
  position: absolute;
  bottom: -100%;
  left: 50%;
  border-radius: 5px;
  transform: translateX(-50%);
  background: white;
  padding: 10px 20px;
  opacity: 0.7;

  transition: 0.5s;
}

.productBtn:hover::after {
  bottom: 3px;
}

@media (max-width: 992px) {
  .productInfo {
    height: 100vh !important;
  }
}
</style>

<script>
import produceStore from "../stores/produceStore.js";
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";
import modalMixin from "../mixin/modalMixin";
import Swal from "sweetalert2";
import router from "../router";

export default {
  data() {
    return {
      product: {
        imgUrls: [],
      },
      sortBy: "price",
      ascending: "",
      onePage: 6,
      currentPage: 1,
      selectedCategory: "",
      searchQuery: "",
      addBtn: false,
    };
  },
  components: {},
  watch: {
    ascending: {
      handler() {
        this.sortByDate();
      },
    },
  },
  computed: {
    ...mapState(produceStore, ["products", "categories"]),

    pageCount() {
      return Math.ceil(this.filteredProducts.length / this.onePage);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.onePage;
      const endIndex = startIndex + this.onePage;

      return this.filteredProducts.slice(startIndex, endIndex);
    },

    filteredProducts() {
      let products = this.products;

      if (this.selectedCategory) {
        products = products.filter(
          (product) => product.group === this.selectedCategory
        );
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentPage = 1;
        // eslint-disable-next-line vue/no-async-in-computed-properties
        this.$nextTick(() => {
          window.scrollTo(0, 0);
        });
      }
      if (this.searchQuery) {
        // products = products.filter(product => product.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
        products = products.filter((item) => item.title === this.searchQuery);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentPage = 1;
      }
      return products;
    },
  },
  mixins: [modalMixin],
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(produceStore, ["getProducts", "getPage", "text"]),
    getDetail(id) {
      this.modal.show();
      this.product = id;
    },
    sortByDate() {
      this.products.sort((a, b) => {
        return this.ascending
          ? b[this.sortBy] - a[this.sortBy]
          : a[this.sortBy] - b[this.sortBy];
      });
      return this.products;
    },
    goToPage(page) {
      this.currentPage = page;
      window.scrollTo(0, 0);
    },
    addBtnnn(i) {
      if (!this.userId) {
        Swal.fire({
          title: "請先登入會員",
          icon: "error",
          confirmButtonText: "前往登入",

          // 自訂按鈕 class
          customClass: {
            confirmButton: "btn btn-outline-info",
          },
          buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("login");
          }
        });
      } else {
        (this.addBtn = true),
          setTimeout(() => {
            this.addToCart(this.userId, i), (this.addBtn = false);
          }, 500);
      }
    },
  },
  mounted() {
    this.getProducts();
    this.userId = localStorage.getItem("userId");
  },
};
</script>
