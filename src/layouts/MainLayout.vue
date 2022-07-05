<template>
  <div class="main-layout">
    <header class="mb-4">
      <navbar />
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Navbar,
  },
})
export default class MainLayout extends Vue {}
</script>

<style scoped lang="scss">
.main-layout {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 3rem;
}
</style>
