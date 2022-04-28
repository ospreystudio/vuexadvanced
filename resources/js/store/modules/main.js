import Product from '../../apis/Product'

const state = {
    products: [],
    product: null,
    cart: [],
}

const actions = {
    getProducts({commit}) {
        Product.all()
            .then(response => {
                commit('set_products', response.data)
            })
    },

    getProduct({commit}, productId) {
        Product.show(productId)
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

