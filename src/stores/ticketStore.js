import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

export default defineStore("check", {
  state: () => {
    return {
      ticketData: [
        {
          id: 1,
          type: "全票",
          content: "一般入園使用",
          qty: 0,
          price: 700,
        },
        {
          id: 2,
          type: "優待票",
          content: "國內在校學生證(不含社區、空中大學、交換學生證、學分班等)",
          qty: 0,
          price: 600,
        },
        {
          id: 3,
          type: "半票",
          content: "6歲以上、未滿18歲或國內65歲以上",
          qty: 0,
          price: 350,
        },
      ],
    };
  },
  getters: {},
  actions: {
    setCheck(userId, user, check) {
      let id = new Date().getTime();
      axios
        .post(`${VITE_APP_URL}/productOrders`, {
          userId,
          id,
          user,
          check,
        })
        .then(() => {
          this.checkId = id;
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
          this.ok = res.data;
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    },
  },
});
