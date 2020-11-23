import * as getters from '@/store/getters.js'

const products = [
  {name: 'Banana Skin', price: 20}
]
const state = {products};

describe("products getter", () => {
  it("returns a list", () => {
    const actual = getters.productsGetter(state)

    expect(Array.isArray(actual)).toBe(true);
  })

  it("returns list of objects type name:<string>, price:<number>", () => {
    const actual = getters.productsGetter(state)

    actual.forEach((element) => {
      expect(typeof element.name).toBe('string');
      expect(typeof element.price).toBe('number');
    });
  })
})


describe("saleProductsGetter", () => {
  it("returns a list", () => {
    const actual = getters.saleProductsGetter(state)

    expect(Array.isArray(actual)).toBe(true);
  })

  it("returns list of objects type name:<string>, price:<number>", () => {
    const actual = getters.saleProductsGetter(state)

    actual.forEach((element) => {
      expect(typeof element.name).toBe('string');
      expect(typeof element.price).toBe('number');
    });
  })
})


/*
  // array
  expect(Array.isArray(['value'])).toBe(true);
  // string
  expect(typeof 'value').toBe('string');
  // object
  expect({value: 'value'}).toBeTruthy();
  expect(typeof {value: 'value'}).toBe('object');
*/