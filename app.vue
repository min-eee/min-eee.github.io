<template>
  <div class="app">
    <header class="app-header">
      <nav class="nav-container">
        <div class="logo">
          <NuxtLink to="/">권민영</NuxtLink>
        </div>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">홈</NuxtLink>
          <NuxtLink to="/about" class="nav-link">소개</NuxtLink>
          <NuxtLink to="/skills" class="nav-link">기술 스택</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">프로젝트</NuxtLink>
          <NuxtLink to="/experience" class="nav-link">경력</NuxtLink>
          <NuxtLink to="/education" class="nav-link">교육</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">연락처</NuxtLink>
        </div>
        <div class="menu-toggle">
          <button @click="isMenuOpen = !isMenuOpen" aria-label="메뉴">
            <i class="bi" :class="isMenuOpen ? 'bi-x-lg' : 'bi-list'"></i>
          </button>
        </div>
      </nav>
      <div class="mobile-nav" :class="{ 'is-open': isMenuOpen }">
        <NuxtLink to="/" class="mobile-nav-link" @click="isMenuOpen = false">홈</NuxtLink>
        <NuxtLink to="/about" class="mobile-nav-link" @click="isMenuOpen = false">소개</NuxtLink>
        <NuxtLink to="/skills" class="mobile-nav-link" @click="isMenuOpen = false">기술 스택</NuxtLink>
        <NuxtLink to="/projects" class="mobile-nav-link" @click="isMenuOpen = false">프로젝트</NuxtLink>
        <NuxtLink to="/experience" class="mobile-nav-link" @click="isMenuOpen = false">경력</NuxtLink>
        <NuxtLink to="/education" class="mobile-nav-link" @click="isMenuOpen = false">교육</NuxtLink>
        <NuxtLink to="/contact" class="mobile-nav-link" @click="isMenuOpen = false">연락처</NuxtLink>
      </div>
    </header>
    
    <main class="app-main">
      <NuxtPage />
    </main>
    
    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Min-young Kwon. All rights reserved.</p>
        <div class="social-links">
          <a href="https://github.com/min-eee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="mailto:alsdud2673@naver.com" aria-label="Email">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style>
/* 전역 스타일 */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
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

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--secondary-color);
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
}

.section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.text-center {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #2980b9;
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

.menu-toggle {
  display: none;
  cursor: pointer;
}

.menu-toggle button {
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-top: 1px solid var(--light-gray);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.mobile-nav.is-open {
  max-height: 500px;
}

.mobile-nav-link {
  padding: 10px 0;
  color: var(--text-color);
  font-weight: 500;
  border-bottom: 1px solid var(--light-gray);
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.app-main {
  flex: 1;
}

.app-footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 30px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 992px) {
  .nav-links {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style> 