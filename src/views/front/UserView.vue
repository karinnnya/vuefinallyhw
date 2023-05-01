<template>
  <div class="container pt-5">
    <div>
      <h2 class="text-center mb-3 mt-5">您好： {{ user }}</h2>
      <div class="mb-3 d-flex justify-content-between">
        <div>
          <button
            class="btn btn-outline-secondary me-2"
            :class="{ active: productMode }"
            @click="getProductCheck"
          >
            商品訂單
          </button>
          <button
            class="btn btn-outline-primary"
            @click="getTicketCheck"
            :class="{ active: !productMode }"
          >
            票券訂單
          </button>
        </div>
        <button class="btn btn-outline-info" type="button" @click="logout">
          登出
        </button>
      </div>

      <div style="display: block; overflow-x: auto; white-space: nowrap">
        <table class="table table-hover align-middle">
          <thead>
            <tr
              class="text-white align-middle"
              :class="{
                'bg-secondary': productMode,
                'bg-primary': !productMode,
              }"
            >
              <th col="1">{{ productMode ? "訂購日期" : "票券日期" }}</th>
              <th col="1">編號</th>
              <th col="1">金額</th>
              <th col="1">
                {{ productMode ? "訂單狀態" : "票券狀態" }}
              </th>
              <th col="1">詳細</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in check" :key="index">
            <tr v-if="productMode">
              <td scope="row">{{ item.checkTime }}</td>
              <td>{{ item.id }}</td>
              <td>{{ item.total }}</td>
              <td>{{ item.Status }}</td>
              <td class="">
                <BootstrapIcon
                  icon="zoom-in"
                  class="me-1"
                  size="2x"
                  @click="open(item)"
                  role="button"
                />
              </td>
            </tr>

            <tr v-else>
              <td>{{ item.checkTime }}</td>
              <td scope="row">{{ item.id }}</td>
              <td>{{ item.data.ticketTotle }}</td>
              <td>未使用</td>

              <td class="">
                <BootstrapIcon
                  icon="zoom-in"
                  class="me-1"
                  size="2x"
                  @click="open(item)"
                  role="button"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        ref="modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">訂單編號：{{ info.id }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="p-5">
              <div class="d-flex flex-column align-items-center">
                <h5 v-show="!productMode">票券QRcode</h5>
                <div>
                  <vue-qrcode
                    v-show="!productMode"
                    :value="qrcodeValue"
                    :color="{ dark: '#000000', light: '#ffffff' }"
                    type="image/png"
                  />
                </div>
              </div>
              <h5 class="text-center mt-3">訂單內容</h5>

              <table class="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">名稱</th>
                    <th scope="col">價格</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody v-if="productMode">
                  <tr v-for="i in info.data" :key="i.key">
                    <td>{{ i.product?.title }}</td>
                    <td>{{ i.product?.price }}</td>
                    <td>{{ i.qty }}</td>
                    <td>{{ i.product?.price * i.qty }}</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr v-for="i in info.data?.ticketOrder" :key="i.key + 1">
                    <td>{{ i.type }}</td>
                    <td>{{ i.price }}</td>
                    <td>{{ i.qty }}</td>
                    <td>{{ i.price * i.qty }}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <div class="text-end" v-if="productMode">
                  <div>
                    <p>總金額：{{ info.total }}元</p>
                    <p>訂單狀態：已付款</p>
                  </div>
                </div>
                <div class="text-end" v-else>
                  <p>總金額：{{ info.data?.ticketTotle }}元</p>
                  <p>票券狀態：未使用</p>
                </div>
              </div>
              <div v-show="productMode">
                <hr />
                <h5 class="text-center mt-3">收件人資料</h5>

                <p>訂單時間：{{ info.checkTime }}</p>
                <p>收件人姓名：{{ info.recipient?.name }}</p>
                <p>收件人電話：{{ info.recipient?.tel }}</p>
                <p>收件人地址：{{ info.recipient?.address }}</p>
                <p>訂單狀態：{{ info.Status }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="Object.values(check).length === 0" class="text-center">
      目前沒有訂單唷！
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixin/modalMixin";
import loginStore from "@/stores/loginStore.js";
import Swal from "sweetalert2";

import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import { mapActions } from "pinia";

export default {
  data() {
    return {
      qrcodeValue: "",

      productMode: true,
      check: [],
      info: {},
      user: {},
    };
  },
  mixins: [modalMixin],
  methods: {
    ...mapActions(loginStore, ["logout"]),

    open(i) {
      this.modal.show();
      this.info = i;
      this.qrcodeValue = String(i.id);
    },

    getTicketCheck() {
      this.productMode = false;
      this.check = [];

      axios
        .get(`${VITE_APP_URL}/ticketsOrders`)
        .then((res) => {
          const data = res.data;
          this.check = data.filter((item) => item.userId === this.userId);
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
    getProductCheck() {
      this.productMode = true;
      this.check = [];

      axios
        .get(`${VITE_APP_URL}/productOrders`)
        .then((res) => {
          const data = res.data;
          this.check = data.filter((item) => item.userId === this.userId);
        })
        .catch((error) => {
          Swal.fire(error);
        });
    },
  },
  mounted() {
    this.admin = localStorage.getItem("admin");
    this.user = localStorage.getItem("userName");
    this.userId = localStorage.getItem("userId");

    this.getProductCheck();
  },
};
</script>
