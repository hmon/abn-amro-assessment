<template>
  <div class="show text-white">
    <template v-if="isLoading">
      <loading-spinner />
    </template>

    <template v-else>
      <div class="show__header mb-5">
        <h1 class="show__title text-4xl font-bold">{{ show.name }}</h1>
      </div>

      <div class="flex flex-row">
        <div>
          <div class="show__poster mr-20">
            <img v-if="show.image" class="border-4 border-gray-600 rounded-3xl" width="350" height="520" :src="show.image.original" alt="poster" />
          </div>
        </div>

        <div class="flex-1">
          <p class="text-justify" v-html="show.summary"></p>

          <div class="flex flex-row justify-between bg-main items-center border-gray-600 border-2 rounded-md my-10 p-5">
            <div>
              <h2 class="text-left text-white text-lg font-bold">Genres:</h2>
              <p class="text-left">{{ show.genres.join(', ') }}</p>
            </div>

            <div>
              <h2 class="text-left text-white text-lg font-bold">Status:</h2>
              <p class="text-left">{{ show.status }}</p>
            </div>

            <div>
              <h2 class="text-left text-white text-lg font-bold">Premiered:</h2>
              <p class="text-left">{{ show.premiered }}</p>
            </div>

            <div>
              <h2 class="text-left text-white text-lg font-bold">Ended:</h2>
              <p class="text-left">{{ show.ended }}</p>
            </div>

            <div>
              <h2 class="text-left text-white text-lg font-bold">Language:</h2>
              <p class="text-left">{{ show.language }}</p>
            </div>

            <div class="w-fit">
              <tv-show-ranking :average="show.rating.average" />
            </div>
          </div>
        </div>
        </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { Show } from "@/models/shows";
import { Service } from "@/decorators/service";
import { TvShowsService } from "@/services/tv-shows.service";
import { RemoteData } from "@/models/remoteData";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import TvShowRanking from "@/components/TvShowRanking.vue";

@Options({
  components: { TvShowRanking, LoadingSpinner }
})
export default class ShowView extends Vue {
  @Prop({ required: true }) id!: Show["id"];
  @Service() tvShowService!: TvShowsService;

  show: Show | null = null;

  remoteData = RemoteData.NotAsked;

  get isLoading () {
    return this.remoteData === RemoteData.Pending;
  }

  @Watch("id", { immediate: true })
  async fetchData () {
    this.remoteData = RemoteData.Pending;
    try {
      this.show = await this.tvShowService.getTvShow(this.id);
      this.remoteData = RemoteData.Success;
    } catch (error) {
      this.remoteData = RemoteData.Failure;
    }
  }
};
</script>

<style scoped>

</style>
