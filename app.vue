<template>
  <div class="app">
    <header class="app-header">
      <nav class="nav-container">
        <div class="logo">
          <NuxtLink to="/">Min-eee</NuxtLink>
        </div>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">홈</NuxtLink>
          <NuxtLink to="/about" class="nav-link">소개</NuxtLink>
        </div>
      </nav>
    </header>
    
    <main class="app-main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* 전역 스타일 */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --text-color: #333;
  --light-text: #666;
  --background-color: #f8f9fa;
  --light-gray: #e9ecef;
  --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

/* 앱 레이아웃 */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: white;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

.logo a:hover {
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after, .nav-link.router-link-active::after {
  width: 100%;
}

.app-main {
  flex: 1;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-links {
    width: 100%;
    justify-content: center;
  }
}
</style> 