<template>
  <div class="container pt-5">
    <TitleComponent
      title="線上商城結帳"
      class="text-center mt-5 mb-5"
    ></TitleComponent>

    <ProgressComponent ref="progressBarRef" />

    <div class="row" v-if="!checkOk">
      <div class="col-12 col-md-7">
        <table class="table align-middle">
          <thead class="bg-secondary text-white">
            <tr>
              <th width="120">圖片</th>
              <th width="200">商品</th>
              <th width="120">單價</th>
              <th width="150">數量</th>
              <th width="150">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in this.cartList.carts" :key="item.id">
              <td>
                <img
                  :src="item.product?.imgUrls"
                  class="table-image"
                  alt="產品圖片"
                  style="width: 100px"
                />
              </td>
              <td>{{ item.product?.title }}</td>

              <td>{{ item.product?.price }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.qty * item.product?.price }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-end">總金額： {{ total }} 元</p>
      </div>

      <div class="col-12 col-md-4 offset-md-1">
        <div class="userForm border-secondary border border-4">
          <h5 class="bg-secondary text-white p-3">收件者資料</h5>

          <div class="p-3">
            <div v-if="!recipientCheck">
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
                  <error-message
                    name="姓名"
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
                    v-model="recipient.tel"
                    :rules="isPhone"
                  />
                  <error-message
                    name="電話"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div>
                  <label for="address" class="form-label">收件地址</label>

                  <Field
                    id="address"
                    name="地址"
                    type="address"
                    class="form-control"
                    placeholder="請輸入地址"
                    v-model="recipient.address"
                    :class="{ 'is-invalid': errors.地址 }"
                    rules="required"
                  />

                  <error-message
                    name="地址"
                    class="invalid-feedback"
                  ></error-message>
                </div>
                <button
                  type="onSubmit"
                  class="btn btn-secondary text-white mt-3"
                >
                  建立訂單
                </button>
              </Form>
            </div>

            <div v-else>
              <p>姓名： {{ recipient.name }}</p>
              <p>電話： {{ recipient.tel }}</p>
              <p>地址： {{ recipient.tel }}</p>
              <p></p>
              <button
                type="onSubmit"
                class="btn btn-secondary text-white mt-3"
                @click="setCheck"
              >
                前往付款
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center text-secondary" v-else>
      <h4>
        已收到您的訂單 <br />
        非常感謝您
      </h4>
      <BootstrapIcon icon="box-seam-fill" class="me-1" size="5x" />
    </div>
  </div>
</template>

<style lang="scss">
.userForm {
  h5 {
    border-radius: 25px 25px 0 0;
  }

  border-radius: 30px 30px 25px 25px;
}
</style>
<script>
// 表單
import { defineRule, Field, ErrorMessage, configure, Form } from "vee-validate";
import { required } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import Swal from "sweetalert2";

defineRule("required", required);
// defineRule('email', email)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale("zh_TW");
//

import TitleComponent from "@/components/TitleComponent.vue";
import ProgressComponent from "@/components/progressComponent.vue";
import cartStore from "@/stores/cartStore.js";
import { mapState, mapActions } from "pinia";

import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      recipientCheck: false,
      checkOk: false,
      recipient: {
        name: "",
        tel: "",
        address: "",
      },
    };
  },
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    TitleComponent,
    ProgressComponent,
    Field,
    ErrorMessage,
  },

  computed: {
    ...mapState(cartStore, ["cartList", "total"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart", "delCartAll"]),
    setCheck() {
      this.checkOk = true;
      this.$nextTick(() => {
        this.$refs.progressBarRef.progress100();
      });
      let data = this.cartList.carts;
      let id = new Date().getTime();
      axios
        .post(`${VITE_APP_URL}/productOrders`, {
          id,
          checkTime: new Date().toLocaleString(),
          userId: this.userId,
          recipient: this.recipient,
          data,
          total: this.total,
          Status: "已付款",
        })
        .then(() => {
          this.delCartAll(this.userId);
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
    onSubmit() {
      this.recipientCheck = true;
      this.$nextTick(() => {
        this.$refs.progressBarRef.progress50();
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需為正確的電話號碼";
    },
  },
  mounted() {
    this.userId = localStorage.getItem("userId");
  },
};
</script>
