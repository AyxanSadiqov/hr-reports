<template>
  <div
    class="flex justify-center items-center pl-[72px] py-6 pr-12 bg-white w-full"
  >
    <div
      class="flex gap-6 items-center justify-between w-full max-w-container-lg"
    >
      <div class="min-w-max">
        <img src="@/assets/images/navbar-logo.png" alt="Logo" />
      </div>
      <div class="hidden xl:flex items-center gap-4 font-bold">
        <router-link
          v-for="(menu, index) in navbarMenus"
          :key="index"
          :to="{ name: menu.route }"
          v-slot="{ isActive, route, isExactActive, href, navigate }"
          custom
        >
          <a
            @click="navigate"
            :href="href"
            :class="
              isExactActive || (isActive && route.name != 'home')
                ? 'text-navActive border-b-2 border-navActive'
                : ''
            "
            class="text-sm p-3 text-activeButton min-w-max"
          >
            {{ menu.name }}
          </a>
        </router-link>
        <button class="text-sm p-3 text-activeButton min-w-max">Other</button>
      </div>
      <div class="w-full max-w-[315px] relative">
        <img
          class="absolute top-1/2 -translate-y-1/2 left-4"
          src="@/assets/images/icons/search.svg"
          alt="search"
        />
        <input
          v-model="searchVal"
          type="text"
          placeholder="Search Report..."
          class="h-12 focus:outline-none focus:ring-2 focus:ring-badgeText focus:border-transparent w-full bg-inputBg pl-12 py-2 pr-2 placeholder-placeholderText text-sm transition-all"
          style="border-radius: 10px"
          @input="$store.dispatch('user/updateSearchVal', searchVal)"
        />
        <button
          v-if="$store.state.user.searchVal"
          @click="clearInput()"
          class="absolute top-1/2 -translate-y-1/2 right-4 text-badgeText font-medium hover:font-bold rounded-full"
        >
          &#x2715;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarMenus: [
        {
          route: "allReports",
          name: "All Reports",
        },
        {
          route: "managementDashboard",
          name: "Management dashboard",
        },
        {
          route: "hrCommittee",
          name: "HR Committee",
        },
        {
          route: "sbReports",
          name: "SB Reports",
        },
        {
          route: "groupWideActivities",
          name: "Group wide activities",
        },
      ],
      searchVal: "",
    };
  },
  methods: {
    clearInput() {
      this.$store.dispatch('user/updateSearchVal', '')
      this.searchVal = ""
    }
  }
};
</script>

<style>
</style>