<template>
    <Header />
    <ProductList />
    <NotificationList />
    <Product />

</template>

<script>

import NotificationList from "../layout/NotificationList";
import ProductList from "../layout/ProductList";
import Header from "../layout/Header";
import Product from "./Product";
export default {
    name: "Home.vue",
    components: {
        Product,
        Header,
        ProductList,
        NotificationList
    }
}
</script>

<style scoped>

</style>
