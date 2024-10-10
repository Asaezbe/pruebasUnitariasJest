///Foto test estructura html componente About

import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView Snapshot', () => {
    test('debería hacer match con el snapshot actual', () => {
        // Montar el componente
        const wrapper = mount(AboutView)

        // Crear el snapshot de la estructura HTML
        expect(wrapper.html()).toMatchSnapshot()
    })
})