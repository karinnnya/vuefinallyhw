import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import Swal from "sweetalert2";

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
          this.checkId = id;
        })

        .catch((error) => {
          Swal.fire(error);
        });
    },

    getCheck(id) {
      axios
        .get(`${VITE_APP_URL}/productOrders/${id}`)
        .then((res) => {
          this.ok = res.data;
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
  },
});
