export const productsGetter = (state) => {
  return state.products;
};


export const saleProductsGetter = (state) => {
  const saleProducts = state.products.map((product) => {
    return {
      name: `** ${product.name} **`,
      price: product.price / 2
    }
  });

  return saleProducts;
};
