<template>
  <table class="table mt-4 table-hover text-center align-middle">
    <thead>
      <tr>
        <th col="1">訂單日期</th>
        <th col="1">訂單編號</th>
        <th col="1">訂單金額</th>
        <th col="1">會員編號</th>
        <th col="1">訂單狀態</th>
        <th col="1">狀態編輯</th>
        <th col="1">詳細</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in productOrders" :key="item.id">
        <td>{{ item.checkTime }}</td>
        <td>{{ item.id }}</td>

        <td>{{ item.total }}</td>
        <td>{{ item.userId }}</td>
        <td>{{ item.Status }}</td>

        <td>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="checkRevise(item)"
          >
            編輯
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm"
            @click="openDe(item)"
          >
            詳細資訊
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- 訂單內容 -->
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">
            <span>訂單編號：{{ checkInfo.id }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5 class="text-center">訂單內容</h5>
          <div>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th col="1">名稱</th>
                  <th col="1">金額</th>
                  <th col="1">數量</th>
                  <th col="1">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in checkInfo.data" :key="i.id">
                  <td>{{ i.product.title }}</td>
                  <td>{{ i.product.price }}</td>
                  <td>{{ i.qty }}</td>
                  <td>{{ i.qty * i.product.price }}</td>
                </tr>
              </tbody>
            </table>
            <p>總金額：</p>
          </div>
          <h5 class="text-center">訂單資料</h5>
          <p>訂購人姓名： {{ member.userName }}</p>
          <p>訂購人電話： {{ member.tel }}</p>
          <p>收件人姓名： {{ checkInfo.recipient?.name }}</p>
          <p>收件人姓名： {{ checkInfo.recipient?.tel }}</p>
          <p>收件人姓名： {{ checkInfo.recipient?.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import modalMixin from "../../mixin/modalMixin";

export default {
  data() {
    return {
      checkInfo: {},
      productOrders: [],
      member: {},
      state: true,
    };
  },
  mixins: [modalMixin],

  methods: {
    openDe(item) {
      this.checkInfo = item;
      console.log(item);
      this.modal.show();
      this.getUser(item.userId);
      this.selectedStatus = { ...item.Status };
    },

    async checkRevise(i) {
      const { value: selectedStatus } = await Swal.fire({
        title: "修改訂單狀態",
        input: "select",
        inputOptions: {
          訂單狀態: {
            已付款: "已付款",
            已出貨: "已出貨",
            已取消: "已取消",
          },
        },
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            axios
              .patch(`${VITE_APP_URL}/productOrders/${i.id}`, { Status: value })
              .then(() => {
                console.log(this.selectedStatus);
                this.loading = "";
                this.modal.hide();
                this.getChecks();
              })
              .catch(() => {});
            resolve();
          });
        },
      });

      if (selectedStatus) {
        Swal.fire(`訂單狀態已修改: ${selectedStatus}`);
      }
    },

    getUser(i) {
      axios
        .get(`${VITE_APP_URL}/users/${i}`)
        .then((res) => {
          this.member = res.data;
        })
        .catch(() => {});
    },

    getChecks() {
      axios
        .get(`${VITE_APP_URL}/productOrders`)
        .then((res) => {
          this.productOrders = res.data;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getChecks();
  },
};
</script>
