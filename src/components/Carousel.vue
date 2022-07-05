<template>
  <div class="flex flex-row justify-between my-7">
    <h2 class="text-white text-4xl font-bold">{{ title }}</h2>

    <div class="carousel-arrows">
      <div class="carousel-arrow mr-2">
        <icon icon="ic:sharp-arrow-back-ios-new" @click="slidePrev" />
      </div>
      <div class="carousel-arrow">
        <icon icon="ic:sharp-arrow-forward-ios" @click="slideNext" />
      </div>
      <div></div>
    </div>
  </div>
  <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="spaceBetween"
    :breakpoints="breakpoints"
    @swiper="controlledSwiper = $event"
  >
    <swiper-slide v-for="item in items" :key="item.id">
      <slot :item="item" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import { Prop } from "vue-property-decorator";
import sizes from "@/constants/sizes";

const DEFAULT_BREAKPOINTS = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  [sizes.sm]: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  [sizes.md]: {
    slidesPerView: 5,
    spaceBetween: 30
  },
  [sizes.lg]: {
    slidesPerView: 7,
    spaceBetween: 30
  }
};

@Options({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class Carousel extends Vue {
  @Prop() title!: string;
  @Prop({ default: 7 }) slidesPerView!: number;
  @Prop({ default: 30 }) spaceBetween!: number;
  @Prop({ default: DEFAULT_BREAKPOINTS }) breakpoints!: typeof DEFAULT_BREAKPOINTS;
  @Prop({ required: true }) items!: { id: number }[];

  controlledSwiper: SwiperClass | null = null;

  slidePrev () {
    this.controlledSwiper?.slidePrev();
  }

  slideNext () {
    this.controlledSwiper?.slideNext();
  }
};
</script>

<style scoped lang="scss">
.carousel-arrows {
  @apply flex flex-row justify-between;

  .carousel-arrow {
    @apply bg-main border-gray-600 w-10 h-10 border rounded-xl flex items-center justify-center text-gray-400 cursor-pointer;

    &:hover {
      color: #D83C44;
    }
  }
}
</style>
