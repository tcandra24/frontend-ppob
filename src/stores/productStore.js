import { defineStore } from "pinia";
import request from "../plugins/axios";
import { md5 } from "js-md5";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetch(type, operator) {
      this.products = [];

      const response = await request.post(`/pricelist/${type}/${operator}`, {
        username: import.meta.env.VITE_IAK_USERNAME,
        sign: md5(
          import.meta.env.VITE_IAK_USERNAME +
            import.meta.env.VITE_IAK_API_KEY +
            "pl"
        ),
      });

      this.products = response.data.data.pricelist;
    },
  },
});
