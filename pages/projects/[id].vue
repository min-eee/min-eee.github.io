<template>
  <div v-if="project" class="project-detail">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">{{ project.title }}</h1>
        <p class="page-subtitle">{{ project.period }}</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="project-overview">
          <div class="project-image">
            <div class="project-image-placeholder"></div>
          </div>
          <div class="project-info">
            <div class="info-item">
              <h3><i class="bi bi-info-circle"></i> 프로젝트 소개</h3>
              <p>{{ project.description }}</p>
            </div>
            
            <div class="info-item">
              <h3><i class="bi bi-tools"></i> 사용 기술</h3>
              <div class="project-skills">
                <span v-for="skill in project.skills" :key="skill" class="project-skill">
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <div class="info-item">
              <h3><i class="bi bi-link-45deg"></i> 관련 링크</h3>
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" class="project-link">
                  <i class="bi bi-github"></i> GitHub
                </a>
                <a v-if="project.website" :href="project.website" target="_blank" class="project-link">
                  <i class="bi bi-globe"></i> Website
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="project.id === 1" class="project-content">
          <h2 class="section-title">프로젝트 내용</h2>
          
          <div class="content-section">
            <h3>프로젝트 개요</h3>
            <p>기업에서 대량 메시지 발송을 편리하게 도와주는 웹 플랫폼으로, API Key 관리, 토스 결제 연동, 실시간 통계, 고객사 관리, 서비스 관리, 정산 기능, 알람 시스템 등을 구현했습니다.</p>
          </div>
          
          <div class="content-section">
            <h3>담당 업무</h3>
            <div class="task-list">
              <div class="task-item">
                <h4>API Key 관리 기능 개발</h4>
                <ul>
                  <li>API Key 생성, 조회, 수정, 삭제 (CRUD) 기능 구현</li>
                  <li>API Key 보안 강화를 위한 API Key 패스워드 암호화 처리 적용</li>
                  <li>CUD 작업 시 레디스 동기화 로직 적용</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>토스 카드 결제 연동</h4>
                <ul>
                  <li>카드 결제 기능을 위한 토스 API 연동</li>
                  <li>결제 처리 후 레디스 동기화 로직 적용</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>실시간 통계 기능 개발</h4>
                <ul>
                  <li>실시간 문자 발송 통계 화면 구현</li>
                  <li>사용자 요청에 따라 데이터 시각화 기능 적용</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>고객사 관리 기능 개발</h4>
                <ul>
                  <li>고객사 목록 및 상세 관리 화면 구현</li>
                  <li>고객사 API Key 관리 (CRUD) 및 상세 정보 화면 구현</li>
                  <li>고객사 이용 해지, 정지, 사용 로직 개발 및 엑셀 다운로드 기능 구현</li>
                  <li>고객사 회원가입 승인 처리 및 반려 사유 팝업 기능 개발</li>
                  <li>고객사 비밀번호 변경 시 이메일 발송 로직 구현</li>
                  <li>모든 CUD 작업 시 레디스 동기화 로직 적용</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>서비스 관리 기능 개발</h4>
                <ul>
                  <li>서비스 채널 관리 및 등록/상세 화면 구현</li>
                  <li>기본 금액 상품 관리 화면 및 등록 화면 개발</li>
                  <li>고객사별 ,채널별 요금 관리 화면 개발</li>
                  <li>메시지 발송을 위한 서비스 기준 정보 화면 구현</li>
                  <li>문자/카카오톡 등 채널 제공사 등록 화면 및 큐 관리 화면 구현</li>
                  <li>서비스 채널 연결 정보 및 서비스 분배 정책 관리 기능 개발</li>
                  <li>서비스 고객 분배 정책 관리 화면 구현</li>
                  <li>업무 프로세스가 정리되지 않은 상태에서 DB 분석, 로그 분석을 통해 기능 동작 방식을 파악하고 개발 진행</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>정산 기능 개발</h4>
                <ul>
                  <li>후불 청구 이력, 캐시 사용 내역, 선불 결제 내역 화면 구현</li>
                  <li>이벤트 캐시 충전 등록 내역 상세 화면 개발</li>
                  <li>기존 외부 요금 빌링 시스템을 자체 시스템으로 변경하는 과정에서 DB 설계 미흡 문제 발생 → 필요한 테이블 추가 및 DB 구조 수정 후 개발 진행</li>
                </ul>
              </div>
              
              <div class="task-item">
                <h4>고객사 알람 시스템 개발</h4>
                <ul>
                  <li>알람 템플릿 등록 기능 개발 (공지사항, 작업/장애 알람 등)</li>
                  <li>특정 상황 발생 시 특정 고객에게 알람 발송 기능 구현</li>
                  <li>기존 DB 설계를 사용하지 않고 신규 설계 진행 후 개발 과정에서 데이터 연결 문제 발생 → 컬럼 추가 후 문제 해결</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="content-section">
            <h3>주요 성과</h3>
            <ul class="achievement-list">
              <li><strong>레거시 시스템 개선을 통한 성능 최적화 및 유지 보수성 향상</strong></li>
              <li><strong>API Key 및 결제 관리 기능 보안 강화</strong></li>
              <li><strong>요금 빌링 로직 개선으로 서비스 운영 효율성 증가</strong></li>
              <li><strong>고객사 관리 및 서비스 운영 프로세스 정립으로 사용자 편의성 증대</strong></li>
            </ul>
          </div>
          
          <div class="content-section">
            <h3>문제 해결 사례</h3>
            <div class="problem-solution">
              <h4>문제 상황</h4>
              <p>기존 외부 요금 빌링 시스템을 자체 시스템으로 변경하는 과정에서 DB 설계 미흡으로 인한 데이터 정합성 문제가 발생했습니다.</p>
              
              <h4>해결 방법</h4>
              <p>요금 청구 프로세스를 재정의하고, DB 설계를 수정하며 새로운 데이터 흐름을 반영한 로직을 구현하였습니다. 필요한 테이블을 추가하고 관계를 재설정함으로써 안정적인 정산 시스템을 구축할 수 있었습니다.</p>
            </div>
            
            <div class="problem-solution">
              <h4>문제 상황</h4>
              <p>고객사 알람 시스템 개발 시 기존 DB 설계를 사용하지 않고 신규 설계를 진행했으나, 개발 과정에서 데이터 연결 문제가 발생했습니다.</p>
              
              <h4>해결 방법</h4>
              <p>기존 테이블과의 연결을 위한 중간 테이블을 설계하고 필요한 컬럼을 추가하여 데이터 통합성을 확보했습니다. 이를 통해 레거시 시스템과의 호환성을 유지하면서 새로운 기능을 구현할 수 있었습니다.</p>
            </div>
          </div>
        </div>
        
        <div class="section-navigation">
          <NuxtLink to="/projects" class="btn"><i class="bi bi-arrow-left"></i> 프로젝트 목록으로</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const projectId = parseInt(route.params.id);

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

const project = projects.find(p => p.id === projectId);
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

.project-overview {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
}

.project-image {
  flex: 1;
  max-width: 500px;
}

.project-image-placeholder {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

.project-info {
  flex: 1;
}

.info-item {
  margin-bottom: 30px;
}

.info-item h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-item h3 i {
  color: var(--primary-color);
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-skill {
  background-color: var(--light-gray);
  color: var(--secondary-color);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 20px;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #2980b9;
}

.project-content {
  margin-bottom: 60px;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
  position: relative;
  padding-bottom: 10px;
}

.content-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
}

.task-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 25px;
}

.task-item {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--box-shadow);
}

.task-item h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.task-item ul {
  padding-left: 20px;
}

.task-item li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.achievement-list {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--box-shadow);
  list-style-type: none;
}

.achievement-list li {
  padding: 15px;
  position: relative;
  padding-left: 30px;
}

.achievement-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.problem-solution {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: var(--box-shadow);
  margin-bottom: 20px;
}

.problem-solution h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.problem-solution p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.section-navigation {
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 992px) {
  .project-overview {
    flex-direction: column;
  }
  
  .project-image {
    max-width: 100%;
  }
  
  .task-list {
    grid-template-columns: 1fr;
  }
}
</style> 