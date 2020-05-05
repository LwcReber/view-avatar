<template>
  <popper :disabled="!enablePopper" trigger="hover"
    class="popper-wrap"
    :options="popperOptionObj">
    <span class="popper">
      <slot name="popper-text">{{text}}</slot>
    </span>
    <div slot="reference" :style="styleObj" class="avatar">
      <slot>
        <!-- 文字类型图片 -->
        <div v-if="showText">
          <slot name="text">{{avatarText}}</slot>
        </div>
        <!-- 图片类型 -->
        <img v-if="src && !isImgError" class="image" @error="imgError" :src="src">
        <!-- 图片显示错误的情况 -->
        <div v-if="showImgError" class="error">
          <slot name="imgError">?</slot>
        </div>
      </slot>
    </div>
  </popper>
</template>

<script>
  import Popper from 'vue-popperjs'
  import 'vue-popperjs/dist/vue-popper.css'
  import MD5 from 'js-md5'
  // 默认文字随机颜色组
  const DFCOLORS = ['#409EFF', '#909399', '#F56C6C', '#000000', '#E6A23C']
  const DFBGCOLORS = []
  export default {
    name: 'view-avatar',
    components: { Popper },
    props: {
      src: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '40px'
      },
      height: {
        type: String,
        default: '40px'
      },
      quickWidth: { // 尺寸宽度，设置宽高的快捷方式，
        type: String,
        default: ''
      },
      color: { // 默认颜色
        type: String,
        default: ''
      },
      colors: { // 生成的图片文字色，随机颜色组
        type: Array,
        default: () => []
      },
      bgColor: { // 默认底图颜色
        type: String,
        default: ''
      },
      bgColors: { // 底色随机颜色组， 与colors数组一一对应
        type: Array,
        default: () => []
      },
      borderRadius: { // 显示方式，设置为string的方式时，可以显示为圆形的方式，也可以设置关闭，默认有2px的border
        type: [String, Boolean],
        default: false
      },
      textImgError: { // 当图片显示错误时是否使用文字的方式显示图片，如不使用则默认用图片错误的方式处理
        type: Boolean,
        default: false
      },
      styles: {
        type: Object,
        default: () => {}
      },
      enablePopper: {
        type: Boolean,
        default: false
      },
      placement: {
        type: String,
        default: 'top'
      },
      popperOptions: {
        type: Object,
        default: () => {
          return {
            modifiers: { offset: { offset: '0, 5px' } }
          }
        }
      }
    },
    watch: {
      text (newVal) {
        this.create(newVal)
      }
    },
    computed: {
      styleObj () {
        let borderRadius = this.borderRadius ? { borderRadius: this.borderRadius } : {}
        return {
          width: this.quickWidth ? this.quickWidth : this.width,
          height: this.quickWidth ? this.quickWidth :  this.height,
          lineHeight: this.quickWidth ? this.quickWidth :  this.height,
          color: this.color ? this.color : this.textColor,
          backgroundColor: this.bgColor ? this.bgColor : this.cbgColor,
          borderRadius: this.borderRadius ? this.borderRadius : '',
          ...this.styles,
        }
      },
      showText () {
        if (this.textImgError) { // 当图片显示错误时使用文字的方式显示，此方式需要配合src使用
          return true
        }
        if (!this.src && this.text) {
          return true
        }
        return false
      },
      showImgError () {
        if (!this.src) {
          return false
        }   
        if (this.textImgError) {
          return false
        }
        if (this.src && this.isImgError) {
          return true
        } 
        return false
      },
      popperOptionObj () {
        return {
          placement: this.placement,
          ...this.popperOptions
        }
      }
    },
    mounted () {
      this.create(this.text)
    },
    data () {
      return {
        avatarText: '',
        textColor: '',
        cbgColor: '',
        isImgError: false
      }
    },
    methods: {
      create (str) {
        let reg = /^[A-Az-z]+$/
        str = str.trim()
        this.avatarText = reg.test(str) ? str.slice(0, 2) : str.slice(str.length - 2, str.length)
        let md5str = MD5(str)
        let firstEle = isNaN(parseInt(md5str.slice(0, 1))) ? md5str.slice(0, 1).toLowerCase().charCodeAt() - 97 : md5str.slice(0, 1)
        let length = this.colors.length
        let mapColor = ((length && this.colors) || DFCOLORS)
        let bgColors = length && this.bgColors || DFBGCOLORS
        let index = length ? (firstEle % length) : (firstEle % DFCOLORS.length)
        this.textColor = mapColor[index] || '#000'
        this.cbgColor = bgColors[index] || '#eee'
      },
      // img显示错误时
      imgError () {
        console.log('error')
        this.isImgError = true
        this.$emit('imgErr')
      }
    }
  }
</script>

<style lang="less" scoped>
  .avatar {
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    background-color: #eee;
    overflow: hidden;
  }
  .error {
    color: #ddd;
  }
  .image {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
  .popper {
    background: #303133;
    color: #fff;
    border-color: transparent;
    box-shadow: none;
  }

</style>
<style lang="less">
  @bgColor:#303133;
  .popper {
    &[x-placement] .popper__arrow {
      border-style: solid;
    }
    &[x-placement^="top"] .popper__arrow {
      border-top-color: @bgColor;
    }
    &[x-placement^="right"] .popper__arrow {
      border-right-color: @bgColor;
    }
    &[x-placement^="bottom"] .popper__arrow {
      border-bottom-color: @bgColor;
    }
    &[x-placement^="left"] .popper__arrow {
      border-left-color: @bgColor;
    }
  }
</style>
