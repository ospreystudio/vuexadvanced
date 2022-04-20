import axios from "axios";

const state = {
    cart: []
}

const actions = {
    addProductCart({commit}, {product, quantity}) {
        commit('add_to_cart', {product, quantity})
    }
}

const mutations = {
    add_to_cart(state, {product, quantity}){
        state.cart.push({
            product,
            quantity
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

