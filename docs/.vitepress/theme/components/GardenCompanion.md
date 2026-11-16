# 小鲸鱼同伴

全局入口：`TeekLayoutProvider.vue` 中的 `<GardenCompanion />`，替换原来的 Live2D 看板娘。

- 图片：`docs/public/img/garden-whale.webp`，通过 VitePress 的 `withBase` 支持子路径部署。
- 交互：`garden-companion.js`，保留拖拽回弹、停靠、喂食、泡泡游戏、休息、徽章、大小和触碰音效。
- 样式：`../style/garden-companion.css`，跟随 VitePress 的亮色/深色主题。
- 存档：浏览器 localStorage 的 `vitepress-garden-companion-v1`，保存位置、设置和互动记录。
- 星屑光标默认关闭，可在互动菜单开启；原有博客鼠标拖尾继续工作。
- 页面切换时保留同一个宠物；组件卸载时清理监听器、定时器、动画帧和音频上下文。
- 搜索、移动导航和路由遮罩出现时暂时隐藏宠物。

移植自 JX Garden，交互改编自 MeteorNOX 的 DeepSeek Balance Whale Widget v0.4.2。
代码许可与角色图片来源分别见 `docs/public/licenses/jx-garden.txt` 和 `docs/public/licenses/whale-widget.txt`。
