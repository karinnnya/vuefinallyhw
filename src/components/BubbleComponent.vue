<template>
  <div class="bubble bubble1"></div>
  <div class="bubble bubble2"></div>
  <div class="bubble bubble1" style="left: 15%; animation-delay: 1.2s"></div>
  <div class="bubble bubble2" style="left: 10%; animation-delay: 0.5s"></div>

  <div class="bubble bubble1" style="left: 95%"></div>
  <div class="bubble bubble2" style="left: 90%; animation-delay: 0.5s"></div>
  <div class="bubble bubble1" style="left: 85%; animation-delay: 1s"></div>
  <div class="bubble bubble2" style="left: 90%; animation-delay: 2s"></div>

  <div
    class="upIcon fixed-bottom d-none d-md-block"
    role="button"
    ref="upbtn"
    @click="gotoUp"
  >
    <h2 class="text-secondary fw-bold">\ U P ！ /</h2>
    <img src="../assets/images/23232111.png" alt="" style="width: 200px" />
  </div>
</template>

<style lang="scss">
.upIcon {
  left: 80%;
  bottom: -55px;
  transition: 0.5s;

  h2 {
    opacity: 0;
    transform: rotate(-20deg);
  }

  img {
    position: relative;
  }

  &:hover {
    bottom: -27px;

    h2 {
      opacity: 1;
    }
  }
}

.bubble {
  width: 50px;
  height: 50px;
  left: 5%;
  border-radius: 50%;
  position: fixed;
  bottom: -50px;
  /* 初始位置 */
  animation: float 3s ease-in-out infinite;
  overflow: visible;
}

.bubble1 {
  background-color: #155fb6;
}

.bubble2 {
  border: 2px solid #155fb6;
  animation-delay: 1s;
}

@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-600px);
    opacity: 0;
  }
}

@media (max-width: 992px) {
  .bubble {
    width: 30px;
    height: 30px;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },

  computed: {},
  methods: {
    gotoUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {},
};
</script>
