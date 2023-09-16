module.exports = {
    base:'/roses/',  
    title: 'roses-ui', 
    //首页的描述
    description: '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！', 
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'icon.svg' }]],
    themeConfig: {
        logo: '/icon.svg',
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Roseses/vitepress-demo.git' }
        ],
        footer: {
            message: '其实我也不知道写啥注脚',
            copyright: '那我就随便写个吧',
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          {
            text: 'components',
            items: [
              { text: 'com A', link: '/components/use' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: "基础",
              collapsed: true,
              items: [
                { text: "快速开始", link: "/guide/" },
                { text: "使用方式", link: "/guide/use" }
              ]
            },
            {
              text: "高级",
              collapsed: true,
              items: [
                { text: "快速开始", link: "/guide/" },
                { text: "使用方式", link: "/guide/use" }
              ]
            }
          ],
          '/components/': [
                        {
                text: "组件",
                items: [
                  { text: "快速开始", link: "/components/" },
                  { text: "使用方式", link: "/components/use" }
                  ]
              },
          ]
        }
        // sidebar: [
        //     {
        //       text: "基础",
        //       items: [
        //         { text: "快速开始", link: "/guide/" },
        //         { text: "使用方式", link: "/guide/use" }
        //         ]
        //     },
        //     {
        //         text: "组件",
        //         items: [
        //           { text: "快速开始", link: "/components/" },
        //           { text: "使用方式", link: "/components/use" }
        //           ]
        //       },
        // ],
    },
    // markdown: {
    //   theme: {
    //     light: "vitesse-light",
    //     dark: "vitesse-dark",
    //   },
    // },
}
