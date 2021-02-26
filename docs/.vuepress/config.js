module.exports = {
  title: "UAutoIDE",

  themeConfig: {
      // displayAllHeaders: true, 
      nav: [  //链接
        { 
          text: '进阶', 
          ariaLabel:'Language Menu',
          items:[
            {text: '自动化框架详解',link:'/UAuto/UAuto'},
          ]
        }
      ],
      sidebar:  {
        '/UAuto/': [
          'UAuto'
        ],
        
        '/Allsiderbar/': [
        {
          title: 'UAutoIED 使用指南',   
          // path: '/UAuto/UAuto',     
          // sidebarDepth: 0,    
          children: [
            '/Allsiderbar/Allsiderbar',
            '/Allsiderbar/Quickuse'
          ],
          initialOpenGroupIndex: -1
        }
      ]
    }
  }
}