<template>
  <nav class="navbar">
    <div class="navbar-brand mr-8">
      <router-link to="/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
          alt="The Movie DB" />
      </router-link>
    </div>

    <search />
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Search from "@/components/Search.vue";

@Options({
  components: {
    Search
  }
})
export default class Navbar extends Vue {
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-brand {
    width: 60px;
  }
}
</style>
