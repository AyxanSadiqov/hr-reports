<template>
  <transition leave-to-class="opacity-0" enter-class="opacity-0">
    <div
      class="container absolute flex justify-center items-center text-center w-full h-full flex gap-3 z-10"
    >
      <div class="loader" :class="loaderClasses"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    loaderClasses() {
      let classes = "";
      if (this.size == 1) classes = "w-2 h-2";
      else if (this.size == 2) classes = "w-10 h-10";
      else classes = "w-13 h-13";
      return classes;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100% !important;
  min-width: 100% !important;
  max-width: 100% !important;
  /* z-index: 1000; */
}
/* HTML: <div class="loader"></div> */
.loader {
  aspect-ratio: 1;
  background: #0CAF60;
  box-shadow: 0 0 60px 15px #0CAF60;
  transform: translate(-80px);
  clip-path: inset(0);
  animation:
    l4-1 0.5s ease-in-out infinite alternate,
    l4-2 1s   ease-in-out infinite;
}
@keyframes l4-1 {
  100% {transform: translateX(80px)}
}
@keyframes l4-2 {
   33% {clip-path: inset(0 0 0 -100px)}
   50% {clip-path: inset(0 0 0 0)     }
   83% {clip-path: inset(0 -100px 0 0)}
}
</style>