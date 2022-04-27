import axios from "axios";

const state = {
    cart: []
}

const actions = {
    addProductCart({commit}, {product, quantity}) {
        commit('add_to_cart', {product, quantity})

        axios.post('http://127.0.0.1:8000/api/cart', {
            product_id: product.id,
            quantity
        })
    },

    getCartItems({commit}) {
        axios.get('http://127.0.0.1:8000/api/cart')
            .then(response => {
                commit('set_cart', response.data)
            }) . catch ((error) => {
                if (error.resource) {
                    console.log(error.response)
                }
        })
    }
}

const mutations = {
    add_to_cart(state, {product, quantity}){

        let productCart = state.cart.find(item => {
            return item.product.id === product.id
        })
        if (productCart) {
            productCart.quantity += quantity
            return
        }
        state.cart.push({
            product,
            quantity
        })
    },
    set_cart(state, cartItems) {
        state.cart = cartItems
    }
}


const getters = {
    cartItemCount(state) {
        return state.cart.length
    },
    cartPrice(state) {
        let total = 0;

        state.cart.forEach(item => {
            total += item.product.price * item.quantity;
        })

        return total
    }
}

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

