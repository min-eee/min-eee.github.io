<template>
  <div>
    <!-- 헤더 섹션 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">권민영</h1>
          <p class="hero-subtitle">웹 풀스택 개발자</p>
          <p class="hero-text">안녕하세요! 논리적 사고와 문제 해결 능력을 갖춘 개발자입니다.</p>
          <div class="hero-buttons">
            <NuxtLink to="/projects" class="btn hero-btn">프로젝트 보기</NuxtLink>
            <NuxtLink to="/contact" class="btn hero-btn btn-outline">연락하기</NuxtLink>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-placeholder"></div>
        </div>
      </div>
    </section>

    <!-- 소개 섹션 -->
    <section class="about-section section">
      <div class="container">
        <h2 class="section-title">자기소개</h2>
        <div class="about-content">
          <p>
            의료정보학과에서 컴퓨팅 사고력을 배우며 처음으로 알고리즘과 DB의 개념을 접하게 되었고, 이를 계기로 IT 분야에 대한 관심을 가지게 되었습니다. 
            이후 병원 프로그램, 네트워크 엔지니어, 보안 솔루션 구축 등 다양한 IT 분야 경험을 쌓았으며, 개발 언어와 프로그래밍에 대한 흥미를 통해 
            웹 풀스택 개발자로서의 길을 걷게 되었습니다.
          </p>
          <NuxtLink to="/about" class="read-more">더 알아보기 <i class="bi bi-arrow-right"></i></NuxtLink>
        </div>
      </div>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="skills-section section">
      <div class="container">
        <h2 class="section-title">기술 스택</h2>
        <div class="skills-container">
          <div class="skill-category">
            <h3 class="category-title">Backend</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-filetype-java"></i></div>
                <span>Java</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-diagram-3"></i></div>
                <span>Spring Boot</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-database"></i></div>
                <span>MySQL</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-database"></i></div>
                <span>MariaDB</span>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">Frontend</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-filetype-js"></i></div>
                <span>JavaScript</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-filetype-html"></i></div>
                <span>HTML5</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-filetype-css"></i></div>
                <span>CSS3</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-diagram-2"></i></div>
                <span>Vue.js</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-filetype-jsx"></i></div>
                <span>jQuery</span>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="category-title">DevOps & Tools</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-github"></i></div>
                <span>Git</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-ubuntu"></i></div>
                <span>Linux</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-globe"></i></div>
                <span>Network</span>
              </div>
              <div class="skill-item">
                <div class="skill-icon"><i class="bi bi-pc-display"></i></div>
                <span>VMware</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink to="/skills" class="btn">전체 기술 스택 보기</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 주요 프로젝트 섹션 -->
    <section class="projects-section section">
      <div class="container">
        <h2 class="section-title">주요 프로젝트</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <div class="project-image-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">기업 메시지 발송 플랫폼</h3>
              <p class="project-date">2024.02 - 2024.10</p>
              <p class="project-description">기업에서 대량 메시지 발송을 편리하게 도와주는 웹사이트 개발</p>
              <div class="project-skills">
                <span class="project-skill">Java</span>
                <span class="project-skill">Spring Boot</span>
                <span class="project-skill">Vue.js</span>
                <span class="project-skill">MariaDB</span>
              </div>
              <NuxtLink to="/projects/1" class="read-more">자세히 보기 <i class="bi bi-arrow-right"></i></NuxtLink>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-image-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">사내 홈페이지 개선개발</h3>
              <p class="project-date">2023.10 - 2023.12</p>
              <p class="project-description">사내 홈페이지 기획/디자인 및 어드민 페이지 구현</p>
              <div class="project-skills">
                <span class="project-skill">Java</span>
                <span class="project-skill">Spring Boot</span>
                <span class="project-skill">Vue.js</span>
                <span class="project-skill">MariaDB</span>
              </div>
              <a href="https://www.ectech.co.kr/" target="_blank" class="read-more">사이트 방문하기 <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <div class="project-image-placeholder"></div>
            </div>
            <div class="project-content">
              <h3 class="project-title">구인구직 매칭플랫폼(HIJOB)</h3>
              <p class="project-date">2023.06 - 2023.07</p>
              <p class="project-description">개발자를 위한 채용박람회 & 구인구직 플랫폼</p>
              <div class="project-skills">
                <span class="project-skill">Java</span>
                <span class="project-skill">Spring</span>
                <span class="project-skill">JSP</span>
                <span class="project-skill">jQuery</span>
              </div>
              <a href="https://github.com/min-eee/HIJOB_recruitsystem.git" target="_blank" class="read-more">GitHub 보기 <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/projects" class="btn">모든 프로젝트 보기</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 경력 섹션 -->
    <section class="experience-section section">
      <div class="container">
        <h2 class="section-title">경력 사항</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2023.08 - 현재</div>
            <div class="timeline-content">
              <h3 class="timeline-title">이커머스테크</h3>
              <p class="timeline-position">SI 사업팀 / 사원</p>
              <p class="timeline-description">기업 메시징 서비스 웹 개발 및 사내 홈페이지 웹 개선 개발</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2021.06 - 2022.09</div>
            <div class="timeline-content">
              <h3 class="timeline-title">제이원시스</h3>
              <p class="timeline-position">기술지원팀 / 사원</p>
              <p class="timeline-description">보안 솔루션 전문 업체에서 DB-SAFER 제품 시스템 구축 및 유지 보수</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2020.03 - 2020.09</div>
            <div class="timeline-content">
              <h3 class="timeline-title">비트컴퓨터</h3>
              <p class="timeline-position">닥터비트사업부 / 사원</p>
              <p class="timeline-description">병원 프로그램 소프트웨어 유지 보수</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/experience" class="btn">경력 상세 보기</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 연락처 섹션 -->
    <section class="contact-section section">
      <div class="container">
        <h2 class="section-title">연락처</h2>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="bi bi-envelope-fill"></i>
            </div>
            <div class="contact-text">
              <h3>이메일</h3>
              <p><a href="mailto:alsdud2673@naver.com">alsdud2673@naver.com</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="bi bi-github"></i>
            </div>
            <div class="contact-text">
              <h3>GitHub</h3>
              <p><a href="https://github.com/min-eee" target="_blank">github.com/min-eee</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="bi bi-phone-fill"></i>
            </div>
            <div class="contact-text">
              <h3>연락처</h3>
              <p>010-5129-7220</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/contact" class="btn">더 많은 정보</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 헤로 섹션 */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 100px 0;
}

