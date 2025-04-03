<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Min-eee의 블로그에 오신 것을 환영합니다</h1>
      <p class="subtitle">Nuxt.js와 GitHub Pages로 만든 개인 블로그</p>
    </header>
    
    <main class="main">
      <section class="intro-section">
        <h2>안녕하세요!</h2>
        <p>이곳은 제 개인 블로그입니다. 프로그래밍, 기술, 그리고 제 관심사에 대한 글을 공유할 예정입니다.</p>
      </section>
      
      <section class="posts-section">
        <h2>최근 게시물</h2>
        <div class="posts-grid">
          <PostCard 
            v-for="post in recentPosts" 
            :key="post.id" 
            :post="post" 
          />
        </div>
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
// 임시 데이터 - 나중에 실제 컨텐츠로 대체할 수 있습니다
const recentPosts = [
  {
    id: 1,
    title: '블로그를 시작하며',
    description: 'Nuxt.js와 GitHub Pages로 블로그를 만든 경험을 공유합니다.',
    date: '2023-01-01',
    image: ''
  },
  {
    id: 2,
    title: '프로그래밍 팁: 효율적인 코딩 방법',
    description: '코딩을 더 효율적으로 하는 방법에 대해 알아봅시다.',
    date: '2023-01-15',
    image: ''
  },
  {
    id: 3,
    title: '개발자 생산성을 높이는 도구들',
    description: '개발 생산성을 크게 향상시키는 도구와 기법들을 소개합니다.',
    date: '2023-02-01',
    image: ''
  }
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  text-align: center;
  padding: 60px 0;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.main {
  padding: 40px 0;
}

.intro-section, .posts-section {
  margin-bottom: 60px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #3498db;
}
</style> 