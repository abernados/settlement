<template>
<div class="bg-white px-4 py-3 flex items-center justify-betweenborder-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <button v-if="isFirstPage()" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" disabled>
        Previous
      </button>
      <router-link v-else :to="previous" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
        Previous
      </router-link>

      <button v-if="isLastPage()" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500" disabled>
        Next
      </button>
       <router-link v-else :to="next" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
        Next
      </router-link>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">1</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ meta.length }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ meta.total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button v-if="isFirstPage()" class="bg-white border border-gray-300 cursor-default font-medium inline-flex items-center px-2 py-2 relative rounded-l-md text-gray-200 text-sm" disabled>
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <router-link v-else :to="previous" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </router-link>

          <router-link v-for="(page) in meta.lastPage" :key="page" to="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            {{ page }}
          </router-link>
          
          <button v-if="isLastPage()" class="bg-white border border-gray-300 cursor-default font-medium inline-flex items-center px-2 py-2 relative rounded-l-md text-gray-200 text-sm" disabled>
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>

          <router-link v-else :to="next" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </router-link>
        </nav>
      </div>
    </div>
  </div>




  <!-- <ul class="c-pagination">
    {{ pagination.meta.currentPage}}
    <li class="mr-2">
      <span v-if="isFirstPage()" class="c-button v--link">
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      </span>
      <router-link v-else :to="previous" class="c-button v--link text-blue">
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      </router-link>
    </li>
    <li class="flex items-center">
      <div class="c-field mr-1">
        <input
          v-model="page"
          type="text"
          class="c-field__input py-1 px-2 w-12"
        />
      </div>

      of {{ meta.lastPage }}
    </li>
    <li class="ml-2">
      <span v-if="isLastPage()" class="c-button v--link">
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </span>
      <router-link v-else :to="next" class="c-button v--link text-blue">
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </router-link>
    </li>
  </ul> -->
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  name: "Pagination",
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  data() {
    return {
      page: this.$route.query.page,
    };
  },

  computed: {
    meta() {
      return this.pagination.meta;
    },

    previous() {
      return {
        path: this.$route.path,
        query: Object.assign({}, this.$route.query, {
          page: this.meta.currentPage - 1,
        }),
      };
    },

    next() {
      return {
        path: this.$route.path,
        query: Object.assign({}, this.$route.query, {
          page: this.meta.currentPage + 1,
        }),
      };
    },
  },

  watch: {
    "$route.query.page"(page) {
      this.page = page;
    },

    page(page = 1) {
      this.$router.push({
        path: this.$route.path,
        query: Object.assign({}, this.$route.query, { page }),
      });
    },
  },

  methods: {
    isLastPage() {
      return this.meta.currentPage === this.meta.lastPage;
    },

    isFirstPage() {
      return this.meta.currentPage === 1;
    },
  },
};
</script>

<style lang="postcss">
.c-pagination {
  @apply flex items-center;
}
</style>
