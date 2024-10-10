///Foto test estructura html componente Home

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView Snapshot', () => {
    test('debería hacer match con el snapshot actual', () => {
        // Montar el componente
        const wrapper = mount(HomeView)

        // Crear el snapshot de la estructura HTML
        expect(wrapper.html()).toMatchSnapshot()
    })
})