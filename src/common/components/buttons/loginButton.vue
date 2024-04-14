<template>
  <button
    @click="disabled ? null : $emit('click')"
    class="relative w-full rounded-md font-medium transition-all overflow-hidden h-[44px]"
    style="border-radius: 10px"
    :disabled="disabled"
    :class="[buttonClass]"
    :style="disabled ? 'cursor: not-allowed;' : ''"
    :aria-label="text"
  >
    <span v-if="!loading" class="text-base">{{ text }}</span>
    <loader v-else class="top-0" />
  </button>
</template>

<script>
import loader from "@/common/components/loaders/loader.vue";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "main",
    },
    size: {
      type: Number,
      default: 2,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    loader,
  },
  computed: {
    buttonClass() {
      let buttonClassString = [];

      if (this.type === "main") {
        buttonClassString.push("bg-signInButtonBg text-white");
        if (this.disabled) buttonClassString.push("opacity-30");
        else buttonClassString.push("hover:opacity-80");
      }

      return buttonClassString;
    },
  },
};
</script>

<style scoped>
.gradient-button {
  background-image: linear-gradient(to right, #4a13f3, #00BCD4);
}
.gradient-button:hover {
  background-image: linear-gradient(to left, #E040FB, #00BCD4);
}
</style>