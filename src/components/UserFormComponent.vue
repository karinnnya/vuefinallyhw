<!-- eslint-disable vue/require-valid-default-prop -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="">
    <div>
      <div></div>

      <div>
        <Form v-slot="{ errors }" @submit="onSubmit">
          <div>
            <label for="phone" class="form-label">姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              placeholder="請輸入姓名"
              rules="required"
              v-model="recipient.name"
              :class="{ 'is-invalid': errors.姓名 }"
            />
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div>
            <label for="phone" class="form-label">e-mail</label>

            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              placeholder="請輸入email"
              v-model="recipient.email"
              :class="{ 'is-invalid': errors.email }"
            />

            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div>
            <label for="phone" class="form-label">電話</label>
            <Field
              id="phone"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              v-model="recipient.phone"
            />
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <button type="onSubmit" class="btn btn-secondary text-white mt-3">
            建立訂單
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineRule, Field, ErrorMessage, configure } from "vee-validate";
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
    return {};
  },
  props: {
    recipient: {
      type: Object,
      default: function () {
        return {};
      },
    },
    cartList: {
      type: Object,
      default: function () {
        return {};
      },
    },
    recipientCheck: {
      type: Boolean,
      default: function () {
        // eslint-disable-next-line vue/require-valid-default-prop
        return {};
      },
    },
  },

  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit() {
      this.userCheck = true;
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需為正確的電話號碼";
    },

    checkUser() {
      this.setCheck(this.userId, this.user, this.check);
    },
    getCheck(i) {
      this.setCkeckId(i);
    },
  },
  mounted() {
    this.userId = localStorage.getItem("userId");
  },
};
</script>
