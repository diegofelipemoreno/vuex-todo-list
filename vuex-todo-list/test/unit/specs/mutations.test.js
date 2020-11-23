import mutations from '@/store/mutations.js';

const products = [
  {name: 'Banana Skin', price: 20}
]
const state = {products};

describe('mutations', () => {
  it('reduce the price value on the object product', () => {
    const amount = 10;

    mutations.reducePrice(state, amount);
    state.products.forEach((product) => {
      expect(product.price).toEqual(10);
    });
  });
});