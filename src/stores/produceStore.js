import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import Swal from "sweetalert2";

export default defineStore("produceStore", {
  state: () => {
    return {
      products: [],
      allPage: "",
      categories: [],
    };
  },
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price);
    },
  },

  actions: {
    getProducts() {
      return axios
        .get(`${VITE_APP_URL}/products`)
        .then((res) => {
          this.products = res.data;

          this.group();
        })
        .catch(() => {
          Swal.fire("取得錯誤");
        });
    },
    sendProduct(newProd, i) {
      console.log(newProd, i);
      if (newProd) {
        let time = new Date().toLocaleDateString();

        axios
          .post(`${VITE_APP_URL}/products`, { ...i, addDate: time })
          .then(() => {})
          .catch((error) => {
            Swal.fire(error);
          });
      } else {
        let time = new Date().toLocaleString();

        axios
          .put(`${VITE_APP_URL}/products/${i.id}`, { ...i, editTime: time })
          .then(() => {})
          .catch((error) => {
            Swal.fire(error);
          });
      }
    },

    delProduct(i) {
      axios
        .delete(`${VITE_APP_URL}/products/${i.id}`)
        .then(() => {})
        .catch((error) => {
          Swal.fire(error);
        });
    },

    group() {
      const array = this.products.map((item) => item.group);
      this.categories = [...new Set(array)];
    },
  },
});
