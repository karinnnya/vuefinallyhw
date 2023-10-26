import produceStore from "../stores/produceStore.js";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_APP_URL } = import.meta.env;
import { defineStore } from "pinia";
// const userId = localStorage.userId;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default defineStore("cart", {
  state: () => ({
    cart: [],
    loading: "",
    products: [],
    check: [],
    // index:'',
  }),

  actions: {
    getCart(userId) {
      if (userId) {
        return axios
          .get(`${VITE_APP_URL}/cart/${userId}`)
          .then((res) => {
            this.cart = res.data.data;
          })
          .catch((error) => {
            Swal.fire(error);

            axios
              .post(`${VITE_APP_URL}/cart`, { id: userId, userId, data: [] })
              .then(() => {})
              .catch((error) => {
                Swal.fire(error);

                this.getCart();
              });
          });
      } else {
        return;
      }
    },

    addToCart(userId, productId, qty = 1) {
      const currenCart = this.cart.find((i) => i.productId === productId);

      Toast.fire({
        icon: "success",
        title: "成功加入購物車",
        iconColor: "#88D1F5",
      });

      if (currenCart) {
        currenCart.qty += qty;
        this.upCart(userId);
      } else {
        const id = this.cart.length + 1;

        const temp = {
          id,
          productId: productId,
          qty,
        };
        this.cart.push(temp);
        this.upCart(userId);
      }
    },

    delCart(userId, item) {
      const index = this.cart.findIndex((i) => i.id === item);
      this.cart.splice(index, 1);
      this.upCart(userId);
    },

    setCartQty(userId, item) {
      this.loading = item.id;
      const currenCart = this.cart.find((i) => i.productId === item.productId);
      currenCart.qty = item.qty;
      this.upCart(userId);
    },

    upCart(userId) {
      axios
        .patch(`${VITE_APP_URL}/cart/${userId}`, { data: this.cart })
        .then(() => {
          this.loading = "";
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },

    delCartAll(userId) {
      this.cartList.carts = [];
      axios
        .patch(`${VITE_APP_URL}/cart/${userId}`, {
          data: this.cartList.carts,
        })
        .then(() => {})
        .catch((error) => {
          Swal.fire(error);
        });
    },

    checkCart(temp, total) {
      this.check = JSON.parse(JSON.stringify(temp));
      this.total = total;
    },
  },

  getters: {
    cartList: ({ cart }) => {
      if (cart === undefined) {
        return;
      } else {
        const { products } = produceStore();

        const carts = cart.map((i) => {
          const obj = products.filter((product) => product.id === i.productId);

          let product = obj[0];

          return {
            ...i,
            product,
          };
        });

        return {
          carts,
        };
      }
    },
  },
});
