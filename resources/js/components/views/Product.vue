<template>
    <div class="row mt-5" >
        <div class="col-4">
            <img class="w-100" />
        </div>
        <div class="col-8">
            <h1></h1>
            <h3></h3>

            <input type="text"  class="text-center col-1 mr-2 p-1" />
            <button class="btn btn-primary" @click="">Add to Cart</button>

            <p class="mt-4"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],

};
</script>

<style>
</style>
