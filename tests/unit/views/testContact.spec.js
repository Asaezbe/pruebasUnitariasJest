///Test de visualizacion de componente Contact
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'


import ContactView from '@/views/ContactView.vue'


describe('PostsView', () => { 
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/Contact',
                name: 'ContactViewVue',
                component: ContactView
            }],
        })
        router.push('/Contact')
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })  
 })
