<template>
  <div class="container pt-5">
    <div class="loginView mt-5">
      <div class="w-50 p-5 text-white fw-bold" v-if="newUser">
        <h2 class="text-center fw-bold mb-3 mt-2">新會員註冊</h2>
        <Form v-slot="{ errors }" @submit="onSubmit(user)">
          <div>
            <div class="position-relative pb-3">
              <label for="name" class="form-label">姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                rules="required"
                v-model="user.userName"
                :class="{ 'is-invalid': errors.姓名 }"
              />

              <error-message
                name="姓名"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>

            <div class="position-relative pb-3">
              <label for="phone" class="form-label">電話</label>
              <Field
                id="phone"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="user.tel"
              />
              <error-message
                name="電話"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>

            <div class="position-relative pb-3">
              <label for="email" class="form-label">e-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="請輸入email"
                rules="required|email"
                v-model="user.email"
                :class="{ 'is-invalid': errors.email }"
              />
              <error-message
                name="email"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>

            <div class="position-relative pb-3">
              <label for="password" class="form-label">密碼</label>
              <Field
                id="password"
                name="密碼"
                type="password"
                class="form-control"
                placeholder="請輸入密碼"
                rules="required"
                v-model="user.password"
                :class="{ 'is-invalid': errors.密碼 }"
              />
              <error-message
                name="密碼"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>
          </div>

          <button type="onSubmit" class="btn btn-primary border">
            加入會員
          </button>
        </Form>

        <div></div>
      </div>
      <div
        class="p-5 text-white fw-bold w-50 h-100"
        style="transform: translate(100%, 0)"
        v-else
      >
        <h2 class="text-center fw-bold mb-3 mt-2">會員登入</h2>

        <div style="transform: translate(0, 60%)">
          <Form v-slot="{ errors }" @submit="onSubmit(user)">
            <div class="position-relative pb-3">
              <label for="email" class="form-label">e-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="請輸入email"
                rules="required|email"
                v-model="user.email"
                :class="{ 'is-invalid': errors.email }"
              />
              <error-message
                name="email"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>

            <div class="position-relative pb-3">
              <label for="password" class="form-label">密碼</label>
              <Field
                id="password"
                name="密碼"
                type="password"
                class="form-control"
                placeholder="請輸入密碼"
                rules="required"
                v-model="user.password"
                :class="{ 'is-invalid': errors.密碼 }"
              />
              <error-message
                name="密碼"
                class="invalid-tooltip top-0 end-0"
              ></error-message>
            </div>

            <button type="onSubmit" class="btn btn-primary border">
              會員登入
            </button>
          </Form>
        </div>
      </div>
      <div class="loginState" ref="box">
        <div
          v-if="newUser"
          class="position-relative loginBg"
          style="height: 100%"
        >
          <div class="loginText">
            <h4 class="fw-bold">已經有會員了</h4>
            <h5></h5>
            <button @click="remove" class="btn btn-primary">登入會員</button>
          </div>
        </div>
        <div v-else class="position-relative loginBg" style="height: 100%">
          <div class="loginText">
            <h4 class="fw-bold">還沒有會員嗎？</h4>
            <h5>趕快加入我們吧！</h5>
            <button @click="moveAdd" class="btn btn-primary">加入會員</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginStore from "@/stores/loginStore.js";
import { mapActions } from "pinia";
import { defineRule, Field, ErrorMessage, configure, Form } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import "vue-loading-overlay/dist/css/index.css";

defineRule("required", required);
defineRule("email", email);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale("zh_TW");

export default {
  data() {
    return {
      newUser: false,
      user: {
        userName: "",
        tel: "",
        email: "",
        password: "",
        admin: false,
      },
    };
  },
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    ErrorMessage,
  },
  computed: {},
  methods: {
    ...mapActions(loginStore, ["signup", "login"]),
    moveAdd() {
      this.$refs.box.classList.add("loginMove");
      this.newUser = true;
    },
    remove() {
      this.$refs.box.classList.remove("loginMove");
      this.newUser = false;
    },

    onSubmit(user) {
      if (this.newUser) {
        // this.$refs.box.classList.remove('loginMove')
        this.signup(user);
      } else {
        this.login(user);
      }
    },

    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需為正確的電話號碼";
    },
  },
};
</script>

<style lang="scss">
.loginView {
  border-radius: 25px;
  position: relative;
  background: url(../../assets/images/login.jpg) center no-repeat;
  background-size: cover;
  display: flex;
  height: 700px;
}

.loginState {
  position: absolute;
  width: 50%;
  height: 100%;
  transition: 0.5s;

  .loginBg::before {
    content: "";
    display: block;
    background: white;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    position: absolute;
  }

  .loginText {
    position: relative;
    min-height: 100%;
    text-align: center;
    transform: translate(0, 40%);
  }
}

.loginMove {
  transform: translate(100%, 0);
}
</style>
