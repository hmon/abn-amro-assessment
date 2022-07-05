<template>
  <figure
    data-cy="show-card"
    class="bg-main border-gray-600 border rounded-3xl p-3 text-fuchsia-50"
  >
    <img v-if="show.image" class="rounded-3xl mx-auto" :src="show.image.medium" :alt="show.name" width="196" height="276">

    <div class="pt-3">
      <figcaption class="font-medium flex-col">
        <div>
          <tv-show-ranking :average="show.rating.average" />
        </div>
        <div
          class="text-left text-white text-lg font-bold mt-3 mb-4 text-ellipsis overflow-hidden whitespace-nowrap w-full"
          :title="show.name"
        >
          {{ show.name }}
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Show } from "@/models/shows";
import TvShowRanking from "@/components/TvShowRanking.vue";

@Options({
  components: {
    TvShowRanking
  }
})
export default class ShowCard extends Vue {
  @Prop() show!: Show;
}
</script>

