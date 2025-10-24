<template>
  <div id="twikoo"></div>
</template>

<script setup lang="ts">
import { onMounted, watch ,nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const initTwikoo = async () => {
  // 判断是否在浏览器环境中
  if (typeof window !== 'undefined') {
    const twikoo = await import('twikoo')
    twikoo.init({
      envId: 'https://twikoo.onedayxyy.cn/', // 换成你自己配置的域名
      el: '#twikoo'
    })
  }
}


const modifyCommentButton = () => {
  nextTick(() => {
    // 精确选择评论按钮
    const commentBtn = Array.from(document.querySelectorAll('.tk-right-bottom-button__button'))
      .find(btn => btn.getAttribute('title') === '前往评论');
    
    if (commentBtn && !commentBtn.getAttribute('data-custom-bound')) {
      commentBtn.setAttribute('data-custom-bound', 'true');
      
      commentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const twikooSection = document.getElementById('twikoo');
        if (twikooSection) {
          twikooSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });
}


// 监听路由刷新评论
watch(route, () => {
  initTwikoo()
  modifyCommentButton()
})

onMounted(() => {
  initTwikoo()
  modifyCommentButton()
})
</script>