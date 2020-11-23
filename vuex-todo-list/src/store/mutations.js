import * as MUTATION from './mutation-types';

export default {
  [MUTATION.REDUCE_PRICE](state, payload) {
    state.products.forEach((product) => {
      product.price -= payload;
    });
  }
};