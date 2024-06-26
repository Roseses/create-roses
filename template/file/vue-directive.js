// import Vue from 'vue'
// Vue.directive('noMoreClick', {
//   inserted (el, binding) {
//     el.addEventListener('click', e => {
//       el.classList.add('is-disabled')
//       el.disabled = true
//       setTimeout(() => {
//         el.disabled = false
//         el.classList.remove('is-disabled')
//       }, 2000)
//     })
//   }
// })

// v-dialogDrag: 弹窗拖拽
// Vue.directive('dialogDrag', {
//     bind (el, binding, vnode, oldVnode) {
//       const dialogHeaderEl = el.querySelector('.el-dialog__header')
//       const dragDom = el.querySelector('.el-dialog')
//       dialogHeaderEl.style.cursor = 'move'
  
//         // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
//       const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
  
//       dialogHeaderEl.onmousedown = (e) => {
//             // 鼠标按下，计算当前元素距离可视区的距离
//         const disX = e.clientX - dialogHeaderEl.offsetLeft
//         const disY = e.clientY - dialogHeaderEl.offsetTop
  
//             // 获取到的值带px 正则匹配替换
//         let styL, styT
  
//             // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
//         if (sty.left.includes('%')) {
//           styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
//           styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
//         } else {
//           styL = +sty.left.replace(/\px/g, '')
//           styT = +sty.top.replace(/\px/g, '')
//         };
  
//         document.onmousemove = function (e) {
//                 // 通过事件委托，计算移动的距离
//           const l = e.clientX - disX
//           const t = e.clientY - disY
  
//                 // 移动当前元素
//           dragDom.style.left = `${l + styL}px`
//           dragDom.style.top = `${t + styT}px`
  
//                 // 将此时的位置传出去
//                 // binding.value({x:e.pageX,y:e.pageY})
//         }
  
//         document.onmouseup = function (e) {
//           document.onmousemove = null
//           document.onmouseup = null
//         }
//       }
//     }
//   })

// 按钮权限控制
// Vue.directive('permission', {
//     // 当被绑定的元素插入到DOM中时……
//     inserted: function (el, binding, vnode) {
//       const { value } = binding;
//       const allPermissions = {}; // 用户所有的可操作权限
//       let hasPermission = Object.prototype.hasOwnProperty.call(allPermissions, value);
//       if (value === 'common') {
//         hasPermission = true;
//       }
//       if (!hasPermission) {
//         el.parentNode && el.parentNode.removeChild(el)
//         return false
//       }
//     }
//   });

// tip: 在vue项目的main文件中引入