import Vuex from 'vuex'

import cart from './modules/cart'
import main from './modules/main'
export default new Vuex.Store({
    modules: {
        main,
        cart
    }
})
