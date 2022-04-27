<template>
    <div
        class="dropdown-menu p-2"
        style="min-width:320px; right:0; left:auto"
        aria-labelledby="triggerId"
    >
        <div v-for="item in carts" :key="item.product.id">
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>{{ item.product.title }}</strong>
                    <br /> {{ item.quantity }} X  {{ item.product.price }}

                </div>
                <div>
                    <a
                        href="#"
                        @click.prevent="removeProduct(item.product)"
                    >remove</a>
                </div>
            </div>
            <hr />
        </div>

        <div class="d-flex justify-content-between">
            <span>Total: ${{ cartPrice }} </span>
            <a href="#" @click.prevent="clearCart">Clear Cart</a>
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "MiniCart.vue",
    mounted() {
      this.getCartItems()
    },
    computed: {
        carts() {
            return this.$store.state.cart.cart
        },
        ...mapGetters({
            cartPrice: 'cart/cartPrice'
        })
    },
    methods: {
        ...mapActions("cart", [
            'getCartItems'
        ]),
        removeProduct(product) {
            this.$store.dispatch('cart/removeProduct', product)
        },
        clearCart() {
            this.$store.dispatch('cart/clearCart')
        }
    },


}
</script>

<style scoped>

</style>
