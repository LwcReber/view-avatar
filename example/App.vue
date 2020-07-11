<template>
  <div id="app" class="app">
    <h1 class="text">Vue 文字图片组件</h1>
    <!-- 文字方式 -->
    <h3>文字方式</h3>
    <view-avatar text="的发生发送到"></view-avatar>
    <view-avatar text="哈哈" borderRadius="50%"></view-avatar>
    <p>背景颜色，文字颜色可以改动</p>
    <view-avatar bgColor="red" color="blue" text="前端"></view-avatar>
    <p>定义颜色组，根据文字md，自动使用不同颜色</p>
    <view-avatar :bgColors="['blue', '#E19087']" :colors="['#fff', 'red']" text="我说大神"></view-avatar>
    <view-avatar :bgColors="['blue', '#E19087']" :colors="['#fff', 'red']" text="厉害"></view-avatar>

    <h3>带poppver提示信息</h3>
    <view-avatar enablePopper text="蜜蜂噶水淀粉"></view-avatar>
    <view-avatar enablePopper text="信息发生地方2f发撒的">
      <span slot="popper-text">信息发生地方</span>
    </view-avatar>

    <!-- 图片方式 -->
    <h3>图片方式</h3>
    <ul>
      <li>
        常规 <view-avatar src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1678948314,1083480950&fm=26&gp=0.jpg"></view-avatar>
      </li>
      <li>
        快速设置宽高
        <view-avatar quickWidth="60px" textImgError text="漂亮" borderRadius="50%" src="https://sdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"></view-avatar>
      </li>
      <li>
        图片出现错误时，自动变成文字显示
        <view-avatar src="https://xxxx.png" textImgError text="错误"></view-avatar>
      </li>
      <view-avatar src="https://xxxx.png">
        <span name="imgError">aaa</span>
      </view-avatar>

    </ul>

    <h3>没有文字，图片的，直接写slot显示</h3>
    <view-avatar width="auto">
      <span>没有文字图片</span>
    </view-avatar>
  </div>
</template>

<script>
import ViewAvatar from '../dist'
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
ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.text {
  margin-bottom: 100px;
}
</style>
