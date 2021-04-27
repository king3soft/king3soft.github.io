module.exports = {
  title: "UAutoIDE",

  themeConfig: {
      // displayAllHeaders: true, 
    
      sidebar:  {
        '/UAuto/': [
          'UAuto'
        ],
        
        '/Allsiderbar/': [
        {
          title: 'UAutoIDE 使用指南',   
          // path: '/UAuto/UAuto',     
          // sidebarDepth: 0,    
          children: [
            '/Allsiderbar/Allsiderbar',
            '/Allsiderbar/Quickuse',
            '/Allsiderbar/Advanced'
          ],
          initialOpenGroupIndex: -1
        }
      ]
    }
  }
}