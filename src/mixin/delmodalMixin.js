import { Modal } from "bootstrap";

export default {
  methods: {
    showModal() {
      this.delmodal.show();
    },
    hideModal() {
      this.delmodal.hide();
    },
  },
  mounted() {
    this.delmodal = new Modal(this.$refs.delmodal);
  },
};
