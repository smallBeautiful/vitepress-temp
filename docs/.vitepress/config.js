const nav = require('./nav')

export default {
  themeConfig: {
    nav,
    sidebar: {
      '/index/': [
        {
          text: 'index',
          items: [
            { text: 'Index', link: '/Index/' }, 
            { text: 'One', link: '/index/one' }, 
          ]
        }
      ],
      '/test/': [
        {
          text: '团队分析',
          items: [
            { text: '功能', link: '/test/', items:[
              { text: '参考线', link: '/test/test' },
            ] },
            { text: 'bug', link: '/test/hello' },
          ]
        }
      ]
    }
  }
}
