///Test de visualizacion de componente About
import { mount } from '@vue/test-utils'  
import { createRouter, createWebHistory } from 'vue-router'


import AboutView from '@/views/AboutView.vue'


describe('PostsView', () => { 
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/About',
                name: 'AboutViewVue',
                component: AboutView
            }],
        })
        router.push('/About')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })  
 })
