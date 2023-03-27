import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

export default defineStore("check", {
  state: () => {
    "";
  },
  mutations: {
    setCkeckId(state, payload) {
      state.ckeckId = payload;
    },
  },
  getters: {},
  actions: {
    setCheck(userId, user, data) {
      let id = new Date().getTime();
      axios
        .post(`${VITE_APP_URL}/productOrders`, {
          userId,
          id,
          user,
          data,
          Status: "未付款",
        })
        .then(() => {
          console.log("訂單新增成功");
          this.checkId = id;
          console.log(this.checkId);
        })

        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },

    getCheck(id) {
      axios
        .get(`${VITE_APP_URL}/productOrders/${id}`)
        .then((res) => {
          console.log(res.data);
          this.ok = res.data;
          console.log(this.ok);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },
  },
});
