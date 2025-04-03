<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">소개</h1>
        <p class="page-subtitle">저에 대해 알아보세요</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="about-container">
          <div class="about-image">
            <div class="profile-placeholder"></div>
          </div>
          <div class="about-content">
            <h2 class="about-name">권민영</h2>
            <p class="about-job">웹 풀스택 개발자</p>
            <div class="about-info">
              <div class="info-item">
                <i class="bi bi-calendar-date"></i>
                <span>1999년생</span>
              </div>
              <div class="info-item">
                <i class="bi bi-envelope"></i>
                <span>alsdud2673@naver.com</span>
              </div>
              <div class="info-item">
                <i class="bi bi-phone"></i>
                <span>010-5129-7220</span>
              </div>
              <div class="info-item">
                <i class="bi bi-github"></i>
                <a href="https://github.com/min-eee" target="_blank">github.com/min-eee</a>
              </div>
            </div>
            <div class="about-buttons">
              <NuxtLink to="/contact" class="btn">연락하기</NuxtLink>
              <a href="/resume.pdf" target="_blank" class="btn btn-outline">이력서 다운로드</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">진로의 선택</h2>
        <div class="about-text">
          <p>
            의료정보학과에서 컴퓨팅 사고력을 배우며 처음으로 알고리즘과 DB의 개념을 접하게 되었고, 이를 계기로 IT 분야에 대한 관심을 가지게 되었습니다. 이후 자연스럽게 IT 관련 직업적 선택을 탐구하게 되었습니다.
          </p>
          <p>
            첫 사회생활은 의료와 IT가 결합된 '병원 프로그램'을 개발하는 회사에서 시작했습니다. CS 직무를 담당하며 IT 지식이 부족하다는 점을 절감했고 이를 해결하기 위해 인터넷 자료를 찾아보고, 선배들에게 질문하며 적극적으로 학습했지만 실무에 필요한 기술을 체계적으로 익히기엔 한계가 있었습니다.
          </p>
          <p>
            이러한 고민 끝에 전문적인 지식 습득을 위해 네트워크 교육 과정을 수강하며 IP Routing, LAN Switching 등의 개념을 익히고 이후 보안 솔루션 구축 및 유지 보수를 담당하는 회사에 엔지니어로 입사하게 되었습니다. 이곳에서 PNP Secure의 'DB-SAFER' 제품을 전담하여 유지 보수 및 신사업 구축 업무를 수행하며 실무 경험을 쌓았습니다.
          </p>
          <p>
            업무를 수행하며, 단순한 제품 설치뿐만 아니라 DB-SAFER의 동작 원리와 구조를 고객사 담당자들에게 설명해야 했기에 제품에 대해 깊이 공부하게 되었고 이 과정에서 개발 언어와 프로그래밍에 대한 흥미가 생겼습니다. 직접 IP를 세팅하고 웹과 연동하여 보안 정책을 설정하는 과정에서 제품이 어떤 구조로 만들어졌는지 궁금증이 커졌고 이를 해결하기 위해 학점은행제를 통해 컴퓨터공학을 전공하고 사설 교육기관 에서 언어 수업과 개발 수업을 들으며 기초를 다졌습니다.
          </p>
          <p>
            이러한 경험을 바탕으로 개발자로서의 길을 걷게 되었으며, 실무 경험과 학습을 병행하며 지속적으로 성장하고 있습니다.
          </p>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">기술능력 및 문제해결능력</h2>
        <div class="about-text">
          <p>
            사내 프로젝트를 진행하며 실제 서비스 운영을 고려한 시스템 개발과 문제 해결 경험을 쌓았습니다.
            프로젝트 초기에는 기존 업무 프로세스가 명확하지 않아 개발 방향을 설정하는 데 어려움이 있었으나 DB 구조 분석, 로그 분석, 관련 문서 검토를 통해 기능의 동작 방식을 파악하고 개발을 진행하였습니다.
          </p>
          <p>
            예를 들어, 서비스 관리 기능 개발 시 기존에 운영 경험이 없던 시스템이었기에 기능이 어떻게 동작해야 하는지 명확한 가이드 없이 개발을 진행해야 했습니다. 이에 따라 DB 설계 및 기존 코드 분석을 통해 흐름을 파악하고 여러 차례 피드백을 반영하며 기능을 완성할 수 있었습니다.
          </p>
          <p>
            또한, 기존 외부 요금 빌링 시스템을 내부 시스템으로 전환하는 과정에서 테이블 누락 및 데이터 정합성 문제가 있었습니다. 이를 해결하기 위해 요금 청구 프로세스를 재정의하고, DB 설계를 수정하며 새로운 데이터 흐름을 반영한 로직을 구현하였습니다. 이를 통해 보다 안정적인 정산 시스템을 구축할 수 있었습니다.
          </p>
          <p>
            API Key 관리, 결제 시스템 연동, 실시간 통계 및 알람 시스템 개발 과정에서도 보안 강화를 위한 암호화 처리, 대량 데이터 동기화를 위한 레디스 활용, 사용자 경험을 개선하는 UI/UX 업데이트 등을 진행하며 기능 개발뿐만 아니라 서비스 운영을 고려한 시스템 설계 및 최적화 역량을 쌓을 수 있었습니다.
          </p>
          <p>
            이번 프로젝트를 통해 기술적인 문제를 논리적으로 분석하고 해결책을 도출하는 능력을 기르게 되었으며, 새로운 기술을 빠르게 습득하고 적용하는 경험을 쌓았습니다. 이러한 경험을 바탕으로 앞으로도 효율적인 시스템 개발과 운영을 위한 기술적 역량을 지속적으로 발전시켜 나가고자 합니다.
          </p>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">성격의 장단점</h2>
        <div class="about-text">
          <p>
            저는 논리적인 사고와 문제 해결 능력을 강점으로 가지고 있습니다.
            특히, 정립되지 않은 업무 프로세스를 분석하고 필요한 기능을 설계하는 과정을 경험하면서, 기능을 명확히 정의하고 논리적으로 정리하는 능력을 키울 수 있었습니다. 프로젝트를 진행하며 동료 개발자들과 필요한 부분을 협의하여 기능을 구체화하고, 직접 구현하는 과정에서 독립적으로 문제를 해결해야 했습니다.
          </p>
          <p>
            반면, 저는 한 가지에 깊이 집중하는 성향이 있어 전체적인 일정 관리가 필요한 경우가 있었습니다. 이를 보완하기 위해 WBS를 작성하여 업무 일정과 목표를 미리 계획하고, 예상되는 문제를 사전에 대비하는 습관을 들였습니다. 예를 들어, 프로젝트 진행 시 개발 일정, 기술 학습 목표, 마감 기한 등을 체계적으로 정리하여 일정이 틀어질 경우에도 빠르게 대처할 수 있도록 하였습니다. 이를 통해 업무 수행의 정확도를 높이고 일정 관리 능력을 향상시킬 수 있었습니다.
          </p>
          <p>
            앞으로도 기술적 역량과 문제 해결 능력을 지속적으로 발전시켜 더욱 효과적인 시스템 개발과 운영을 위해 노력하겠습니다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

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

.bg-light {
  background-color: #f8f9fa;
}

.about-container {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
}

.about-image {
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

.about-content {
  flex: 2;
}

.about-name {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.about-job {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.about-info {
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.info-item i {
  color: var(--primary-color);
  font-size: 1.3rem;
}

.about-buttons {
  display: flex;
  gap: 15px;
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

.about-text {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 20px;
}

@media (max-width: 992px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }
  
  .about-content {
    flex: 1;
  }
  
  .info-item {
    justify-content: center;
  }
  
  .about-buttons {
    justify-content: center;
  }
}
</style> 