.hero-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.hero-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  color: var(--text-color);
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.hero-btn {
  padding: 12px 30px;
  font-size: 1.1rem;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.profile-placeholder {
  width: 300px;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* 소개 섹션 */
.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
}

.read-more {
  display: inline-block;
  margin-top: 20px;
  color: var(--primary-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #2980b9;
}

.read-more i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.read-more:hover i {
  transform: translateX(5px);
}

/* 기술 스택 섹션 */
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.skill-category {
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
  position: relative;
  padding-bottom: 10px;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.skill-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary-color);
}

/* 프로젝트 섹션 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
}

.project-content {
  padding: 20px;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.project-date {
  font-size: 0.9rem;
  color: var(--light-text);
  margin-bottom: 10px;
}

.project-description {
  margin-bottom: 15px;
  line-height: 1.6;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.project-skill {
  background-color: var(--light-gray);
  color: var(--secondary-color);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.85rem;
}

/* 경력 섹션 */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 150px;
  width: 2px;
  background-color: var(--light-gray);
}

.timeline-item {
  position: relative;
  padding-left: 200px;
  margin-bottom: 50px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: 146px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary-color);
}

.timeline-date {
  position: absolute;
  left: 0;
  width: 130px;
  text-align: right;
  font-weight: 500;
  color: var(--primary-color);
}

.timeline-title {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.timeline-position {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: var(--light-text);
}

.timeline-description {
  line-height: 1.6;
}

/* 연락처 섹션 */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.contact-text h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.mt-4 {
  margin-top: 40px;
}

@media (max-width: 992px) {
  .hero-section .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 70px;
  }
  
  .timeline-dot {
    left: 16px;
  }
  
  .timeline-date {
    position: relative;
    left: auto;
    width: auto;
    text-align: left;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
  }
}
</style> 