<template>
    <Header />
    <div class="row mt-5" v-if="product" >
        <div class="col-4">
            <img :src="product.image" class="w-100" />
        </div>
        <div class="col-8">
            <h1>{{ product.title }}</h1>
            <h3>{{ product.price }}</h3>

            <input type="text"  class="text-center col-1 mr-2 p-1" />
            <button class="btn btn-primary" @click="addToCard">Add to Cart</button>
            <p class="mt-4"> {{ product.description }} </p>
        </div>
    </div>
</template>
y<script>
import Header from "../layout/Header";
export default {
    props: ["id"],
    components: {
        Header
    },
    mounted() {
        this.$store.dispatch('main/getProduct', this.id)
    },
    computed: {
        product() {
            return this.$store.state.main.product;
        }
    },
    methods: {
        addToCard() {
            this.$store.dispatch('cart/addProductCart', {
                product: this.product,
                quantity: 1
            })
        }
    }
}
</script>

<style>
</style>
