#### **a vue component -> view-avatar**



源码文件 /src/index



打包后文件 /dist/index





#### How to use



1. 安装 `npm i -D view-avatar`



2. 在.vue文件中引入

​    
  ```javascript
    <script>    
    import ViewAvatar from 'view-avatar'
    export default {
      components: { ViewAvatar }
    }

    </script>
  ```

具体请运行  `npm run dev` 查看demo

代码请看example文件夹



####  Attributes  

| 参数          | 说明                                                         | 类型          | 可选值 | 默认值 |
| :------------ | ------------------------------------------------------------ | ------------- | ------ | ------ |
| src           | 图片src地址                                                  | String        | —      | —      |
| text          | 生成图片的源文字                                             | String        | —      | —      |
| width         | 宽度                                                         | String （px） |        |        |
| height        | 高度                                                         | String （px） |        |        |
| quickWidth    | 当不想使用width，height，使用此属性可以直接设置宽高一样的值  | String （px） |        |        |
| color         | 文字默认颜色                                                 | String        | —      | —      |
| bgColor       | 图片默认底色                                                 | String        |        |        |
| colors        | 图片的文字颜色组，当不设置color时，根据文字MD5的值，设置图片的文字颜色 | String        |        |        |
| bgColors      | 图片的底色颜色组，当不设置bgColor时，根据文字MD5的值，设置图片的底色颜色 | String        |        |        |
| borderRadius  | 图片显示形状，可以显示为圆形的方式，也可以设置关闭，默认有2px的border-radius | String        |        |        |
| textImgError  | 当图片显示错误时是否使用文字的方式显示图片，如不使用则默认用图片错误的方式处理 | Boolean       | false  |        |
| styles        | 图片的颜色style样式，可以覆盖文字，底色颜色等                | Object        | {}     |        |
| enablePopper  | 是否使用popper显示图片的信息，tooltips的效果                 | Boolean       | false  |        |
| placement     | 使用的popper出现的位置（top， right， bottom， left）        | String        | top    |        |
| popperOptions | popper的options属性（vue-popperjs）                          |               |        |        |







#### LICENSE

[MIT](https://github.com/LwcReber/view-avatar/blob/master/LICENSE)