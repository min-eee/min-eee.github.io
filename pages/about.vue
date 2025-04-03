<template>
  <div class="about-container">
    <h1 class="page-title">소개</h1>
    
    <section class="profile-section">
      <div class="profile-image">
        <!-- <img src="/images/profile.jpg" alt="프로필 이미지" class="profile-img"> -->
      </div>
      <div class="profile-content">
        <h2>Min-eee 입니다</h2>
        <p class="bio">
          웹 개발자로서 새로운 기술을 배우고 적용하는 것을 좋아합니다. 
          프론트엔드와 백엔드 모두에 관심이 있으며, 사용자 경험을 향상시키는 
          웹 애플리케이션을 만드는 것을 목표로 하고 있습니다.
        </p>
        <div class="skills">
          <h3>기술 스택</h3>
          <div class="skill-tags">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">Nuxt.js</span>
            <span class="skill-tag">HTML/CSS</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Git</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="about-section">
      <h2>이 블로그에 대하여</h2>
      <p>
        이 블로그는 Nuxt.js를 사용하여 만들어졌으며, GitHub Pages를 통해 호스팅됩니다.
        프로그래밍, 웹 개발, 그리고 배우고 있는 다양한 기술에 대한 이야기를 공유할 예정입니다.
      </p>
      <p>
        기술 블로그로서 주로 학습한 내용, 프로젝트 경험, 문제 해결 과정 등을 기록하며,
        다른 개발자분들과 지식을 공유하고 소통하는 공간이 되었으면 합니다.
      </p>
    </section>
    
    <section class="contact-section">
      <h2>연락처</h2>
      <p>이메일이나 소셜 미디어를 통해 연락주세요:</p>
      <div class="contact-links">
        <a href="mailto:your-email@example.com" class="contact-link">
          <span class="contact-icon">✉️</span> your-email@example.com
        </a>
        <a href="https://github.com/min-eee" target="_blank" class="contact-link">
          <span class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </span> GitHub
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// 필요한 경우 스크립트 추가
</script>

<style scoped>
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: #2c3e50;
  position: relative;
  padding-bottom: 15px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #3498db;
}

.profile-section {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
}

.profile-image {
  flex: 0 0 250px;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.profile-content {
  flex: 1;
}

.profile-content h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.bio {
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
}

.skills {
  margin-top: 25px;
}

.skills h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background-color: #3498db;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.about-section, .contact-section {
  margin-bottom: 50px;
}

.about-section h2, .contact-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px;
}

.about-section h2::after, .contact-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: #3498db;
}

.about-section p, .contact-section p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #2980b9;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-image {
    flex: 0 0 200px;
    margin: 0 auto 30px;
  }
  
  .about-section h2::after, .contact-section h2::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .about-section, .contact-section {
    text-align: center;
  }
  
  .contact-links {
    align-items: center;
  }
}
</style> 