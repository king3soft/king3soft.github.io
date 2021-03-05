(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(t,a,s){"use strict";s.r(a);var n=s(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是手游自动化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是手游自动化"}},[t._v("#")]),t._v(" 什么是手游自动化")]),t._v(" "),s("blockquote",[s("p",[t._v("通过非人工的方来模拟用户对游戏进行指定的操作")])]),t._v(" "),s("h2",{attrs:{id:"u3driver安装方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u3driver安装方法"}},[t._v("#")]),t._v(" U3Driver安装方法")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://king3soft.github.io/u3driver",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://king3soft.github.io/u3driver"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"python端与dll包实现连接的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python端与dll包实现连接的方式"}},[t._v("#")]),t._v(" python端与dll包实现连接的方式")]),t._v(" "),s("p",[t._v("如果您需要使用搭建好的python框架，请从"),s("a",{attrs:{href:"https://github.com/king3soft/u3driver",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动化python框架"),s("OutboundLink")],1),t._v("获取")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在cmd输入命令adb devices即可获得当前连接的设备的设备号\n"),s("img",{attrs:{src:t.$withBase("/01.png"),alt:"01"}})])]),t._v(" "),s("li",[s("p",[t._v("在控制台输入命令，通过-s与-i参数输入测试机的设备号与ip地址")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("python temp_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("f04cc32 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.11")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".244")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".243")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),s("p",[t._v("一般只需要输入-s 设备号即可，脚本会通过adb找到输入设备的ip地址，部分机型除外（三星）")])]),t._v(" "),s("h2",{attrs:{id:"基本的python指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本的python指令"}},[t._v("#")]),t._v(" 基本的python指令")]),t._v(" "),s("blockquote",[s("p",[t._v("u3driver以函数形式提供触屏手机所需要的动作指令，python端以字符串形式通过TCP发送给在游戏里的dll包（仅可对NGUI或UGUI控件进行操作）")])]),t._v(" "),s("p",[t._v("最常用的指令包括录制"),s("strong",[t._v("debug_mode()")]),t._v("、回放"),s("strong",[t._v("文件名.AutoRun(udriver)")]),t._v("、获取游戏物体"),s("strong",[t._v("find_object()")]),t._v("、对游戏物体发起点击事件"),s("strong",[t._v("tap()")]),t._v("、判断物体是否存在"),s("strong",[t._v("object_exist()")]),t._v("、获取父物体下所有直接子物体的名字"),s("strong",[t._v("find_child()")]),t._v("、按名字获取父物体的直接子物体"),s("strong",[t._v("find()")]),t._v("、按索引获取父物体下的子物体"),s("strong",[t._v("child_index()")]),t._v(" 等")]),t._v(" "),s("p",[s("strong",[t._v("具体指令可通过上述u3driver文档查看")])]),t._v(" "),s("p",[t._v("为了解释后面的功能，这里对游戏物体的路径进行说明，假如有下面游戏场景，"),s("strong",[t._v("StartButton")]),t._v(" 的路径为 "),s("strong",[t._v("/Canvas/StarButton")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/02.png"),alt:"02"}}),t._v(" "),s("p",[t._v("示例1. 录制，目前只支持点击，拖动，文本输入的录制")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug_mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uautoTest.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例2. 回放")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("uautoTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AutoRun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例3. 获取游戏物体")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Loadout//OpenLeaderboard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例4. 对游戏对象发起点击事件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Loadout//OpenLeaderboard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例5. 判断物体是否存在且活动")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("object_exist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Loadout//OpenLeaderboard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例6. 获取一个父游戏物体的所有直接子游戏物体的名字")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Leaderboard//Background"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例7. 按名字获取父物体的直接子物体")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Leaderboard//Background//Display"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Score"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("示例8. 按索引获取父物体下的子物体")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Leaderboard//Background//Display"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("child_index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/03.png"),alt:"03"}}),t._v(" "),s("p",[t._v("示例8. 获取游戏物体里的文本")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find_object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//UICamera//Leaderboard//Background//Display"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("child_index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"常用的库-uiautomator2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的库-uiautomator2"}},[t._v("#")]),t._v(" 常用的库-uiautomator2")]),t._v(" "),s("blockquote",[s("p",[t._v("使用python对Android设备进行UI自动化的库，无NGUI控件时用于模拟屏幕操作，更多uiautomator2操作可查看介绍文档 "),s("a",{attrs:{href:"https://github.com/openatx/uiautomator2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/openatx/uiautomator2"),s("OutboundLink")],1),t._v("\n注：不同设备的屏幕坐标可能不同")])]),t._v(" "),s("ol",[s("li",[t._v("导入库")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uiautomator2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" u2\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("初始化uiautomator2")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("uiauto "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("udriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appium_driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("常用的操作")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("uiauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  # 模拟点击操作\n\nuiauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("long_click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 模拟长按操作\n\nuiauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 模拟拖动操作\n\nuiauto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 模拟滑动操作\n")])])]),s("h2",{attrs:{id:"常见报错汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见报错汇总"}},[t._v("#")]),t._v(" 常见报错汇总")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("设备未找到，解决方法：检查设备号输入是否有误或重新拔插usb数据线\n"),s("img",{attrs:{src:t.$withBase("/04.png"),alt:"04"}})])]),t._v(" "),s("li",[s("p",[t._v("显示ip地址获取错误是因为设备使用adb获取ip地址的方式比较特殊，解决方法：手动输入ip地址\n"),s("img",{attrs:{src:t.$withBase("/05.png"),alt:"05"}})])]),t._v(" "),s("li",[s("p",[t._v("未找到该物体，解决方法：查看该控件是否在当前的游戏界面中，可通过debug_mode录制确认路径是否有误\n"),s("img",{attrs:{src:t.$withBase("/06.png"),alt:"06"}})])]),t._v(" "),s("li",[s("p",[t._v("越界错误，一般出现在寻找父物体下的子物体时，父物体下无该索引的子物体即报错，解决方法：修改child_index()里的索引进行寻找，要确保该父物体下是有子物体存在的\n"),s("img",{attrs:{src:t.$withBase("/07.png"),alt:"07"}})])]),t._v(" "),s("li",[s("p",[t._v("目标计算机拒绝连接，可能是测试机13000端口已被占用、未打开游戏，ip地址输入错误，或者测试机终止了进程，解决方法：检查输入ip地址，或杀掉游戏进程，重新打开游戏\n"),s("img",{attrs:{src:t.$withBase("/08.png"),alt:"08"}})])])])])}),[],!1,null,null,null);a.default=r.exports}}]);