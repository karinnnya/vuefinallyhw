<template>
  <div class="col-12 text-center" v-if="!cartList.carts.length">
    <h4>購物車沒有任何品項</h4>
  </div>
  <div v-else>
    <p role="button" @click="delCartAll(this.userId)" style="display: inline">
      清空購物車
    </p>
    <hr />

    <table class="table align-middle table-borderless">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="item in cartList.carts" :key="item.id">
        <tr>
          <td>
            <img
              :src="item.product?.imgUrls"
              class="table-image col-2"
              alt="產品圖片"
              style="width: 50px"
            />
          </td>
          <td>{{ item.product?.title }}</td>

          <td>{{ item.product?.price }}</td>
          <td>
            <select
              class="form-select-sm"
              v-model="item.qty"
              @change="setCartQty(this.userId, item)"
              :disabled="loading === item.id"
            >
              <option :value="i" v-for="i in 20" :key="i + 123">{{ i }}</option>
            </select>
          </td>
          <td>{{ item.qty * item.product?.price }}</td>
          <td role="button">
            <BootstrapIcon
              icon="trash-fill"
              class="me-1"
              @click.prevent="delCart(this.userId, item.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>

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
