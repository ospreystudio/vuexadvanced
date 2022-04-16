<template>
    <Header />
    <Product />
</template>

<script>

import Header from "../layout/Header";
import Product from "./Product";
export default {
    name: "Home.vue",
    components: {
        Product,
        Header
    }
}
</script>

<style scoped>

</style>
