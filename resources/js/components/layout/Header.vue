<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <div class="nav navbar-nav">
                    <router-link to="/" class="nav-tem nav-link active">Home</router-link>
                    <a class="nav-item nav-link" href="#">Product</a>
                </div>

                <div>
                    <div class="dropdown open">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="triggerId"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >{{ cartItem }} Cart</button>
                        <div>
                            <mini-cart />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import MiniCart from "./MiniCart";
export default {
    components: { MiniCart },
    computed: {
        ...mapGetters({
            cartItem: 'cart/cartItemCount'
        })
    }
};
</script>

<style>
</style>

