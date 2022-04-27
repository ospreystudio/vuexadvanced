import axios from "axios";

const state = {
    products: [],
    product: null,
    cart: [],
}

const actions = {
    getProducts({commit}) {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(response => {
                commit('set_products', response.data)
            })
    },
    getProduct({commit}, productId) {
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
            .then(response => {
                commit('set_product', response.data)
            })
    },
}

const mutations = {
    set_products(state, products) {
        state.products = products
    },
    set_product(state, product) {
        state.product = product
    },
}


const getters = {}

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

