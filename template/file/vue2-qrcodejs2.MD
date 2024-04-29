# 安装
```
npm install qrcodejs2
```

# 使用
```
<template>
    <div id="qrCode" ref="qrCodeDiv"/>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  data() {
    return {
      qrcode: null
    }
  },
  methods: {
    // 生成二维码
    creatQrcode(item) {
      if (this.qrcode) {
        this.qrcode.clear()
      }
 
      this.qrcode = new QRCode('qrcode', {
        text:item.code, // 二维码的内容
        width: 128,
        height: 128,
        colorDark: 'transparent',
        colorLight:'#000'，
        correctLevel: QRCode.CorrectLevel.M // 容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      })
      this.qrcode._el.title = '' // 鼠标移入二维码会展示原生title，如果不需要就可以将title置为空
    }
  }
}
</script>
```
