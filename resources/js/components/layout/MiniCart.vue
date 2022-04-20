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
                        class="badge badge-secondary"
                        @click.prevent=""
                    >remove</a>
                </div>
            </div>
            <hr />
        </div>

        <div class="d-flex justify-content-between">
            <span>Total: </span>
            <a href="#" @click.prevent="">Clear Cart</a>
        </div>
    </div>
</template>


<script>
export default {
    name: "MiniCart.vue",
    computed: {
        carts() {
            return this.$store.state.cart.cart
        }
    }
}
</script>

<style scoped>

</style>
