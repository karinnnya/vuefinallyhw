<template>
  <div class="row gy-3">
    <div
      class="col-md-4 col-12 rounded articles"
      v-for="temp in data"
      :key="temp.id"
    >
      <div
        class="card"
        style="height: 100%"
        role="button"
        @click="openarticles(temp)"
      >
        <div>
          <img
            :src="temp.imgurl"
            class="card-img-top img-fluid"
            style="height: 200px"
            alt="最新消息"
          />
        </div>
        <div class="card-body">
          <span
            :class="{
              'badge rounded-pill bg-primary': temp.kind === '活動消息',
              'badge rounded-pill bg-info': temp.kind === '園區公告',
              'badge rounded-pill bg-secondary': temp.kind === '線上商城',
            }"
          >
            {{ temp.kind }}</span
          >

          <h4 class="card-title text-truncate text-primary mt-1">
            {{ temp.title }}
          </h4>
          <p class="card-text text-truncate">{{ temp.content }}</p>

          <a role="button" class="text-black-50">了解更多</a>
        </div>
      </div>
    </div>
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
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div>
          <div>
            <img
              v-bind:src="article?.imgurl"
              class="card-img-top primary-image"
              alt="主圖"
              style="height: 400px"
            />
            <div class="p-4">
              <div class="d-flex justify-content-between">
                <p class="m-0">
                  <span
                    :class="{
                      'badge rounded-pill bg-primary':
                        article.kind === '活動消息',
                      'badge rounded-pill bg-info': article.kind === '園區公告',
                      'badge rounded-pill bg-secondary':
                        article.kind === '線上商城',
                    }"
                    >{{ article.kind }}</span
                  >
                </p>
                <p style="font-size: 10px">{{ article.addDate }}</p>
              </div>

              <h5 class="card-title">
                {{ article.title }}
              </h5>
              <hr />
              <p class="card-text lh-lg">{{ article.content }}</p>
              <div class="d-flex">
                <!-- {{ article }} -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import modalMixin from "../mixin/modalMixin";

export default {
  data() {
    return {
      article: {},
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mixins: [modalMixin],
  methods: {
    openarticles(temp) {
      this.modal.show();
      this.article = temp;
    },
  },
};
</script>
