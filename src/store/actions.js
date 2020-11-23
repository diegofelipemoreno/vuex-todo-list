import * as MUTATION from './mutation-types';

export const reduce_price_action = ({ commit }, payload) => {
  commit(MUTATION.REDUCE_PRICE, payload);
};