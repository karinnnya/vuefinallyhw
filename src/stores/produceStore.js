import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

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
        .catch((error) => {
          console.log(error);
        });
    },
    sendProduct(newProd, i) {
      console.log(newProd, i);
      if (newProd) {
        let time = new Date().toLocaleDateString();
        console.log("新增產品");
        axios
          .post(`${VITE_APP_URL}/products`, { ...i, addDate: time })
          .then(() => {
            console.log("新增成功");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        let time = new Date().toLocaleString();
        console.log("編輯產品");

        axios
          .put(`${VITE_APP_URL}/products/${i.id}`, { ...i, editTime: time })
          .then(() => {
            console.log("編輯成功");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    delProduct(i) {
      axios
        .delete(`${VITE_APP_URL}/products/${i.id}`)
        .then(() => {
          console.log("刪除成功");
        })
        .catch((error) => {
          console.log(i);

          console.log(error);
        });
    },

    group() {
      const array = this.products.map((item) => item.group);
      this.categories = [...new Set(array)];
    },
  },
});
