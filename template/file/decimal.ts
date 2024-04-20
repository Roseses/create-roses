// import Decimal from 'decimal.js'

/**
 * @description decimal.js  "^10.4.3",
 *  pnpm add decimal.js   or   npm i decimal.js
 * 
 * 方法文档 http://mikemcl.github.io/decimal.js
 */
const Decimal = (x: any) => {}

/**
 * @description 两数相乘
 * @param x 
 * @param y 
 * @returns 
 */
export function mul(x: any, y: any) {
    if (!x) {
      x = 0;
    }
    if (!y) {
      y = 0;
    }
    return new Decimal(x).mul(new Decimal(y)).toNumber();
  }
  

/**
 * @description 两数相加
 * @param x 
 * @param y 
 * @returns 
 */
export function plus(x: any, y: any) {
    if (!x) {
    x = 0;
    }
    if (!y) {
    y = 0;
    }
    return new Decimal(x).plus(new Decimal(y)).toNumber();
}
  

/**
 * @description 两数相减
 * @param x 
 * @param y 
 * @returns 
 */
export function sub(x: any, y: any) {
    if (!x) {
        x = 0;
    }
    if (!y) {
        y = 0;
    }
    return new Decimal(x).sub(new Decimal(y)).toNumber();
}

/**
 * @description 两数相除
 * @param x 被除数
 * @param y 除数
 * @returns 商
 */
export function div(x: any, y: any) {
    if (!x) {
        x = 0;
    }
    if (!y) {
        y = 0;
    }
    return new Decimal(x).div(new Decimal(y)).toNumber();
}
