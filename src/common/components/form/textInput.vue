<template>
  <label class="flex flex-col gap-[6px] w-full relative">
    <div class="text-left text-sm font-medium text-signInLabelText">
      {{ label }}
    </div>
    <input
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      :placeholder="placeholder"
      :value="value"
      :type="typeWithVisibility"
      class="w-full h-[44px] bg-white rounded-md border border-signInInputBorder px-[10px] py-[14px] transition-all text-base placeholder-signInInputText focus:outline-none focus:ring-1 focus:ring-transparent"
      :class="[passwordVisibilityButton ? 'pr-16' : '', backgroundClass]"
    />
    <!-- <div
      v-if="passwordVisibilityButton"
      class="w-min absolute top-0 bottom-0 right-0 rounded-md"
    >
      <button @click="showPassword = !showPassword" aria-label="Şifre göster/gizle" class="px-4 py-5">
        <svg-icon
          :name="showPassword ? 'eye-fill' : 'eye-fill-disabled'"
          class="lg:w-5 lg:h-5 text-black-600"
        />
      </button>
    </div> -->
    <div
      v-if="isRequired"
      v-tooltip="{
        content: 'Zorunlu',
        placement: 'top-end',
      }"
      class="absolute top-1 right-2 text-dolgerBlue select-none"
    >
      *
    </div>
    <div v-if="info.show" :class="messageClass">
      {{ info.message }}
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    passwordVisibilityButton: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Object,
      default: () => ({ show: false, type: "", message: "" }),
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    typeWithVisibility() {
      if (this.passwordVisibilityButton) {
        return this.showPassword ? "textbox" : "password";
      }
      return "textbox";
    },
    backgroundClass() {
      let arr = [];
      if (this.info.type == "error")
        arr.push(
          "text-red-400 placeholder-red-400 bg-error-100 border-error-200"
        );
      return arr;
    },
    messageClass() {
      let arr = ["text-xs text-left"];
      if (this.info.type == "error") arr.push("text-red-400");
      return arr;
    },
  },
};
</script>

<style scoped>
</style>