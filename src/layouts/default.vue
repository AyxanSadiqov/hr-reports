<template>
  <div :class="appBgClassString" class="h-screen min-h-full overflow-y-auto">
    <navbar />
    <div class="pt-8 pb-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from '@/common/components/bars/navbar.vue';

export default {
  components: {
    navbar
  },
  computed: {
    appBgClassString() {
      var classString = "bg-white";
      if (this.$store.state.appSettings.bgColorGray)
        classString = "bg-appBackground";
      return classString;
    },
  }
}
</script>

<style>

</style>