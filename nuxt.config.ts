// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/min-eee.github.io/', // GitHub Pages의 리포지토리 이름에 맞게 설정
    buildAssetsDir: 'assets', // 기본값은 '_nuxt'
    head: {
      title: 'Min-eee의 블로그',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Min-eee의 GitHub Pages 블로그' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // GitHub Pages에 정적 사이트로 배포하기 위한 설정
  ssr: false,
  // 빌드 시 정적 사이트 생성을 위한 설정
  nitro: {
    preset: 'github-pages'
  }
}) 