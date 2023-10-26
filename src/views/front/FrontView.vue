<template>
  <header :class="headerClass" class="p-1 fixed-top">
    <nav class="navbar-expand-lg navbar navbar-dark">
      <div class="container d-flex justify-content-between">
        <div>
          <router-link class="nav-link" to="/">
            <img
              src="../../assets/images/LOGO2.png"
              alt="LOGO"
              style="width: 50px"
            />
          </router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item text-end">
              <router-link class="nav-link text-white" to="/products"
                >線上商城</router-link
              >
            </li>
            <li class="nav-item text-end">
              <router-link class="nav-link text-white" to="/articles"
                >園區消息</router-link
              >
            </li>
            <li class="nav-item mb-3 mb-lg-0 text-end">
              <router-link class="nav-link text-white" to="/ticket"
                >票券訂購</router-link
              >
            </li>
            <li class="nav-item text-end">
              <router-link
                class="btn btn-info text-white rounded-pill"
                :to="loginLink"
              >
                {{ loginText }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer
    class="mt-5"
    style="
      background-image: url('https://i.imgur.com/clxhMmV.png');
      height: 500px;
    "
  >
    <div
      class="text-center text-white position-relative start-50 translate-middle"
      style="top: 75%"
    >
      <h4>{{ $t("title.statement") }}</h4>
      <p>
        This website is for personal use of individual works only <br />
        and is not intended for commercial purposes.
      </p>
      <div class="d-inline-flex">
        <p @click="switchToChinese" role="button">繁體中文｜</p>
        <p @click="switchToEJp" role="button">日本語</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
header {
  transition: background-color 0.5s;
}

.nav-item > .nav-link.router-link-active {
  border-bottom: 2px solid #ff6770;
}
</style>

<script>
import { RouterView } from "vue-router";
import loginStore from "@/stores/loginStore.js";
import { mapActions, mapState } from "pinia";
import { Collapse } from "bootstrap";

export default {
  data() {
    return {
      headerClass: "bg-transparent p-3 text-white",
      isTransparent: true,
    };
  },
  components: {
    RouterView,
  },
  created() {
    this.setHeaderClass();
  },
  methods: {
    ...mapActions(loginStore, ["updateLoginStatus"]),
    switchToEJp() {
      this.$i18n.locale = "jp";
    },
    switchToChinese() {
      this.$i18n.locale = "zh-TW";
    },
    setHeaderClass() {
      const currentRoute = this.$route.path;
      if (currentRoute === "/") {
        // this.headerClass = 'bg-transparent  p-3 text-white fixed-top';
        this.headerClass = this.isTransparent
          ? "bg-transparent text-info "
          : "bg-primary text-white ";
      } else {
        this.headerClass = "bg-primary text-white";
      }
    },
    handleScroll() {
      this.isTransparent = window.scrollY < 50;
      this.setHeaderClass();
    },
  },
  watch: {
    $route() {
      this.setHeaderClass();
    },
  },
  computed: {
    ...mapState(loginStore, ["userId", "admin"]),

    loginLink() {
      if (this.userId) {
        if (this.admin) {
          return "/admin/articles";
        } else {
          return "/user";
        }
      } else {
        return "/login";
      }
    },
    loginText() {
      return this.userId
        ? this.admin
          ? "進入後台"
          : "會員中心"
        : "登入｜註冊";
    },
  },
  // beforeUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  mounted() {
    this.updateLoginStatus();
    window.addEventListener("scroll", this.handleScroll);

    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarNav");
    const bsCollapse = new Collapse(menuToggle, {
      toggle: false,
    });
    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        bsCollapse.toggle();
      });
    });
  },
};
</script>
