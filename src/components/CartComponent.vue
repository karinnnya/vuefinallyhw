<template>
  <div class="col-12 text-center" v-if="!cartList.carts.length">
    <h4>購物車沒有任何品項</h4>
  </div>
  <div v-else>
    <p role="button" @click="delCartAll(this.userId)" style="display: inline">
      清空購物車
    </p>
    <hr />

    <div class="row mb-4" v-for="item in cartList.carts" :key="item.id">
      <div class="col-2">
        <img
          :src="item.product?.imgUrls"
          class="table-image"
          alt="產品圖片"
          style="width: 50px"
        />
      </div>
      <div class="col-3 text-truncate">{{ item.product?.title }}</div>
      <div class="col-2">{{ item.product?.price }}</div>
      <div class="col-2">
        <select
          class="form-select-sm"
          v-model="item.qty"
          @change="setCartQty(this.userId, item)"
          :disabled="loading === item.id"
        >
          <option :value="i" v-for="i in 20" :key="i + 123">{{ i }}</option>
        </select>
      </div>
      <div class="col-2">{{ item.qty * item.product?.price }}</div>
      <div class="col-1" role="button">
        <BootstrapIcon
          icon="trash-fill"
          class="me-1"
          @click.prevent="delCart(this.userId, item.id)"
        />
      </div>
    </div>
    <hr />
    <h5 class="text-end">總金額：{{ totalPrice }} 元</h5>
    <div style="margin-left: 75%; margin-top: 10%">
      <button
        type="button"
        class="btn btn-secondary text-white"
        @click="goCheck"
      >
        前往結帳
      </button>
    </div>
  </div>
  <div></div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      cart: [],
    };
  },

  computed: {
    ...mapState(cartStore, ["loading", "index", "cartList", "check", "total"]),
    totalPrice() {
      let total = 0;
      this.cartList.carts.forEach((cart) => {
        total += cart.qty * cart.product?.price;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "delCart",
      "setCartQty",
      "getCart",
      "delCartAll",
      "checkCart",
      "upCart",
    ]),
    goCheck() {
      this.checkCart(this.cartList.carts, this.totalPrice);
      this.$router.push("/check");
    },
  },
  mounted() {
    this.userId = localStorage.getItem("userId");

    this.getCart(this.userId);
  },
};
</script>
