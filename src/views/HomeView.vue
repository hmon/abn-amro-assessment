<template>
  <div class="home">
    <template v-if="isLoading">
      <loading-spinner />
    </template>

    <template v-else>
      <tv-show-carousel title="Popular" :tv-shows="tvShowsByPopularity" />

      <tv-show-carousel title="Action" :tv-shows="tvShowsByGenre.action" />

      <tv-show-carousel title="Adventure" :tv-shows="tvShowsByGenre.adventure" />

      <tv-show-carousel title="Comedy" :tv-shows="tvShowsByGenre.comedy" />

      <tv-show-carousel title="Crime" :tv-shows="tvShowsByGenre.crime" />

      <tv-show-carousel title="Anime" :tv-shows="tvShowsByGenre.anime" />
    </template>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Store } from "@/decorators/store";
import { TvShowsStore } from "@/store/tv-shows.store";
import { Genre } from "@/models/shows";
import TvShowCarousel from "@/components/TvShowCarousel.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

@Options({
  components: { LoadingSpinner, TvShowCarousel }
})
export default class HomeView extends Vue {
  @Store() tvShowsStore!: TvShowsStore;

  get isLoading() {
    return this.tvShowsStore.isLoading;
  }

  get tvShowsByPopularity () {
    return this.tvShowsStore.getByPopularity;
  }

  get tvShowsByGenre () {
    return {
      action: this.tvShowsStore.getByGenre(Genre.Action),
      adventure: this.tvShowsStore.getByGenre(Genre.Adventure),
      anime: this.tvShowsStore.getByGenre(Genre.Anime),
      comedy: this.tvShowsStore.getByGenre(Genre.Comedy),
      crime: this.tvShowsStore.getByGenre(Genre.Crime)
    };
  }

  mounted () {
    this.tvShowsStore.fetchShows();
  }
}
</script>
