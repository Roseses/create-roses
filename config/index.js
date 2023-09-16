// 配置命令参数
export const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];

// 帮助命令
export const helpSections = [
  {
    header: 'create-roses',
    content: '一个快速生成模板的脚手架'
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

export const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入模板名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'rosesyest', value: 1 },
      { title: 'vitepress', value: 2 },
      { title: 'express + ts', value: 3 },
      { title: 'nodebat', value: 4 },
      { title: 'monorepe-template', value: 5},
      { title: 'vite+vue3+ts-template', value: 6 }
    ]
  }
];

// git模板项目地址
export const remoteList = {
  1: 'https://github.com/Roseses/rosesyest.git',
  2: 'https://github.com/Roseses/vitepress-demo.git',
  3: 'https://github.com/Roseses/express-ts-demo.git',
  4: 'https://github.com/Roseses/nodebat.git',
  5: 'https://github.com/Roseses/monorepe-template.git',
  6: 'https://github.com/Roseses/vite-ts-vue3-template.git'
};

// 模板的logo
export const logo = 'Roses'

// 询问是否删除
export const removePromptsList = [
  {
    type: 'confirm',
    name: 'delete',
    message: '当前目录下存在同名文件或文件夹, 删除后才能继续下载, 是否删除?',
    initial: false
  }
]
