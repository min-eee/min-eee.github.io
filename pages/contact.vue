<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">연락처</h1>
        <p class="page-subtitle">저에게 연락하실 수 있는 방법입니다</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contact-container">
          <div class="contact-info">
            <h2 class="info-title">연락처 정보</h2>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-person-fill"></i>
              </div>
              <div class="info-content">
                <h3>이름</h3>
                <p>권민영</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="info-content">
                <h3>이메일</h3>
                <p><a href="mailto:alsdud2673@naver.com">alsdud2673@naver.com</a></p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-phone-fill"></i>
              </div>
              <div class="info-content">
                <h3>연락처</h3>
                <p>010-5129-7220</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-github"></i>
              </div>
              <div class="info-content">
                <h3>GitHub</h3>
                <p><a href="https://github.com/min-eee" target="_blank">github.com/min-eee</a></p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-calendar-date"></i>
              </div>
              <div class="info-content">
                <h3>생년월일</h3>
                <p>1999년</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-content">
                <h3>위치</h3>
                <p>서울, 대한민국</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2 class="form-title">메시지 보내기</h2>
            <p class="form-description">
              궁금한 점이나 협업 제안 등 어떤 내용이든 메시지를 보내주세요.
            </p>
            
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">이름</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="이름을 입력하세요" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="이메일을 입력하세요" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="subject">제목</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="제목을 입력하세요" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="message">메시지</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="메시지 내용을 입력하세요" 
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" class="btn submit-btn">
                <i class="bi bi-send"></i> 메시지 보내기
              </button>
            </form>
            
            <div v-if="formStatus" :class="['form-status', formStatus.type]">
              {{ formStatus.message }}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">이력서 & 포트폴리오</h2>
        <div class="resume-container">
          <div class="resume-card">
            <div class="resume-icon">
              <i class="bi bi-file-earmark-pdf"></i>
            </div>
            <div class="resume-content">
              <h3>이력서 PDF</h3>
              <p>최신 이력서를 PDF 형식으로 다운로드할 수 있습니다.</p>
              <a href="/resume.pdf" target="_blank" class="btn resume-btn">
                <i class="bi bi-download"></i> 다운로드
              </a>
            </div>
          </div>
          
          <div class="resume-card">
            <div class="resume-icon">
              <i class="bi bi-github"></i>
            </div>
            <div class="resume-content">
              <h3>GitHub 프로젝트</h3>
              <p>제가 진행한 프로젝트들을 GitHub에서 확인하실 수 있습니다.</p>
              <a href="https://github.com/min-eee" target="_blank" class="btn resume-btn">
                <i class="bi bi-box-arrow-up-right"></i> GitHub 방문
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formStatus = ref(null);

const submitForm = () => {
  // 실제 서비스에서는 이메일 전송 API를 연동하거나, 서버 측 로직을 구현해야 합니다.
  // 현재는 예시로 제출 성공 메시지만 표시합니다.
  formStatus.value = {
    type: 'success',
    message: '메시지가 성공적으로 전송되었습니다. 감사합니다!'
  };
  
  // 폼 초기화
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  
  // 5초 후 상태 메시지 숨기기
  setTimeout(() => {
    formStatus.value = null;
  }, 5000);
};
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

.bg-light {
  background-color: #f8f9fa;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.info-title, .form-title {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--secondary-color);
  position: relative;
  padding-bottom: 15px;
}

.info-title::after, .form-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.info-content h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: var(--secondary-color);
}

.info-content p {
  color: var(--text-color);
}

.info-content a {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #2980b9;
}

.contact-form {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

.form-description {
  margin-bottom: 25px;
  color: var(--light-text);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--secondary-color);
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form-status {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.form-status.success {
  background-color: #d4edda;
  color: #155724;
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
}

.resume-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.resume-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
}

.resume-card:hover {
  transform: translateY(-5px);
}

.resume-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.resume-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.resume-content p {
  margin-bottom: 15px;
  color: var(--light-text);
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .resume-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .info-card {
    flex-direction: column;
    text-align: center;
    padding: 25px 15px;
  }
  
  .info-icon {
    margin-bottom: 15px;
  }
  
  .resume-card {
    flex-direction: column;
    text-align: center;
  }
  
  .resume-icon {
    margin-bottom: 15px;
  }
}
</style> 