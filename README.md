# Min-eee's GitHub Pages Blog

이 프로젝트는 Nuxt.js를 사용하여 만든 GitHub Pages 블로그입니다.

## 기술 스택

- Nuxt.js 3
- Vue.js 3
- HTML/CSS

## 개발 환경 설정

### 필수 조건

- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
# 프로젝트 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 실행 (http://localhost:3000/)
npm run dev
```

### 빌드 및 정적 사이트 생성

```bash
# 정적 사이트 생성
npm run generate
```

### 배포

```bash
# GitHub Pages에 배포
npm run deploy
```

## 프로젝트 구조

- `pages/`: 사이트의 페이지 컴포넌트
- `components/`: 재사용 가능한 Vue 컴포넌트
- `public/`: 정적 리소스 (이미지, 폰트 등)
- `assets/`: CSS, 이미지 등의 에셋 파일

## GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다. `main` 브랜치에 변경 사항을 푸시하면 자동으로 빌드 및 배포가 진행됩니다.

## 라이센스

MIT 