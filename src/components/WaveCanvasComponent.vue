<template>
  <canvas ref="canvas" class="cover-fit"></canvas>
</template>

<style lang="scss">
#wave {
  /*   width: 100%; */
  height: 100%;
  /*   position: absolute; */
  top: 0;
  /*   bottom:0; */
  left: 0;
}

.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleY(-1);
}
</style>

<script>
export default {
  methods: {
    drawWave(offset) {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      const wave = {
        y: canvas.height / 2,
        length: 0.01,
        amplitude: 50,
        frequency: 0.01,
      };

      const fillColor = { r: 0, g: 119, b: 190, a: 0.5 };
      const strokeColor = { r: 0, g: 119, b: 190, a: 1 };

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
          i,
          wave.y +
            Math.sin(i * wave.length + offset) *
              wave.amplitude *
              Math.sin(offset * wave.frequency)
        );
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = `rgba(${fillColor.r},${fillColor.g},${fillColor.b},${fillColor.a})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${strokeColor.r},${strokeColor.g},${strokeColor.b},${strokeColor.a})`;
      ctx.stroke();
    },

    update() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.drawWave(Date.now() * 0.001);

      requestAnimationFrame(this.update);
    },

    start() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      window.addEventListener("resize", () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      });

      this.update();
    },

    stop() {
      cancelAnimationFrame(this.update);
    },
  },

  mounted() {
    this.start();
  },

  updated() {
    this.start();
  },

  beforeUnmount() {
    this.stop();
  },
};
</script>
