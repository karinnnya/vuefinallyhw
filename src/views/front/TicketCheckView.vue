<template>
  <div class="container pt-5">
    <TitleComponent
      title="票券訂購"
      class="text-center mt-5 mb-5"
    ></TitleComponent>

    <div class="position-relative d-none d-md-block mb-5 mt-5">
      <div class="progress-bar">
        <div class="progress" ref="progress"></div>
      </div>
      <div class="position-absolute top-0 start-0 progimg" ref="progimg">
        <img
          src="../../assets/images/progress3.svg"
          style="width: 150px"
          class="progimg"
          alt=""
        />
      </div>
    </div>

    <div v-if="!pay">
      <!-- 選擇日期跟票券 -->
      <div v-if="state" class="position-relative">
        <h4 class="fw-bold text-primary">
          <BootstrapIcon icon="calendar4-event " class="me-1" />選擇日期：
        </h4>

        <VueDatePicker
          v-model="selectedDate"
          :min-date="minDate"
          :max-date="maxDate"
          :enable-time-picker="false"
          auto-apply
        ></VueDatePicker>

        <h4 class="mt-3 fw-bold text-primary">
          <BootstrapIcon icon="ticket-perforated-fill" class="me-1" />選擇票券：
        </h4>
        <table class="table">
          <thead>
            <tr class="bg-primary text-white">
              <th scope="col">票種</th>
              <th scope="col">價格</th>
              <th scope="col">數量</th>
              <th scope="col">票種規定</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in ticketData" :key="item.id">
              <th scope="row">{{ item.type }}</th>
              <td>{{ item.price }}</td>
              <td>
                <select
                  class="form-select-sm"
                  v-model="item.qty"
                  @change="qtyTicket(item)"
                >
                  <option
                    :value="index"
                    v-for="(i, index) in 20"
                    :key="index"
                    :selected="i === 0"
                  >
                    {{ index }}
                  </option>
                </select>
              </td>
              <td>{{ item.content }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-end">總金額：{{ total }} 元</p>

        <button
          class="btn btn-primary text-white position-absolute start-50 translate-middle-x"
          @click="checkUser"
        >
          前往訂票
        </button>
      </div>
      <!-- 確認票券跟付款方式 -->

      <div class="row" v-else>
        <div class="col-md-6 col-12">
          <div class="">
            <h5 class="bg-primary p-3 text-white">訂單內容</h5>

            <p>票券日期：{{ selectedDate.toLocaleDateString() }}</p>
            <hr />
            <div>
              <p>票券內容：</p>
              <p v-for="i in ticketOrder" :key="i.type">
                {{ i.type }}：{{ i.qty }}張
              </p>
            </div>
            <hr />
            <p>總金額：{{ total }}元</p>
            <p></p>
            <hr />
            <p></p>
          </div>
        </div>

        <div class="col-md-6 col-12">
          <div class="">
            <h5 class="bg-primary p-3 text-white">付款方式</h5>
            <div>
              <div>
                <input
                  id="pay_1"
                  type="radio"
                  name="ticketPay"
                  value="信用卡"
                  v-model="ticketPay"
                  checked
                />
                <label for="pay_1">
                  <p class="ps-2">信用卡</p>
                </label>
              </div>
              <div>
                <input
                  id="pay_2"
                  type="radio"
                  name="ticketPay"
                  value="ATM代碼轉帳"
                  v-model="ticketPay"
                />
                <label for="pay_2">
                  <p class="ps-2">ATM代碼轉帳</p>
                </label>
              </div>
              <div>
                <input
                  id="pay_3"
                  type="radio"
                  name="ticketPay"
                  value="超商代碼繳費"
                  v-model="ticketPay"
                />
                <label for="pay_3">
                  <p class="ps-2">超商代碼繳費</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            class="btn btn-primary position-absolute start-50 translate-middle-x"
            @click="setTicketOrder"
          >
            按我付款
          </button>
        </div>
      </div>
    </div>
    <!-- 確認票券跟付款方式 -->

    <div class="text-center text-primary" v-else>
      <h4 class="fw-bold">
        已收到您的訂單 <br />
        期待您的到來
      </h4>
      <BootstrapIcon icon="clipboard-check-fill" class="me-1" size="5x" />
    </div>
  </div>
</template>

<style lang="scss">
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  position: relative;
  overflow: hidden;
}

.progress {
  width: 0%;
  height: 100%;
  background-color: #155fb6;
  position: absolute;
  top: 0;
  left: 0;
  transition: 2s;
}

.progimg {
  margin-top: -30px;
  margin-left: -50px;
  transition: 2s;
}

.width50 {
  width: 50%;
}

.width100 {
  width: 100%;
}

.ticketCard {
  h5 {
    border-radius: 25px 25px 0 0;
    padding: 15px;
    color: white;
  }

  border: 3px solid #155fb6;
  border-radius: 30px 30px 25px 25px;
}
</style>

<script>
import ticketStore from "@/stores/ticketStore.js";
import TitleComponent from "@/components/TitleComponent.vue";

import axios from "axios";
import Swal from "sweetalert2";
const { VITE_APP_URL } = import.meta.env;
import { mapState } from "pinia";

import { addDays, endOfMonth } from "date-fns";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      state: true,
      pay: false,
      ticketDate: "",
      ticketPay: "",
      ticketOrder: [],
      selectedDate: addDays(new Date(), 1),
      minDate: addDays(new Date(), 1),
      maxDate: endOfMonth(addDays(new Date(), 30)),
    };
  },
  computed: {
    ...mapState(ticketStore, ["loading", "ticketData"]),

    total() {
      return this.ticketOrder.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
  components: {
    VueDatePicker,
    TitleComponent,
  },
  methods: {
    qtyTicket(item) {
      const ticket = this.ticketOrder.find((i) => i.type === item.type);

      if (ticket) {
        ticket.qty = item.qty;
      } else {
        this.ticketOrder.push(item);
      }
    },
    checkUser() {
      if (!this.userId) {
        Swal.fire({
          title: "請先登入會員",
          icon: "error",
          html: "",
          confirmButtonText: "我知道了",
          confirmButtonAriaLabel: "我知道了",

          // 自訂按鈕 class
          customClass: {
            confirmButton: "btn btn-outline-info",
          },
          buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）
        });
      } else {
        if (!Object.values(this.ticketOrder).length) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "請選擇票券",
            showConfirmButton: false,
            timer: 700,
          });
        } else {
          this.state = false;
          this.$refs.progress.classList.add("width50");
          this.$refs.progimg.classList.add("start-50");
        }
      }
    },
    setTicketOrder() {
      this.$refs.progress.classList.add("width100");
      this.$refs.progimg.classList.add("start-100");
      let id = new Date().getTime();
      this.pay = true;
      let data = {
        ticketOrder: this.ticketOrder,
        ticketPay: this.ticketPay,
        ticketTotle: this.total,
      };

      axios
        .post(`${VITE_APP_URL}/ticketsOrders`, {
          id,
          selectedDate: this.selectedDate.toLocaleDateString(),
          checkTime: new Date().toLocaleString(),
          userId: this.userId,
          data,
        })
        .then(() => {
          this.checkId = id;
          this.ticketOrder = [];
        })

        .catch(() => {
          Swal.fire("發生錯誤請稍後再試");
        });
    },
  },
  mounted() {
    this.userId = localStorage.getItem("userId");
  },
};
</script>
