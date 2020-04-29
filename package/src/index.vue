<template>
  <div>
    <div>{{avatarText}}</div>
    <img :src="src" class="avatar">
  </div>
</template>

<script>
  import MD5 from 'js-md5'
  export default {
    name: 'cus-avatar',
    props: {
      src: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: 'fsadfds'
      },
      mapColors: { // 
        type: Array,
        default: () => []
      }
    },
    watch: {
      text (newVal) {
        this.create(newVal)
      }
    },
    mounted () {
      this.create(this.text)
    },
    data () {
      return {
        avatarText: '',
        color: '',
        bgColor: ''
      }
    },
    methods: {
      create (str) {
        let reg = /^[A-Az-z]+$/
        str = str.trim()
        this.avatarText = reg.test(str) ? str.slice(0, 2) : str.slice(str.length - 2, str.length)
        let md5str = MD5(str)
        console.log(this.avatarTextstr)
        let firstEle = isNaN(parseInt(md5str.slice(0, 1))) ? md5str.slice(0, 1).toLowerCase().charCodeAt() - 97 : md5str.slice(0, 1)
        let mapColor = ((this.mapColors.length && this.mapColors) || ['#567890', '#000000', '#222222', '#777777', '#666666'])
        let bgColors = {}
        this.color = `${mapColor[firstEle % 5]}`
        this.bgColor = bgColors[this.color]
      }
    }
  }
</script>

<style scoped>

</style>
