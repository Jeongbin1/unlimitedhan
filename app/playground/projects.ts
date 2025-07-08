export const projects = [
  {
    id: 'p1',
    thumbnail: '/images/projects/codiit.png',
    title: 'CODI-IT',
    info: '2025.05 ~ 2025.06 | 프론트엔드 3인, 백엔드 2인',
    description:
      '백엔드 부트캠프 학생들이 활용할 프론트엔드 코드를 구현했다. 학습에 사용될 자료이기 때문에 완성도와 가독성을 특히 신경 썼다.\nGNB와 인증, 셀러 관련 페이지 등을 구현했다. 알림 SSE 연동을 처음 시도해봐서 새로웠고, 복잡한 하위 검증에 있어서 폼 라이브러리의 한계를 경험해보기도 했다.',
    demo: 'https://project-codiit-fe.vercel.app/products',
  },
  {
    id: 'p2',
    thumbnail: '/images/projects/coworkers.png',
    title: 'Coworkers',
    info: '2025.01 ~ 2025.02 | 프론트엔드 5인',
    description:
      "팀과 함께 관리할 수 있는 투두 리스트 서비스이다.\nDropdown, Textfield 공통 컴포넌트와 랜딩 페이지, 마이 히스토리 페이지를 구현했다.\n랜딩 페이지 이미지를 '좋은 화질'로 '빠르게' 렌더링하기 위해 다양한 시도를 해봤다.",
    github: 'https://github.com/Team-7-Coworkers/coworkers',
    demo: 'https://coworkers-11-4-7.vercel.app/',
  },
  {
    id: 'p3',
    thumbnail: '/images/projects/wine.png',
    title: 'wine',
    info: '2024.12 | 프론트엔드 5인',
    description:
      '와인 추천 및 리뷰 플랫폼. 검색창, 별점 공통 컴포넌트와 인증 기능(로그인, 회원가입)을 작업했다.\n카카오 소셜 인증 기능 구현 과정에서 막막함이 있었지만 직접 문서를 보고 해결하며 자신감을 얻었다.\nTailwindCSS를 처음 사용해보았는데, MUI와 충돌 이슈를 겪으며 기술 스택 선정 시 고려할 점을 생각해보게 되었다.',
    demo: 'https://wine-11-1.vercel.app/login',
  },
  {
    id: 'p4',
    thumbnail: '/images/projects/openmind.png',
    title: 'openmind',
    info: '2024.10 ~ 2024.11 | 프론트엔드 4인',
    description:
      '익명으로 질문과 답변을 주고받는 커뮤니티 플랫폼.\n처음으로 프론트엔드 팀원들과 협업을 진행하며 Git/GitHub 사용에 익숙해질 수 있었다.\nReact 컴포넌트 구조를 직접 짜보고 조건부 렌더링을 구현했고, 끝까지 완성도를 높여가는 과정이 즐거웠다.',
    github: 'https://github.com/Codeit-Sprint-Part-2-Team-6/Open-Mind',
    demo: 'https://open-mind-team-6.netlify.app/',
  },
  {
    id: 'p5',
    thumbnail: '/images/projects/farmmate.png',
    title: 'farmmate',
    info: '2023 ~ 2024 | 프론트엔드 1인, 백엔드 1인',
    description:
      '작물 질병 진단 및 관리 안드로이드 앱 서비스.\n클라이언트단을 담당하였고, Kotlin을 사용하여 개발했다. 공공 데이터셋으로 간단히 학습시킨 모델을 탑재해 질병 이미지를 분류하는 기능도 추가했다.\nAPI 요청과 응답 과정을 처음 경험하며 클라이언트-서버 구조의 흐름을 이해할 수 있었던 기회.',
    github: 'https://github.com/farm-mate/farmmate-front',
  },
  {
    id: 'p6',
    thumbnail: '/images/projects/bibimkiosk.png',
    title: 'Bibim Kiosk',
    info: '2022.12 ~ 2023.01',
    description:
      "'객체지향프로그래밍' 수업에서 과제로 구현한 비빔밥 키오스크이다. (서브웨이처럼 비빔밥 재료를 커스텀할 수 있다.)\nJava와 Swing을 사용해 여러 패널을 구성하고, 화면 전환 및 데이터 전달 로직을 설계했다.\n객체 간 책임과 역할 분리를 고민하며 객체지향의 기초를 실습할 수 있었다.",
    github: 'https://github.com/Jeongbin1/BibimKiosk',
  },
  {
    id: 'p7',
    thumbnail: '/images/projects/todopage.png',
    title: 'TO-DO page',
    info: '2022',
    description:
      "'바닐라 JS로 크롬 앱 만들기' 강의를 따라 만든 투두 웹앱.\n시계와 날씨 정보를 렌더링하고, 할 일을 입력해 목록에 표시하고 완료 시 제거하는 기능을 구현했다.\n자바스크립트의 DOM 조작, 이벤트 처리에 익숙해질 수 있었다.",
    github: 'https://github.com/Jeongbin1/Todo-Page',
    demo: 'https://todo-page-2022.netlify.app/',
  },
  {
    id: 'p8',
    thumbnail: '/images/projects/myfirsthomepage.png',
    title: 'My first homepage',
    info: '2021',
    description:
      "'웹프로그래밍기초' 수업에서 과제로 구현한 나만의 홈페이지.\n처음으로 백지 상태에서 스스로 구조를 잡고 디자인을 구상해가며 코드를 작성해보았다.\nJS로 간단한 이벤트를 구현해보며 동적인 요소도 가볍게 적용해 보았다.\n학과 서버로 배포되어 있었으나 현재는 삭제된 상태.",
  },
  {
    id: 'p9',
    thumbnail: '/images/projects/megabox.png',
    title: '영화 예매 사이트 퍼블리싱',
    info: '2020',
    description:
      "HTML과 CSS의 기본을 익히기 위해 '웹퍼블리싱 실습: 웹 표준 사이트 만들기' 강의를 따라 영화 예매 사이트를 제작했다.\n웹 표준에 맞춘 시맨틱 마크업과 레이아웃 구성, 반응형 UI 기초를 학습했다.",
    github: 'https://github.com/Jeongbin1/SOLUX_summer_web',
  },
];
