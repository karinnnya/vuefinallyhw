<template>
  <div class="container pt-5">
    <!-- 購物車按鈕 -->

    <button
      type="button"
      class="btn btn-outline-secondary border border-secondary border-4 cartBtn shadow"
      style="
        z-index: 1;
        position: fixed;
        bottom: 80px;
        right: 3%;
        border-radius: 50%;
        padding: 10px;
      "
    >
      <BootstrapIcon
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        icon="cart-fill"
        size="2x"
        class="m-2"
      />
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header bg-secondary text-white">
        <h5 id="offcanvasRightLabel">購物車內容</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <CartComponent />
      </div>
    </div>

    <TitleComponent
      :title="$t('title.products')"
      class="text-center mt-5 mb-5"
    ></TitleComponent>

    <ProductComponent />
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import CartComponent from "@/components/CartComponent.vue";

import { mapState, mapActions } from "pinia";
import produceStore from "@/stores/produceStore.js";

export default {
  data() {
    return {
      clearData: false,
    };
  },
  components: {
    TitleComponent,
    ProductComponent,
    CartComponent,
  },
  computed: {
    ...mapState(produceStore, ["categories"]),
  },

  methods: {
    ...mapActions(produceStore, ["getProducts"]),
  },

  mounted() {
    this.getProducts();
  },
};
</script>
