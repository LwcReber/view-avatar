// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import { wait } from '../utils'
import Vue from 'vue'
import ViewAvatar from '../../package/src/index'
const src = "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1678948314,1083480950&fm=26&gp=0.jpg"
const failSrc = ""
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

  it('自定义颜色组，根据文字md5，计算出显示不同的颜色', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        bgColors: ['blue', '#e19087'],
        colors: ['#fff', 'red'],
        text: "我说大神"
      }
    })
    await Vue.nextTick()
    expect(wrapper.vm.showText).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
    
    expect(wrapper.find('.vwa-avatar').element.style.backgroundColor).toBe('rgb(225, 144, 135)')
    expect(wrapper.find('.vwa-avatar').element.style.color).toBe(wrapper.vm.textColor)
  })

  it('纯图片方式', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        src
      }
    })
    await Vue.nextTick()
    expect(wrapper.vm.showText).toBe(false)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(src)
    
  })

  it('设置宽高', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        src,
        width: '50px',
        height: '50px',
      }
    })
    await Vue.nextTick()
    expect(wrapper.find('.vwa-avatar').element.style.width).toBe('50px')
    expect(wrapper.find('.vwa-avatar').element.style.height).toBe('50px')
  })

  it('快捷设置宽高', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        src,
        quickWidth: '50px'
      }
    })
    await Vue.nextTick()
    expect(wrapper.find('.vwa-avatar').element.style.width).toBe('50px')
    expect(wrapper.find('.vwa-avatar').element.style.height).toBe('50px')
  })

  it('设置border-radius', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        src,
        borderRadius: '4px'
      }
    })
    await Vue.nextTick()
    expect(wrapper.find('.vwa-avatar').element.style.borderRadius).toBe('4px')
  })

  it('图片出错时，使用文字方式替代图片显示', async () => {
    const wrapper = mount(ViewAvatar, {
      propsData: {
        src: failSrc,
        textImgError: true,
        text: "错误"
      }
    })
    await Vue.nextTick()
    expect(wrapper.html()).toContain('错误')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('图片文字都不设置，使用slot显示', async () => {
    const wrapper = mount(ViewAvatar, {
      slots: {
        default: '<div>defatul</div>'
      }
    })
    await Vue.nextTick()
    expect(wrapper.html()).toContain('<div>defatul</div>')
  })

})
