import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import Swal from "sweetalert2";

export default defineStore("articles", {
  state: () => {
    return {
      articles: [],
      newAticles: [],
      data: "",
    };
  },
  getters: {
    sortProducts: ({ datas }) => {
      return datas.sort((a, b) => a.price - b.price);
    },
  },
  actions: {
    getArticles() {
      return axios
        .get(`${VITE_APP_URL}/articles`)
        .then((res) => {
          this.articles = res.data.reverse();
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
    newArticles(data) {
      axios
        .post(`${VITE_APP_URL}/articles`, { data })
        .then(() => {})
        .catch((error) => {
          Swal.fire(error);
        });
    },

    sendArticle(state, i) {
      console.log(state, i);
      if (state) {
        let time = new Date().toLocaleDateString();
        axios
          .post(`${VITE_APP_URL}/articles`, { ...i, addDate: time })
          .then(() => {})
          .catch((error) => {
            Swal.fire(error);
          });
      } else {
        let time = new Date().toLocaleString();

        axios
          .put(`${VITE_APP_URL}/articles/${i.id}`, { ...i, editTime: time })
          .then(() => {})
          .catch((error) => {
            Swal.fire(error);
          });
      }
    },

    delArticle(i) {
      axios
        .delete(`${VITE_APP_URL}/articles/${i.id}`)
        .then(() => {})
        .catch((error) => {
          Swal.fire(error);
        });
    },
  },
});
