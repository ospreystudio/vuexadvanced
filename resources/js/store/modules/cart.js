import Cart from '../../apis/Cart'

const state = {
    cart: []
}

const actions = {
    addProductCart({commit}, {product, quantity}) {
        commit('add_to_cart', {product, quantity})

        Cart.store( {
            product_id: product.id,
            quantity
        })
    },

    getCartItems({commit}) {
        Cart.all()
            .then(response => {
                commit('set_cart', response.data)
            }) . catch ((error) => {
                if (error.resource) {
                    console.log(error.response)
                }
        })
    },
    removeProduct({commit}, product) {
        commit ('remove_product', product)

        Cart.delete(product.id);
    },
    clearCart({commit}) {
        commit('clear_cart')
        Cart.deleteAll();
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
    },
    remove_product(state, product) {
      state.cart = state.cart.filter(item => {
          return item.product.id !== product.id
      })
    },
    clear_cart(state) {
        state.cart = []
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

