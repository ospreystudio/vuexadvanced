import Vuex from 'vuex'

import notifications from "./modules/notifications";
import cart from './modules/cart'
import main from './modules/main'
export default new Vuex.Store({
    modules: {
        main,
        cart,
        notifications
    }
})
