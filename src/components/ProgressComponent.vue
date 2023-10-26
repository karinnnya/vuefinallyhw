<template>
  <div class="position-relative d-none d-md-block mb-5 mt-5">
    <div class="progress-bar">
      <div class="progress" ref="progress"></div>
    </div>
    <div class="position-absolute top-0 start-0 progimg" ref="progimg">
      <img
        src="../assets/images/progress3.png"
        style="width: 100px"
        class="progimg"
        alt=""
      />
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
  background-color: #88d1f5;
  position: absolute;
  top: 0;
  left: 0;
  transition: 2s;
}

.progimg {
  margin-top: -10px;
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
export default {
  methods: {
    progress50() {
      this.$refs.progress.classList.add("width50");
      this.$refs.progimg.classList.add("start-50");
    },
    progress100() {
      this.$refs.progress.classList.add("width100");
      this.$refs.progimg.classList.add("start-100");
    },
  },
};
</script>
