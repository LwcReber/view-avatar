import CusAvatar from '../package/index.js'
const install = function (Vue, opts = {}) {
  Vue.component(CusAvatar.name, CusAvatar);
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}
