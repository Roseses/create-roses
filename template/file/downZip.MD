# 版本
```
"file-saver": "^2.0.5",
"jszip": "^3.10.1",
"xe-utils": "^3.5.25"
```

# 使用
```
const res = async () => {
    try {
        const result = await downZip('now', [{ name: 'xxx.txt', data: 'xxx'}])
        console.log(result, '--------result')
    } catch (e) {
        console.log(e, '---------下载文件报错了')
    }
}
res()
```

# 代码
```
import JSZip from "jszip";
import isArray from "xe-utils/isArray";
import isPlainObject from 'xe-utils/isPlainObject'
import { saveAs } from 'file-saver';
import endsWith from 'xe-utils/endsWith'

export interface Item {
  /**
   * 文件名
   */
  name: string,

  /**
   * 文件内容
   */
  data: any
}

/**
 * 下载压缩文件
 *
 * @param { String } neme 文件名
 * @param { Array } arr 文件列表
 * @return {Object} { success: boolean, msg?: string  // 报错时返回}
 */
const downZip = (name: string = '', arr: Item[]) => {
  return new Promise((resolve, reject)=> {
    if (!name.trim()) {
      reject({
        success: false,
        message: '文件名不能为空'
      })
    }
    // 整合参数
    const list = arr.reduce((total: any, cur: Item) => {
      if (isArray(cur)) {
        total = [...total, ...cur]
      }
      if (isPlainObject(cur)) {
        total = [...total, cur]
      }
      return total
    }, [])
    if (!list.length) {
      reject({
        success: false,
        msg: '无可下载文件'
      })
    }
    const errorNum = list.filter((it: Item)=> !it.name.trim()).length
    if (errorNum) {
      reject({
        success: false,
        msg: '存在文件名不合法的文件'
      })
    }
    // 开始下载
    const zip = new JSZip();
    list.forEach((it: Item) => {
      zip.file(it.name, it.data);
    })
    zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, endsWith(name, '.zip') ? name : `${name}.zip`);
      resolve({
        success: true
      })
    }).catch(err => {
      reject({
       success: false,
        msg: err
      })
    })
  })
}

export default downZip

```
