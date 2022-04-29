<template>
    <div class="notifications-list">
        <NotificationMessage v-for="notification in notifications" :key="notification.id" :notification="notification"/>
    </div>
</template>

<script>

import NotificationMessage from "./NotificationMessage";
export default {
    name: "NotificationList",
    components: {
        NotificationMessage
    },
    computed: {
        notifications() {
            return this.$store.state.notifications.notifications
        }
    }

}
</script>

<style scoped>
.notifications-list {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 320px;
}
</style>
