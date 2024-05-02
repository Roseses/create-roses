```
import isArray from 'xe-utils/isArray'
import isNumber from 'xe-utils/isNumber'
import isFunction from 'xe-utils/isFunction'
import isPlainObject from 'xe-utils/isPlainObject'
import isEmpty from 'xe-utils/isEmpty'
import getType from 'xe-utils/getType'
import clone from 'xe-utils/clone.js'
import assign from 'xe-utils/assign'
import pick from 'xe-utils/pick.js'
import omit from 'xe-utils/omit'
import throttle from 'xe-utils/throttle'
import debounce from 'xe-utils/debounce'
import add from 'xe-utils/add'
import subtract from 'xe-utils/subtract'
import divide from 'xe-utils/divide'
import multiply from 'xe-utils/multiply'
import max from 'xe-utils/max'
import min from 'xe-utils/min'



/**
 *  工具类
 *
 *  文档: https://x-extends.github.io/xe-utils
 *
 *  isArray(obj) 是否数组
 *
 *  isNumber(obj) 是否数字
 *
 *  isFunction(obj) 是否函数
 *
 *  isPlainObject(obj) 是否对象
 *
 *  isEmpty(obj) 是否为空对象
 *
 *  getType(obj) 获取对象类型
 *
 *  clone (obj, deep) deep: 不传或者false 浅拷贝; deep: true -- 深拷贝
 *
 *  pick (obj, array) 根据 keys 过滤指定的属性值 或者 接收一个判断函数，返回一个新的对象
 *
 *  omit (obj, array) 根据 keys 排除指定的属性值 或者 接收一个判断函数，返回一个新的对象
 *
 *  throttle (callback, wait[, options]) 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
 *
 *  debounce (callback, wait[, options]) 防抖函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则重新计时
 */

/**
 * 数学类函数
 */
const numberMethods = {
  add,
  divide,
  subtract,
  multiply,
  max,
  min
}

/**
 * 类型判断函数
 */
const typeMethods = {
  isArray,
  isNumber,
  isFunction,
  isPlainObject,
  isEmpty,
  getType
}

const utils = {
  clone,
  assign,
  pick,
  omit,
  throttle,
  debounce
}

assign(utils, numberMethods, typeMethods)

export default utils

export {
  add,
  divide,
  subtract,
  multiply,
  min,
  max,
  numberMethods,
  isArray,
  isNumber,
  isFunction,
  isPlainObject,
  isEmpty,
  getType,
  typeMethods,
  clone,
  assign,
  pick,
  omit,
  throttle,
  debounce
}
```
