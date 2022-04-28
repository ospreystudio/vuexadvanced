import Api from './Api'

const end_point = 'cart'

export default {
    all() {
        return Api.get(end_point)
    },

    store(data) {
        return Api.post(end_point, data)
    },

    delete(id) {
        return Api.delete(`${end_point}/${id}`)
    },

    deleteAll() {
        return Api.delete(end_point)
    }
}
