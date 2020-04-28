import CusAvatar from './src/index.vue';
/* istanbul ignore next */
CusAvatar.install = function(Vue) {
  Vue.component(CusAvatar.name, CusAvatar);
};

export default CusAvatar;
