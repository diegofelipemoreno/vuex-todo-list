<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(10)">Reduce price</button>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import * as MUTATION from '../store/mutation-types';

  export default {
    name: 'product-list-two',
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
  }
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>