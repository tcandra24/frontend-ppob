<script setup>
import typeData from "../data/type";
</script>

<template>
  <div>
    <h1 class="font-bold">This is home page</h1>
    <div>
      <ul
        class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
      >
        <li v-for="(type, index) in typeData" :key="index">
          <router-link
            :to="{ name: 'products', params: { code: type.code } }"
            class="me-4 hover:underline md:me-6"
            >{{ type.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
