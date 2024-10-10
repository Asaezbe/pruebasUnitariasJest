///Test de visualizacion de componente Home
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '@/views/HomeView.vue'


describe('PostsView', () => { 
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/Home',
                name: 'HomeViewVue',
                component: HomeView
            }],
        })
        router.push('/Home')
        await router.isReady()

        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })  
 })
