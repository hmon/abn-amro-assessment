<template>
  <div class="rating-wrapper rounded-md flex flex-row align-middle items-center text-base p-1 pr-2 w-fit">
            <span class="rating-icon mr-2">
              <icon icon="ic:round-star" class="h-6 w-6 text-yellow-300" />
            </span>
    <span>{{ average }}</span>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class TvShowRanking extends Vue {
  @Prop() average!: number;
};
</script>
<style scoped lang="scss">
.rating-wrapper {
  background-color: #38352D;
  border: 1px solid #FFCD1B;
  box-shadow: #907825 0px 0px 0px 1px;
}
</style>
