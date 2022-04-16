<template>
    <div
        class="dropdown-menu p-2"
        style="min-width:320px; right:0; left:auto"
        aria-labelledby="triggerId"
    >
        <div>
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong></strong>
                    <br />

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

</script>

<script>
export default {
    name: "MiniCart.vue"
}
</script>

<style scoped>

</style>
