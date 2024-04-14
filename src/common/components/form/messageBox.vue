<template>
  <div v-if="text" :class="messageClass">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "error"
    },
    text: {
      type: String,
      default: ""
    },
  },
  computed: {
    messageClass() {
      let classArr = ["border-2 px-3 py-3 outline outline-offset-2 rounded-md w-full z-10"]
      if (this.type == "error") {
        classArr.push("border-red-400 bg-red-400 bg-opacity-10 text-red-400 font-bold text-sm")
      } else if (this.type == "success") {
        classArr.push("border-green-400 bg-green-400 bg-opacity-10 text-green-400 font-bold text-sm")
      }
      return classArr
    }
  }
}
</script>

<style>

</style>