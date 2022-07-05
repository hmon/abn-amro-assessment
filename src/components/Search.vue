<template>
  <div class="search">
    <div class="relative text-gray-100">
      <input
        v-model="query"
        class="bg-transparent backdrop-blur h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search" name="search" placeholder="Search"
        @keyup.enter="search"
      >
      <button @click="search" type="submit" class="absolute right-0 top-0 mt-4 mr-4">
        <icon icon="ri:search-2-line" class="text-gray-100 h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Search extends Vue {
  query = "";

  search () {
    this.$router.push({
      name: "search",
      query: {
        q: this.query
      }
    });
  }
};
</script>

<style scoped>

</style>
