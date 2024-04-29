# 版本
```
"qrcodejs2": "0.0.2",
"html2canvas": "^1.4.1"
```

# 使用
```
<template>
  <div>
    <div
      :id="id"
      :ref="id"
      style="width: 100%;height: 100%;"
    ></div>
    <slot :data="downImg"></slot>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    text: { // 后端返回的二维码地址
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '128'
    },
    height: {
      type: String,
      default: '128'
    },
    colorDark: {
      type: String,
      default: '#000000'
    },
    colorLight: {
      type: String,
      default: '#ffffff'
    }
  },
  data () {
    return {
      qrcode: ''
    }
  },
  watch: {
    text (newText) {
      this.createQrcode()
    }
  },
  mounted () {
    this.createQrcode()
  },
  methods: {
    createQrcode () {
      if (this.qrcode) { // 有新的二维码地址了，先把之前的清除掉
        this.$refs[this.id].innerHTML = ''
      }
      this.qrcode = new QRCode(this.$refs[this.id], {
        text: this.text, // 页面地址 ,如果页面需要参数传递请注意哈希模式#
        width: this.width, // 二维码宽度 （不支持100%）
        height: this.height, // 二维码高度 （不支持100%）
        colorDark: this.colorDark,
        colorLight: this.colorLight,
        correctLevel: QRCode.CorrectLevel.H
      })
      console.log(this.qrcode)
    },
    // 制作另一个二维码
    updateCode () {
      this.qrcode.makeCode('http://naver.com')
    },
    // 下载二维码
    downImg () {
      const qrcodeContainer = document.getElementById(this.id)
      html2canvas(qrcodeContainer).then(canvas => {
        const imgData = canvas.toDataURL()
        const link = document.createElement('a')
        link.href = imgData
        link.download = '二维码.png'
        link.click()
      })
    }
  }
}
</script>
```
