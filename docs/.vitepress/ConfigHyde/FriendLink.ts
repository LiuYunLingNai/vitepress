// FriendLink用于在首页展示一些友链
export const FriendLink = {
  enabled: true, // 是否启用友情链接卡片
  limit: 5, // 一页显示的数量
  // autoScroll: true, // 是否自动滚动
  // scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效

  autoPage: true, // 是否自动翻页
  pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  titleClick: (router) => router.go("/websites"), // 查看更多友链

  // 友情链接数据列表
  list: [
    {
      avatar: "/teek-logo-large.png",
      name: "vitepress-theme-teek",
      desc: "Teek官网",
      link: "https://vp.teek.top/",
    },  
    {
      name: "Teeker",
      desc: "朝圣的使徒，正在走向编程的至高殿堂！",
      link: "http://notes.teek.top/",
      avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
    },     
    {
      avatar: "https://jpg.lyln114514.top/i/2025/10/28/lvs15e.png",
      name: "QSYHH Blog",
      desc: "其实雨很好",
      link: "https://blog.257800180.xyz",
    }
  ],
  // autoScroll: true,
};
