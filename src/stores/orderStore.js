import { defineStore } from "pinia";
import request from "../plugins/axios";
import { md5 } from "js-md5";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    order: {},
  }),
  actions: {
    async submit(productCode, customerId) {
      const orderId = `order-trial-${Math.floor(Math.random() * 1000 + 1)}`;
      const response = await request.post("/top-up", {
        ref_id: orderId,
        customer_id: customerId,
        product_code: productCode,
        username: import.meta.env.VITE_IAK_USERNAME,
        sign: md5(
          import.meta.env.VITE_IAK_USERNAME +
            import.meta.env.VITE_IAK_API_KEY +
            orderId
        ),
      });

      this.order = response.data.data;
    },
  },
});
