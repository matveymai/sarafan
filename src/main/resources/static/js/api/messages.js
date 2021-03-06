import Vue from 'vue'

const messages = Vue.resource('/message{/id}')

export default {
    add: message => messages.save({},message),
    update: message => messages.update({id : message.id},message),
    remove: message => messages.remove(message),
    page: page => Vue.http.get('/message', { params: { page }})
}