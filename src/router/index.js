import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../components/Landing'
import Chat from '../components/Chat'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path:'/',
            name:"landing",
            component : Landing
        },
        {
            path:'/chat',
            name:"chat",
            component : Chat
        }
    ]
})