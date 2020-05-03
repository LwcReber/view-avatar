<template>
  <div id="app1" class="app1">
    <div class="text">vue 文字图片组件</div>
    <cus-avatar enablePopper text="蜜蜂噶水淀粉"></cus-avatar>
    <cus-avatar text="哈哈" borderRadius="50%"></cus-avatar>
    <cus-avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"></cus-avatar>
    <cus-avatar src="http://sss.png" textImgError text="错误"></cus-avatar>
    <cus-avatar bgColor="red" color="blue" text="前端"></cus-avatar>
    <cus-avatar :bgColors="['blue']" :colors="['#fff']" text="大神3"></cus-avatar>
  </div>
</template>

<script>
export default {
  name: 'App',
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
