<template>
  <div id="app1" class="app1">
    <div class="text">vue 文字图片组件</div>
    <view-avatar enablePopper text="蜜蜂噶水淀粉"></view-avatar>
    <view-avatar enablePopper text="信息发生地方2f发撒的">
      <span slot="popper-text">信息发生地方</span>
    </view-avatar>
    <view-avatar text="哈哈" borderRadius="50%"></view-avatar>
    <view-avatar quickWidth="20px" textImgError text="错误" borderRadius="50%" src="https://sdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"></view-avatar>
    <view-avatar src="http://sss.png" textImgError text="错误"></view-avatar>
    <view-avatar bgColor="red" color="blue" text="前端"></view-avatar>
    <view-avatar :bgColors="['blue']" :colors="['#fff']" text="大神3"></view-avatar>
  </div>
</template>

<script>
import ViewAvatar from '../dist/'
console.log(ViewAvatar);
 
export default {
  name: 'App',
  components: { ViewAvatar },
  mounted () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.text {
  margin-bottom: 100px;
}
</style>
