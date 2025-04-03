// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: '/', // GitHub Pages의 리포지토리 이름에 맞게 설정
    buildAssetsDir: 'assets', // 기본값은 '_nuxt'
    head: {
      title: '권민영 포트폴리오',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '권민영의 개발자 포트폴리오 웹사이트입니다.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css' }
      ]
    }
  },

  // GitHub Pages에 정적 사이트로 배포하기 위한 설정
  ssr: false,

  // 빌드 시 정적 사이트 생성을 위한 설정
  nitro: {
    preset: 'github-pages'
  },

  compatibilityDate: '2025-04-03'
})