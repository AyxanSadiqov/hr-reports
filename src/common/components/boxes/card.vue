<template>
  <div class="flex flex-col justify-between gap-6 bg-white rounded-2xl p-6">
    <div class="flex flex-col gap-3">
      <div class="flex justify-between items-start">
        <div
          class="flex items-center justify-center w-[58px] h-[58px] bg-white border border-borderGray rounded-lg overflow-hidden"
        >
          <img v-if="companies.logo" :src="companies.logo" :alt="companies.logo">
          <div class="w-full h-full bg-gray-100"></div>
        </div>
        <button class="px-2">
          <img src="@/assets/images/icons/dots.svg" alt="3 dots" />
        </button>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-xl font-bold">{{ companies.companyName }}</div>
        <div
          class="text-2xs text-center font-bold text-badgeText rounded-lg bg-badgeBg px-4 py-1"
        >
          {{ companies.badgeName }}
        </div>
      </div>
    </div>
    <main-button @click="seeReport()" text="Click to see report" />
  </div>
</template>

<script>
import mainButton from "@/common/components/buttons/mainButton.vue";

export default {
  props: {
    companies: {
      type: Object,
      default: () => {}
    },
  },
  components: {
    mainButton,
  },
  methods: {
    seeReport() {
      window.open(this.companies.link, "_blank");
    },
  },
};
</script>

<style>
</style>