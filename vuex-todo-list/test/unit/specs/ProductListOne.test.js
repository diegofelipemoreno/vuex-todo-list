import Vuex from 'vuex';
import { shallowMount, createLocalVue } from "@vue/test-utils"
import ProductListOne from '@/components/ProductListOne.vue'

// add the 2 lines below
const localVue = createLocalVue();

localVue.use(Vuex);

describe('Product list one component', () => {
  const getters = {};
	let actions;
	let store;
  let wrapper;
  let mutations;

	// add this before each
	beforeEach(() => {
    actions = {
			'reduce_price_action': jest.fn()
    };

    mutations = {
      'reducePrice': jest.fn()
    }
    
    store = new Vuex.Store({
      state: {},
      actions,
      getters,
      mutations
    });
    
    store.dispatch = jest.fn();

		wrapper = shallowMount(ProductListOne, {
      localVue,
      store
		});
	});

  it("should init to a valid instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  describe("reducePrice", () => {

    it("dispatchs an action when reducePrice button is clicked", async () => {
      await wrapper.find('.js-reduce-price').trigger('click');
      expect(store.dispatch).toHaveBeenCalledWith('reduce_price_action', 10);
    });

    /*

    it("commits a mutation when reducePrice button is clicked", () => {
      //await wrapper.find('.js-reduce-price').trigger('click');
      expect(mutations.reducePrice).toHaveBeenCalledWith({}, 10);
    });
    */
  });
});

/*

describe('Product list one component', () => {
	let actions;
	let store;
  let wrapper;
  let getters;

	// add this before each
	beforeEach(() => {
    actions = {
			SOME_ACTION: jest.fn()
    };
    
    getters = {
      getter_1: () => 'value_1',
      getter_2: () => (arg) => arg
    }

    store = new Vuex.Store({
      state: {},
      actions
		});

		wrapper = shallowMount(ProductListOne, {
      localVue,
      store
		});
	});

  it("should init to a valid instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  });
});


*/

/*
import Vue from 'vue'
import ProductListOne from '@/components/ProductListOne.vue'

describe('ProductListOne.vue', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(ProductListOne);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})

*/

/*
import Vuex from 'vuex';
import {
  createLocalVue,
  shallow,
  shallowMount
} from 'vue-test-utils';
import ProductListOne from '../src/components/ProductListOne.vue'

// add the 2 lines below
const localVue = createLocalVue();

localVue.use(Vuex);

describe('Product list one component', () => {
	let actions;
	let store;
	let wrapper;

	// add this before each
	beforeEach(() => {
		actions = {
			SOME_ACTION: jest.fn()
		};
		store = new Vuex.Store({
			state: {},
			actions
		});

		wrapper = shallow(ProductListOne, {
			name: '',
			computed: {},
			methods: {}
		});
	});

	test('is a Vue instance', () => {
		expect(wrapper.vm.isVueInstance).toBeTruthy();
	});
});
*/

/*

    beforeEach(() => {
        //wrapper = mount(ProductListOne);
        wrapper = shallowMount(ProductListOne, {
            name: '',
            computed: {},
            methods: {}
        });
    });


    name: 'product-list-one',
    computed: {
      products() {
        return this.$store.state.products
      },
      saleProducts(){
        return this.$store.getters.saleProductsGetter
      }
    },
    methods: {
      reducePrice(amount) {
        this.$store.dispatch('reduce_price_action', amount).then(() => {
          this.$store.commit(MUTATION.REDUCE_PRICE, amount);
        });
      }
    }


*/