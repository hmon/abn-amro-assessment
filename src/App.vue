<template>
  <toast-popup v-show="showError">
    <toast @close="closeToast" :message="error"/>
  </toast-popup>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ToastPopup from '@/components/ToastPopup.vue'
import Toast from '@/components/Toast.vue'
import { Store } from '@/decorators/store'
import { CommonStore } from '@/store/common.store'
import MainLayout from "@/layouts/MainLayout.vue";

@Options({
  components: {
    MainLayout,
    Toast,
    ToastPopup
  }
})
export default class App extends Vue {
  @Store() commonStore!: CommonStore

  get error() {
    return this.commonStore.error
  }

  get showError() {
    return this.commonStore.showError
  }

  closeToast() {
    this.commonStore.hideErrorMessage()
  }
}
</script>

<style lang="scss">
#app {
  padding: 4rem;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
