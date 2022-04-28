import Api from './Api'

const end_point = 'products'

export default {
    all() {
        return Api.get(end_point)
    },
    show(id) {
        return Api.get(`${end_point}/${id}`)
    }
}
