<template>
  <div class="home" style="position: relative; overflow: hidden; height: 110%">
    <div
      class="position-absolute start-50 translate-middle scaling-container"
      style="top: 45%"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <img src="../../assets/images/LOGO2.png" alt="" class="homeLogo" />
      <div class="wavy d-flex justify-content-around">
        <h2 style="--i: 1">歡</h2>
        <h2 style="--i: 2">迎</h2>
        <h2 style="--i: 3">光</h2>
        <h2 style="--i: 4">臨</h2>
        <h2 style="--i: 5">水</h2>
        <h2 style="--i: 6">遊</h2>
        <h2 style="--i: 7">館</h2>
      </div>
    </div>
    <video
      autoplay
      muted
      loop
      playsinline
      style="object-fit: fill; width: 100%; height: 100%"
    >
      <source src="/src/assets/images/bgv.mp4" type="video/mp4" />
    </video>
    <div>
      <svg
        class="homeSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFFFFF"
          fill-opacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,261.3C480,277,600,267,720,240C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>

  <div class="container">
    <div class="position-relative homeInfo" style="padding: 40px">
      <div class="homeImg">
        <img
          class="img-fluid position-absolute titleBubble"
          style="width: 20%"
          src="../../assets/images/bubble.svg"
          alt=" 圖片 "
        />
        <img
          class="img-fluid position-absolute top-50 end-0 titleBubble2"
          src="../../assets/images/bubble2.svg"
          alt=" 圖片 "
        />
        <img
          class="img-fluid position-absolute end-0 fish"
          src="../../assets/images/fish-2.svg"
          alt=" 圖片 "
        />
        <img
          class="img-fluid position-absolute top-0 start-0 turtle"
          src="../../assets/images/fish-4.svg"
          alt=" 圖片 "
        />
        <img
          class="img-fluid position-absolute bottom-0 start-0 octopus"
          src="../../assets/images/fish-3.svg"
          alt=" 圖片 "
        />
        <img
          class="shark img-fluid position-absolute"
          src="../../assets/images/fish-1.svg"
          alt=" 圖片 "
        />
      </div>

      <div class="text-primary d-flex flex-column align-items-center homeTltie">
        <div class="">
          <img src="../../assets/images/title.svg" alt="" />
        </div>
        <h2 class="lh-lg homeText text-center">
          水遊館遊樂園是一個引人入勝的海洋主題樂園 <br />
          提供了豐富的活動和娛樂 <br />從大型遊樂設施到海洋動物表演<br />
          再到互動式的展覽和教育活動<br />還有許多互動式的展覽和教育活動<br />
          讓遊客能夠深入了解海洋生物<br />了解它們的生活習性和生態環境
          <br />這個樂園的各個角落都有驚喜等待著遊客<br />
        </h2>
      </div>
    </div>
    <div class="mask"></div>

    <div class="mb-5 pb-5">
      <TitleComponent
        :title="$t('title.news')"
        engTitle="NEWS"
        class="text-center d-block d-lg-none"
        data-aos="fade-up"
        data-aos-once="true"
      ></TitleComponent>

      <TitleComponent
        engTitle="NEWS"
        class="ps-4 d-none d-lg-block mb-4 homeTitle"
        data-aos="fade-up"
        data-aos-once="true"
      >
      </TitleComponent>

      <div class="row homeTitle">
        <TitleComponent
          :title="$t('title.news')"
          class="d-none d-lg-block col-md-1"
          style="writing-mode: vertical-lr"
          data-aos="fade-up-right"
          data-aos-once="true"
          data-aos-delay="300"
        ></TitleComponent>

        <div class="col-md-11 col-12">
          <ArticlesComponent :data="homeArticles"></ArticlesComponent>
        </div>
      </div>
    </div>

    <div class="d-block d-md-none mb-5">
      <TitleComponent
        :title="$t('title.products')"
        engTitle="PRODUCTS"
        class="text-center d-block d-md-none"
        data-aos="fade-up"
        data-aos-once="true"
      ></TitleComponent>

      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(i, index) in homeProducts"
          :key="index"
          style="height: 500px"
        >
          <RouterLink to="/products">
            <div
              class="position-relative homeProdTitle shadow rounded"
              style="overflow: hidden; height: 100%"
            >
              <img
                class="img-fluid rounded"
                :src="i.imgUrls"
                alt="productsImg"
                style="height: 100%; object-fit: cover"
              />
              <h5
                class="p-2 bg-light bg-opacity-75 text-primary text-center text-truncate position-absolute start-50 translate-middle-x"
                style="
                  width: 100%;
                  bottom: -23%;
                  transition: 0.5s;
                  letter-spacing: 2px;
                "
              >
                {{ i.title }}
              </h5>
            </div>
          </RouterLink>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <div class="mb-5 d-none d-md-block homeTitle proMask" style="padding: 5% 0">
    <div class="container" style="margin: ">
      <div>
        <TitleComponent
          engTitle="PRODUCTS"
          class="d-none d-md-block text-end text-white mb-3"
          data-aos="fade-up"
          data-aos-once="true"
        ></TitleComponent>
      </div>

      <div class="row">
        <div class="col-11">
          <div class="row gy-4 d-flex flex-wrap">
            <div
              class="col-4 hoverImg"
              v-for="(i, index) in homeProducts"
              :key="index"
            >
              <RouterLink to="/products">
                <div
                  class="position-relative homeProdTitle shadow rounded"
                  style="overflow: hidden; height: 300px"
                >
                  <img
                    class="img-fluid rounded"
                    :src="i.imgUrls"
                    alt="productsImg"
                    style="height: 100%; width: 100%; object-fit: cover"
                  />
                  <h5
                    class="p-2 bg-light bg-opacity-75 text-primary text-center text-truncate position-absolute start-50 translate-middle-x"
                    style="
                      width: 100%;
                      bottom: -23%;
                      transition: 0.5s;
                      letter-spacing: 2px;
                    "
                  >
                    {{ i.title }}
                  </h5>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <TitleComponent
          :title="$t('title.products')"
          class="d-none d-md-block col-1 text-white"
          style="writing-mode: vertical-lr"
          data-aos="flip-right"
          data-aos-once="true"
          data-aos-delay="300"
        >
        </TitleComponent>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="homeLocation">
      <TitleComponent
        :title="$t('title.location')"
        engTitle="LOCATION"
        class="text-center mb-5 d-none d-md-block homeTitle"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      ></TitleComponent>

      <TitleComponent
        :title="$t('title.location')"
        engTitle="LOCATION"
        class="text-center mb-5 d-block d-md-none"
        data-aos="fade-up"
        data-aos-once="true"
      ></TitleComponent>
      <div class="row">
        <iframe
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="300"
          class="col-12 col-md-6"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46888.039202912034!2d141.3489016839468!3d42.735420686046076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f753bee7ee07a0d%3A0x53863a21f839fe00!2z6aKo5LiN5q275bKz5YyX5bC-5qC544Kz44O844K555m75bGx5Y-j!5e0!3m2!1szh-TW!2stw!4v1677674462799!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div
          class="col-12 col-md-6"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="500"
        >
          <div class="position-relative top-50 translate-middle-y text-primary">
            <h5 class="lh-base" style="letter-spacing: 2px">
              <span> 地址：</span>520帕底亞地區冰櫃鎮左邊大鍋湖中間湖中小島
            </h5>
            <h5 style="letter-spacing: 2px"><span> 電話：</span>00-12345678</h5>
            <h5 class="lh-base">
              <span> 營業時間：</span><br />夏季（3～10月）：8：00~17：00 <br />

              冬季（11～2月）：9：00~17：00
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BubbleComponent></BubbleComponent>
</template>

