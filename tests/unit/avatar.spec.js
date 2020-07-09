// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import ViewAvatar from '../../package/src/index'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  
  it('纯文字方式，只有文字',  async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        text: "的发生发送到"
      }
    })
    await Vue.nextTick()
    expect(wrapper.vm.showText).toBe(true)
    expect(wrapper.find('.vwa-text').text()).toContain('送到')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('只有文字, 改变底色和文字颜色',  async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        bgColor: "red",
        color: "blue",
        text: "前端"
      }
    })
    await Vue.nextTick()
    expect(wrapper.vm.showText).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
    
    expect(wrapper.find('.vwa-avatar').element.style.backgroundColor).toBe('red')
    expect(wrapper.find('.vwa-avatar').element.style.color).toBe('blue')
  })

})
