<template>
  <carousel :title="title" :items="tvShows">
    <template #default="{ item }">
      <router-link :to="{ name: 'show', params: { id: item.id } }">
        <show-card :show="item" />
      </router-link>
    </template>
  </carousel>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Shows } from "@/models/shows";
import ShowCard from "@/components/ShowCard.vue";
import Carousel from "@/components/Carousel.vue";

@Options({
  components: {
    ShowCard,
    Carousel
  }
})
export default class TvShowCarousel extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) tvShows!: Shows;
};
</script>

<style scoped>

</style>
