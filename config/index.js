
// 配置命令参数
export const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];

// 帮助命令
export const helpSections = [
  {
    header: 'create-roses',
    content: '一个快速生成模板项目或模块文件的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];

// 模块文件的选择 value: 必须为template/file/ 下的文件名
const fileTemplateList = [
  { title: 'decimal.js (decimal.js-ts语法-简单封装)', value: 'decimal.ts' },
  {
    title: 'lodash-fix-weapp (小程序-lodash-修复构建后全局变量undefinde问题)',
    value: 'lodash-fix.js'
  },
  {
    title: 'vue-directive (vue自定义指令-js文件-按钮无法重复点击/elementui弹窗拖拽/按钮权限控制)',
    value: 'vue-directive.js'
  }
]

// 项目模板的选择
const templateList = [
  { title: 'rosesyest', value: 1 },
  { title: 'vitepress', value: 2 },
  { title: 'express + ts', value: 3 },
  { title: 'nodebat', value: 4 },
  { title: 'monorepe-template', value: 5},
  { title: 'vite+vue3+ts-template', value: 6 }
]

// git模板项目地址
export const remoteList = {
  1: 'https://github.com/Roseses/rosesyest.git',
  2: 'https://github.com/Roseses/vitepress-demo.git',
  3: 'https://github.com/Roseses/express-ts-demo.git',
  4: 'https://github.com/Roseses/nodebat.git',
  5: 'https://github.com/Roseses/monorepe-template.git',
  6: 'https://github.com/Roseses/vite-ts-vue3-template.git'
};

export const promptsOptions = [
  {
    type: 'select', // 单选
    name: 'type',
    message: '请问您是需要下载模块文件还是下载项目',
    choices: [
      { title: '模块', value: 1 },
      { title: '项目', value: 2 }
    ]
  },
  {
    type: prev => prev === 2 ? 'text' : null,
    name: 'name',
    message: '请输入模板名称',
    initial: 'template-name'
  },
  {
    type: (_, result) => {
      return !result.name ? null : 'select'
    }, //单选
    name: 'template',
    message: '请选择模板',
    choices: templateList
  },
  {
    type: (_, result) => {
      return result.type === 1 ? 'select' : null
    },
    name: 'fileTemplate',
    message: '请选择模块',
    choices: fileTemplateList
  }
];

// 模板的logo
export const logo = 'Roses'

// 询问是否删除
export const removePromptsList = [
  {
    type: 'toggle',
    name: 'delete',
    message: '当前目录下存在同名文件或文件夹, 删除后才能继续下载, 是否删除?',
    initial: false,
    active: 'yes',
    inactive: 'no'
  }
]
