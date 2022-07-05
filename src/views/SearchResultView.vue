<template>
  <div class="search text-white">
    <template v-if="isLoading">
      <loading-spinner />
    </template>

    <template v-else>
      <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4" v-if="result.length > 0">
        <router-link v-for="r in result" :key="r.show.id" :to="{ name: 'show', params: { id: r.show.id } }">
          <show-card :show="r.show" />
        </router-link>
      </div>

      <template v-else>
        <p class="text-center">No results</p>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Service } from "@/decorators/service";
import { TvShowsService } from "@/services/tv-shows.service";
import { RemoteData } from "@/models/remoteData";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { Watch } from "vue-property-decorator";
import { SearchResults } from "@/models/search-result";
import ShowCard from "@/components/ShowCard.vue";

@Options({
  components: { ShowCard, LoadingSpinner }
})
export default class SearchResultView extends Vue {
  @Service() tvShowService!: TvShowsService;

  result: SearchResults = [];

  remoteData = RemoteData.NotAsked;

  get isLoading () {
    return this.remoteData === RemoteData.Pending;
  }

  get query () {
    return this.$route.query.q as string;
  }

  @Watch("query", { immediate: true })
  async search () {
    this.remoteData = RemoteData.Pending;
    try {
      this.result = await this.tvShowService.search(this.query);
      this.remoteData = RemoteData.Success;
    } catch (error) {
      this.remoteData = RemoteData.Failure;
    }
  }

  mounted () {
    if (!this.query) {
      this.$router.back();
    }
  }
};
</script>

<style scoped>

</style>
