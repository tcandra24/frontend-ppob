<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useProductStore } from "../stores/productStore";

import typeData from "../data/type";

const route = useRoute();
const productStore = useProductStore();

const type = typeData.find((element) => element.code === route.params.code);

const getProduct = (operator) => {
  productStore.fetch(route.params.code, operator);
};
</script>

<template>
  <div>
    <h1>This is type {{ $route.params.code }} page</h1>
    <ul
      class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
    >
      <li v-for="(operator, index) in type.operators" :key="index">
        <button
          class="me-4 hover:underline md:me-6"
          @click="getProduct(operator)"
        >
          {{ operator }}
        </button>
      </li>
    </ul>

    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li
        class="pb-3 sm:pb-4"
        v-for="(product, index) in productStore.products"
        :key="index"
      >
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0">
            <img
              class="w-16 h-16 rounded-full object-cover"
              :src="product.icon_url"
              :alt="product.product_code"
            />
          </div>
          <div class="flex-1 min-w-0">
            <router-link
              :to="{ name: 'topup', params: { code: product.product_code } }"
              class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >{{ product.product_code }}</router-link
            >
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {{ product.product_description }}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            {{ product.product_price }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
