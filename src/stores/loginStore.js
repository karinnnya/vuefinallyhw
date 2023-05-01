import { defineStore } from "pinia";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

import router from "../router";

import Swal from "sweetalert2";

export default defineStore("login", {
  state: () => {
    return {
      allUser: [],
      userId: "",
      admin: "",
    };
  },
  getters: {},
  actions: {
    getAllUser() {
      axios
        .get(`${VITE_APP_URL}/users`)
        .then(() => {
          this.allUser = this.res;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
    signup(i) {
      axios
        .post(`${VITE_APP_URL}/users`, {
          userName: i.userName,
          tel: i.tel,
          email: i.email,
          password: i.password,
          admin: false,
        })
        .then(() => {
          console.log("會員新增成功");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "成功加入會員",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          Swal.fire({
            title: "此email已被使用",
            icon: "error",
            html: "",
            confirmButtonText: "我知道了",
            confirmButtonAriaLabel: "我知道了",

            // 自訂按鈕 class
            customClass: {
              confirmButton: "btn btn-outline-info",
            },
            buttonsStyling: false,
          });
        });
    },
    updateLoginStatus() {
      this.userId = localStorage.userId;
      this.admin = localStorage.admin ? JSON.parse(localStorage.admin) : {};
    },

    login(i) {
      axios
        .post(`${VITE_APP_URL}/login`, {
          email: i.email,
          password: i.password,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.user.id);
          localStorage.setItem("userName", res.data.user.userName);
          localStorage.setItem("admin", res.data.user.admin);

          this.updateLoginStatus();
          router.push("/");
        })

        .catch(() => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "帳戶密碼錯誤，請重新確認",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    },
    logout() {
      localStorage.clear();
      this.updateLoginStatus();
      router.push("/");
    },
  },
});
