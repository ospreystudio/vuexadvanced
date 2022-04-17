<template>
    <Header />
    <ProductList />
    <Product />

</template>

<script>

import ProductList from "../layout/ProductList";
import Header from "../layout/Header";
import Product from "./Product";
export default {
    name: "Home.vue",
    components: {
        Product,
        Header,
        ProductList
    }
}
</script>

<style scoped>

</style>
