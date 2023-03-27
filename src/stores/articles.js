import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

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
          console.log(error);
        });
    },
    newArticles(data) {
      axios
        .post(`${VITE_APP_URL}/articles`, { data })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendArticle(state, i) {
      console.log(state, i);
      if (state) {
        let time = new Date().toLocaleDateString();
        console.log("新增文章");
        axios
          .post(`${VITE_APP_URL}/articles`, { ...i, addDate: time })
          .then(() => {
            console.log("新增成功");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        let time = new Date().toLocaleString();
        console.log("編輯文章");

        axios
          .put(`${VITE_APP_URL}/articles/${i.id}`, { ...i, editTime: time })
          .then(() => {
            console.log("編輯成功");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    delArticle(i) {
      axios
        .delete(`${VITE_APP_URL}/articles/${i.id}`)
        .then(() => {
          console.log("刪除成功");
        })
        .catch(() => {
          console.log(i);
        });
    },
  },
});
