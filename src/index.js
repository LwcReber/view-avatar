import CusAvatar from '../package/index.js'
console.log(CusAvatar)
const install = function (Vue, opts = {}) {
  Vue.component(CusAvatar.name, CusAvatar);
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
console.log(install)

export default {
  install
}
