// nav导航栏配置
import { TeekIcon, VdoingIcon, SSLIcon, BlogIcon } from "./icon/NavIcon";
export const Nav = [
    { text: "🏡首页", link: "/" },





    // 首页仅保留的文章
    { text: '🎵 Music Together', link: '/zhuanti/music-together' },
    // // 兴趣
    // {
    //   text: '🎨兴趣',
    //   items: [
    //     {
    //       text: `
    //         <div style="display: flex; align-items: center; gap: 4px;">
    //           <img src="/img/nav/旅行.svg" alt="" style="width: 16px; height: 16px;">
    //           <span>旅行</span>
    //         </div>
    //         `,
    //       link: '/xingqu/travel',
    //     },
    //     {
    //       text: `
    //         <div style="display: flex; align-items: center; gap: 4px;">
    //           <img src="/img/nav/读书.svg" alt="" style="width: 16px; height: 16px;">
    //           <span>读书</span>
    //         </div>
    //         `,
    //       link: '/xingqu/reading',
    //     },
    //   ],
    // },  
    
    
    // 索引
    {
      text: '👏索引',
      items: [
        { text: '📃分类页', link: '/categories' },
        { text: '🔖标签页', link: '/tags' },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/归档.svg" alt="" style="width: 16px; height: 16px;">
              <span>归档页</span>
            </div>
            `,
          link: '/archives',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/清单.svg" alt="" style="width: 16px; height: 16px;">
              <span>清单页</span>
            </div>
            `,
          link: '/articleOverview',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/登录.svg" alt="" style="width: 16px; height: 16px;">
              <span>登录页</span>
            </div>
            `,
          link: '/login',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/风险提示.svg" alt="" style="width: 16px; height: 16px;">
              <span>风险链接提示页</span>
            </div>
            `,
          link: '/risk-link?target=https://onedayxyy.cn/',
        },
      ],
    },  

    // 关于
    {
      text: '🍷关于',
      items: [
        { text: '👋关于我', link: '/about/me' },
        // {
        //   text: `
        //     <div style="display: flex; align-items: center; gap: 4px;">
        //       <img src="/img/nav/个人主页.svg" alt="" style="width: 16px; height: 16px;">
        //       <span>个人主页</span>
        //     </div>
        //     `,
        //   link: '/about/homepage',
        // },
        { text: '🎉关于本站', link: '/about/website' },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/友链.svg" alt="" style="width: 16px; height: 16px;">
              <span>友链</span>
            </div>
            `,
          link: '/about/friend-links',
        },        
        { text: '🌐网站导航', link: '/about/websites' },          
        { text: "👂留言区", link: "/about/liuyanqu" },
        { text: "💡思考", link: "/about/thouht" },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/情侣相册.svg" alt="" style="width: 16px; height: 16px;">
              <span>情侣相册</span>
            </div>
            `,
          link: '/about/love',
        },        
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/时间轴.svg" alt="" style="width: 16px; height: 16px;">
              <span>时间轴</span>
            </div>
            `,
          link: '/about/time-line',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/朋友圈.svg" alt="" style="width: 16px; height: 16px;">
              <span>朋友圈</span>
            </div>
            `,
          link: '/about/pyq',
        },        
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/网站统计.svg" alt="" style="width: 16px; height: 16px;">
              <span>网站统计</span>
            </div>
            `,
          link: 'https://umami.onedayxyy.cn/share/DzS4g85V8JkxsNRk/onedayxyy.cn',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/站点监控.svg" alt="" style="width: 16px; height: 16px;">
              <span>站点监控</span>
            </div>
            `,
          link: 'https://status.onedayxyy.cn/status/monitor',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/网盘.svg" alt="" style="width: 16px; height: 16px;">
              <span>网盘</span>
            </div>
            `,
          link: 'https://zdir.onedayxyy.cn/',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/恋爱.svg" alt="" style="width: 16px; height: 16px;">
              <span>情侣恋爱计时器</span>
            </div>
            `,
          link: '/about/ql-timer',
        },  
      ],
    },       
  ]
