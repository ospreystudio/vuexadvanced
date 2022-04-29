<template>
    <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        {{ notification.message }}
    </div>
</template>

<script>


export default {
    name: "NotificationMessage",
    props: ["notification"],

    computed: {
        typeClass() {
            return `alert-${this.notification.type}`;
        }
    },

}
</script>

<style scoped>

</style>
