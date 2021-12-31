import { action } from "easy-peasy";

export default {
  cart: {
    products: [],
    addProduct: action((state, product) => {
      state.products.push(product);
    }),
    removeProduct: action((state, productId) => {
      var i = 0;
      state.products.forEach((product) => {
        if (product.ProductId === productId) {
          state.products.splice(i, 1);
        }
        i++;
      });
    }),
  },
  order: {
    orderInfo: [],
    addInfo: action((state, info) => {
      state.orderInfo.push(info);
    }),
  },
};
