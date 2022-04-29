import Product from '../../apis/Product'

const state = {
    notifications: []
}

const actions = {
    addNotification({commit}, notification) {
        commit('push_notification', notification)
    }
}

const mutations = {
    push_notification(state, notification) {
        state.notifications.push({
            ...notification,
            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
            })
    }
}


const getters = {}

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

