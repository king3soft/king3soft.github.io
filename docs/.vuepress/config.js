module.exports = {
    title: "UAuto",

    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        // nav: [  //链接
        //   { 
        //     text: '文档查看', 
        //     ariaLabel:'Language Menu',
        //     items:[
        //       {text: '自动化',link:'/UAuto/UAuto'},
        //       {text: '性能测试',link:'/Performance/Performance'}
        //     ]
        //   }
        // ],
        sidebar: [
          {
            title: 'UAuto文档',   // 必要的
            // path: '/UAuto/UAuto',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
              '/UAuto/UAuto',
              // '/UAuto/UAuto2'
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          },
          {
            title: '性能测试文档',
            sidebarDepth: 0,  
            children: [ 
              // '/Performance/Performance',
            ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
          }
        ]
    }
}