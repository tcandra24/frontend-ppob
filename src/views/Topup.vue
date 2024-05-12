<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { md5 } from "js-md5";

import request from "../plugins/axios";
import { useOrderStore } from "../stores/orderStore";

const route = useRoute();
const customerId = ref(0);
const OrderStore = useOrderStore();

const submit = async () => {
  await OrderStore.submit(route.params.code, customerId.value);

  console.log(OrderStore.order);
};
</script>

<template>
  <div>
    <h1>This is topup page</h1>
    <form @submit.prevent="submit">
      <label for="">Nomer HP.</label>
      <input type="text" v-model="customerId" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
