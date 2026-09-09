#!/bin/bash

#提交
cd /d/vitepress-theme-teek-one-private
git status
git pull
git add -A
git commit -m"update data"
git push
git status




#构建
cd /d/vitepress-theme-teek-one-private
pnpm docs:build
echo "音乐播放器已由 VitePress head 配置自动注入，无需修改 dist/index.html"



git status
git pull
git add -A
git commit -m"update data"
git push
git status


echo "推送winodws site数据到ecs："
/d/vitepress-theme-teek-one-private/shell/teek.bat
echo "rsync: rsync数据winodws-->ecs推送成功!"
echo ""
echo ""

echo "***************************"
echo "当前仓库状态："
git status



