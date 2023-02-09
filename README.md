## 원티드 프리온보딩 프론트엔드 인턴십 선발과제

### 선발과제 세부사항 :

https://github.com/walking-sunset/selection-task

### 실행방법 :

1. `npm install` 또는 `yarn install` 입력
2. 최상위 폴더에서 `.env` 파일 추가 후 `.env.template`의 양식대로 백엔드 api 엔드포인트 추가
3. `npm start` 또는 `yarn start`로 프로젝트 시작

### 배포주소:

https://wanted-pre-onboarding-frontend-ashy-one.vercel.app

### 사용스택:

- 라우팅 : [![react-router-dom](https://img.shields.io/badge/react--router--dom-v6.8.1-orange)](https://www.npmjs.com/package/react-router-dom)
- 스타일링 : [![@emotion/react](https://img.shields.io/badge/@emotion/react-v11.10.5-pink)](https://www.npmjs.com/package/@emotion/react)
- http통신 : [![axios](https://img.shields.io/badge/axios-v1.3.2-blueviolet)](https://www.npmjs.com/package/axios)
- CRA 설정 : [![@craco/craco](https://img.shields.io/badge/@craco/craco-v7.0.0-1AB190)](https://www.npmjs.com/package/@craco/craco)
- 아이콘 라이브러리 : [![react-icons](https://img.shields.io/badge/react--icons-v4.7.1-red)](https://www.npmjs.com/package/react-icons)

### 프로젝트 폴더 구조:

```
src
 ┣ constants
 ┃ ┣ error-msg.ts
 ┃ ┗ storage.ts
 ┣ features
 ┃ ┣ auth/
 ┃ ┣ todo/
 ┃ ┗ index.ts
 ┣ helpers
 ┃ ┗ validator.ts
 ┣ pages
 ┃ ┣ SignIn/
 ┃ ┣ SignUp/
 ┃ ┣ Todo/
 ┃ ┗ index.tsx
 ┣ services
 ┃ ┗ axios.ts
 ┣ styles
 ┃ ┣ color.ts
 ┃ ┣ global-style.ts
 ┃ ┗ reset-css.ts
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ reportWebVitals.ts
```

- constants: 프로젝트 전체에서 사용하는 사용하는 상수를 모아두는 폴더
- features: 프로젝트 주요 기능(인증, 투두)의 컴포넌트와 로직을 모아두는 폴더
- helpers: 프로젝트 전체에서 사용하는 헬퍼 함수를 모아두는 폴더
- pages: 라우트 역할을 하며, 각 페이지 별 로직(레이아웃 등, 리다이렉트)을 처리하는 경로
- services: axios client를 정의
- styles: 글로벌 스타일, 디자인 토큰 정의
