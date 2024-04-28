# 学习文档
- 仓库地址
```
https://github.com/ecomfe/vue-echarts
```

- 文档地址
```
https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md
```

# 版本依赖
- 基于vue2
```
"vue": "^2.6.11",
"echarts": "^4.9.0",
"vue-echarts": "^5.0.0-beta.0"
```

- 基于vue3版本使用的echarts、vue-echarts依赖包版本：
```
"echarts": "^5.2.2",
"vue":"^3.2.16",
"vue-echarts": "^6.0.0"
```

# 引入
```
//引入echarts
// eslint-disable-next-line
import * as echarts from 'echarts'
//引入vue-echarts
import VueEcharts from 'vue-echarts'

//注册为全局组件
Vue.component('v-chart', VueEcharts)

```

# 使用
```
<template>
    <Charts
        :category="category"
        :series="series"
    >
    </Charts>
</template>
<script>
export default {
  data () {
    return {
      tableData: [] // 数据   
    }  
  },
  computed: {
    category () {
      // 根据需要返回x轴分类 string[] 
      return []
    },
    series () {
      // 根据需要返回y轴数据 object[]
      // exmple { name:string, data: number[], barMaxWidth?: number, type: 'line' | 'bar'}[]
      return []
    }
  }
}
</script>
```
```
<template>
  <div class="home">
    <!--
      参数说明：
      1.options:要传入的setOption配置数据
      2.autoresize:图表在组件根元素尺寸变化时是否需要自动进行重绘(自动缩放图表)
     -->
    <v-chart :options="data1" :autoresize="true"/>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default: ()=> []
    },
    legendData: {
      type: Array,
      default: () => ["充电时长（分钟）", '充电电量（度）'],
    },
    series: {
      type: Array,
      default: ()=>[]
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    data1(){
      return {
        color: ['#5470c6', '#91cc75', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        tooltip: {},
        legend: {
          data: this.legendData
        },
        xAxis: {
          type: 'category',
          data: this.category,
        },
        yAxis: {
          type: 'value'
        },
        series: this.series
      }
    }
  }

};
</script>
<style scoped>
.echarts {
  margin: 0 auto;
  width:100%;
}
</style>

```