<style lang="scss">
.homeLogo {
  height: 450px;
}
.homeTitle {
  h2 {
    font-size: 60px !important;
    letter-spacing: 0.5em;
    margin: 0;
  }

  h3 {
    font-size: 60px !important;
    letter-spacing: 0.5em;
    margin: 0;
  }
}

.homeProdTitle {
  &:hover {
    h5 {
      bottom: -3% !important;
    }
  }
}

.mask {
  position: relative;
  width: 100%;
  margin: 10% 0;
  height: 600px;
  overflow: hidden; 
  &::before {
    content: "";
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://images.pexels.com/photos/3361052/pexels-photo-3361052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
      no-repeat top center;
    background-size: cover;
    -webkit-background-size: cover;
  }

  // 遮罩圖片
  -webkit-mask: url(../../assets/images/megane.png) no-repeat center center / contain;
  mask: url(../../assets/images/megane.png) no-repeat center center / contain;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.proMask {
  position: relative;
  background-size: cover;
  -webkit-background-size: cover;
  overflow: hidden;
  -webkit-mask: url(../../assets/images/sea.svg) center center / cover;
  mask: url(../../assets/images/sea.svg) center center / cover;
  -webkit-mask-size: cover;
  mask-size: cover;

  &::before {
    content: "";
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://images.pexels.com/photos/3616252/pexels-photo-3616252.jpeg) no-repeat top center;
    background-size: cover;
    -webkit-background-size: cover;
  }

  
  
}

.homeImg {
  overflow: hidden;
}

.shark {
  right: 2%;
  bottom: -10% !important;
  width: 40%;
  position: absolute;
}

.homeSvg {
  position: absolute;
  width: 200%;
  // left: 0;
  bottom: calc(-30% + 15vw);
  animation: wave 15s infinite linear;
}

@media (max-width: 1024px) {
  .homeLogo {
    height: 250px;
  }

  .homeText {
    font-size: 20px !important;
  }

  .homeSvg {
    bottom: calc(-27% + 10vw);
    animation: wave 20s infinite linear;
  }

  .homeImg {
    margin-top: 10%;

    .titleBubble {
      top: 25%;
      left: -10%;
      width: 20%;
    }

    .titleBubble2 {
      width: 10%;
      left: 90% !important;
      top: 40% !important;
    }

    .fish {
      left: 60% !important;
      top: -5%;
      width: 20%;
    }

    .octopus {
      bottom: -5% !important;
      // left: 70% !important;
      width: 15%;
    }

    .turtle {
      width: 30%;
    }
  }

  .homeTltie {
    img {
      width: 90%;
    }
  }
}

.wavy {
  h2 {
    color: white;
    font-weight: bold;
    animation: textwavy 1s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
  }
}

@keyframes textwavy {
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(-20px);
  }

  40%,
  100% {
    transform: translateY(0px);
  }
}

@keyframes wave {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>

<script>
import ArticlesComponent from "@/components/ArticlesComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import BubbleComponent from "@/components/BubbleComponent.vue";

import articles from "@/stores/articles";
import produceStore from "@/stores/produceStore.js";

import { mapState, mapActions } from "pinia";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      homeArticles: [],
      homeProducts: [],
    };
  },
  components: {
    ArticlesComponent,
    BubbleComponent,
    TitleComponent,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(articles, ["articles"]),
    ...mapState(produceStore, ["products"]),
  },
  methods: {
    ...mapActions(articles, ["getArticles", "newArticles"]),
    ...mapActions(produceStore, ["getProducts"]),

    async gethomeProducts() {
      await this.getProducts();
      this.homeProducts = [];
      const randomIndexSet = new Set();
      while (randomIndexSet.size < 6) {
        randomIndexSet.add(Math.floor(Math.random() * this.products.length));
      }
      randomIndexSet.forEach((randomIndex) => {
        this.homeProducts.push(this.products[randomIndex]);
      });
    },
    async gethomeArticles() {
      await this.getArticles();
      this.homeArticles = this.articles.slice(0, 3);
    },
  },
  mounted() {
    this.gethomeProducts();
    this.gethomeArticles();
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
