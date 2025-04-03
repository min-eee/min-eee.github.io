<template>
  <div class="projects-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">프로젝트</h1>
        <p class="page-subtitle">제가 진행한 프로젝트를 소개합니다</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="projects-filter">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-btn', { active: activeFilter === filter.id }]"
            @click="activeFilter = filter.id"
          >
            {{ filter.name }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <div class="project-image-placeholder"></div>
            </div>
            <div class="project-content">
              <h2 class="project-title">{{ project.title }}</h2>
              <p class="project-period">{{ project.period }}</p>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-skills">
                <span 
                  v-for="skill in project.skills" 
                  :key="skill"
                  class="project-skill"
                >
                  {{ skill }}
                </span>
              </div>
              
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                  <i class="bi bi-github"></i> GitHub
                </a>
                <a v-if="project.website" :href="project.website" target="_blank" class="project-link">
                  <i class="bi bi-globe"></i> Website
                </a>
                <router-link v-if="project.detail" :to="`/projects/${project.id}`" class="project-link">
                  <i class="bi bi-file-text"></i> 상세보기
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const filters = [
  { id: 'all', name: '전체' },
  { id: 'backend', name: '백엔드' },
  { id: 'frontend', name: '프론트엔드' },
  { id: 'fullstack', name: '풀스택' }
];

const activeFilter = ref('all');

const projects = [
  {
    id: 1,
    title: '기업 메시지 발송 플랫폼',
    period: '2024.02 - 2024.10',
    description: '기업에서 대량 메시지 발송을 편리하게 도와주는 웹사이트 개발',
    type: 'fullstack',
    skills: ['Java', 'Spring Boot', 'Vue.js', 'MariaDB', 'Node.js', 'jQuery', 'Gradle'],
    github: '',
    website: '',
    detail: true
  },
  {
    id: 2,
    title: '사내 홈페이지 개선개발',
    period: '2023.10 - 2023.12',
    description: '사내 홈페이지 기획/디자인 및 어드민 페이지 구현',
    type: 'fullstack',
    skills: ['Java', 'Spring Boot', 'MariaDB', 'JavaScript', 'Vue.js'],
    github: '',
    website: 'https://www.ectech.co.kr/',
    detail: false
  },
  {
    id: 3,
    title: '구인구직 매칭플랫폼(HIJOB)',
    period: '2023.06 - 2023.07',
    description: '개발자를 위한 채용박람회 & 구인구직 플랫폼',
    type: 'fullstack',
    skills: ['JSP', 'Spring', 'Mybatis', 'jQuery', 'JSTL', 'Java', 'Ajax', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/min-eee/HIJOB_recruitsystem.git',
    website: '',
    detail: false
  },
  {
    id: 4,
    title: '아동복 쇼핑몰',
    period: '2022.12 - 2023.01',
    description: '4세 ~ 13세 아이를 둔 부모들을 위한 아동복 전문 쇼핑몰 제작',
    type: 'fullstack',
    skills: ['REST API', 'Ajax', 'Java', 'JavaScript', 'Bootstrap', 'Thymeleaf', 'Spring Data JPA', 'Apache Maven', 'CSS 3', 'MySQL', 'Spring Boot', 'HTML5'],
    github: 'https://github.com/min-eee/ShoppingMall.git',
    website: '',
    detail: false
  }
];

const filteredProjects = computed(() => {
  if (activeFilter === 'all') {
    return projects;
  }
  
  return projects.filter(project => project.type === activeFilter);
});
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.3rem;
  color: var(--light-text);
}

.projects-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 25px;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
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
  height: 220px;
  overflow: hidden;
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.project-period {
  font-size: 0.9rem;
  color: var(--light-text);
  margin-bottom: 15px;
}

.project-description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.project-skill {
  background-color: var(--light-gray);
  color: var(--secondary-color);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.85rem;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border-top: 1px solid var(--light-gray);
  padding-top: 20px;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #2980b9;
}

@media (max-width: 768px) {
  .projects-filter {
    flex-wrap: wrap;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 