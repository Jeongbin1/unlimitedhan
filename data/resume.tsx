import React, { ReactNode } from 'react';

export type IntroduceItem = {
  title: string;
  content: ReactNode;
};

export type ProjectItem = {
  title: string;
  content: ReactNode;
};

export type CertificateItem = {
  title: string;
  issuedBy: string;
  date: string;
};

export const IntroduceItems: IntroduceItem[] = [
  {
    title:
      '개선이 가능한 부분을 고민하고, 점진적으로 발전하는 과정을 즐깁니다.',
    content: (
      <>
        반복되는 코드를 줄이기 위해 디자인 컴포넌트를 분리하고,{' '}
        <a
          href="https://unlimitedhan.vercel.app/blog/try-compound-pattern"
          className="underline"
        >
          ↗유연하고 확장성 있는 설계 방식
        </a>
        을 고민하며 실험해 보는 것을 좋아합니다.
        <br />
        디자인과 구현 사이의 미세한 차이나, 작은 개선 포인트도 놓치지 않으려는
        태도는 “사소한 것도 잘 캐치한다”는 동료 피드백으로 이어졌습니다.
      </>
    ),
  },
  {
    title: '효율적인 협업을 위해 위해 문서화, 자동화, 소통을 적극 실천합니다.',
    content: (
      <>
        이슈∙PR 양식 설정, 재사용 컴포넌트에 동작 흐름과 목적을 설명하는 주석을
        작성하는 등 팀원들의 이해를 돕고,{' '}
        <a
          href="https://hexagonal-ferry-536.notion.site/Coworkers-1dc35138cc9a800d84aedf89e99ba023?p=1dc35138cc9a804da756e6d0573455a7&pm=s"
          className="underline"
        >
          ↗자유로운 문서 작성 문화
        </a>
        를 지향합니다.
        <br />
        스토리북 자동 배포(GitHub Actions)를 제안하고 설정 문서화를 도와 팀 내
        최신 UI 확인 흐름을 개선하는 데 기여했습니다.
      </>
    ),
  },
  {
    title: '사용자 경험을 넓은 관점에서 고민합니다.',
    content: (
      <>
        단순한 UI를 구현하는 것을 넘어 성능 최적화와 SEO까지 고려한 개발을
        지향합니다.
        <br /> 직접 와이어프레임을 작성하고 사용자 흐름을 설계해 본 경험이
        있으며, 사용자가 더 편리하게 느낄 수 있는 지점을 고민하여 개발합니다.
      </>
    ),
  },
];

export const ProjectItems: ProjectItem[] = [
  {
    title: '기여한 부분',
    content: (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-slate-700 font-medium">
            공통 컴포넌트 설계 및 구현 (
            <a
              href="https://github.com/Team-7-Coworkers/coworkers/blob/main/app/components/TextField.tsx"
              className="underline"
            >
              ↗TextField
            </a>
            , Dropdown)
          </p>
          <p>
            <span className="font-semibold text-sm"> · </span>다양한 prop 조합을
            시각적으로 확인할 수 있도록{' '}
            <a
              href="https://6790b5618908c7f3c173e416-tnmzksstva.chromatic.com/?path=/story/components-textfield--box"
              className="underline"
            >
              Storybook으로 문서화
            </a>
            ,{' '}
            <span className="font-semibold">
              컴포넌트 재사용성과 팀 간 커뮤니케이션 효율을 높임
            </span>
          </p>
          <p>
            <span className="font-semibold text-sm"> · </span>Dropdown을
            컴파운드 패턴으로 구현하여{' '}
            <span className="font-semibold">
              유연한 옵션 구성과 확장성 있는 사용이 가능하도록 구조화
            </span>
          </p>
          <p>
            <span className="font-semibold text-sm"> · </span>Dropdown에
            keyframe기반의 slide, scale 애니메이션을 적용해 사용자 경험 개선
          </p>{' '}
          <p>
            <span className="font-semibold text-sm"> · </span>Textfield의 댓글
            입력창을 useRef를 활용해 입력 길이에 따라{' '}
            <span className="font-semibold">
              자동으로 높이를 조절, 사용자 편의성 향상
            </span>
          </p>{' '}
          <p>
            <span className="font-semibold text-sm"> · </span>디자인 일관성을
            위해 webkit 속성으로 스크롤바를 커스텀하고, 관리 편의를 위해 CSS
            모듈로 분리
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-slate-700 font-medium">랜딩 페이지 제작</p>
          <p>
            <span className="font-semibold text-sm"> · </span>
            다양한 트리거 기반 애니메이션 구현이 가능한{' '}
            <span className="font-semibold">Framer Motion</span>을 활용해{' '}
            <span className="font-semibold">
              사용자의 몰입도와 페이지 완성도 향상
            </span>
          </p>
          <p>
            Next.js Image 컴포넌트 기반의 이미지 최적화를 통해 로딩 속도를 개선
            및 사용자 경험 향상
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-slate-700 font-medium">완료한 일 목록 페이지</p>
          <p>
            <span className="font-semibold text-sm"> · </span>React Query로
            사용자 히스토리 데이터를
            <span className="font-semibold">비동기적으로 관리, </span>캐싱 및
            자동 갱신을 적용해
            <span className="font-semibold">성능 및 사용자 경험 개선</span>
          </p>
          <p>
            <span className="font-semibold text-sm"> · </span>클라이언트 사이드
            정렬 로직을 직접 구현하여{' '}
            <span className="font-semibold">
              다양한 기준으로 작업을 필터링, 데이터 탐색 유연성 확보
            </span>
          </p>
          <p>
            <span className="font-semibold text-sm"> · </span>Skeleton UI를
            적용해 로딩 시 공백을 방지하고{' '}
            <span className="font-semibold">
              전체 흐름에서 이탈감 없이 사용자 경험을 유지
            </span>
          </p>{' '}
        </div>
      </div>
    ),
  },
  {
    title: '사용 기술, 선택 이유',
    content: (
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-semibold ">TypeScript</span> | 정적 타입 체크로
          코드 안정성을 높이기 위해 채택, 객체 구조와 컴포넌트 props 구조를
          명확히 공유함으로써 협업 효율이 증대됨을 경험
        </p>
        <p>
          <span className="font-semibold ">NextJS (App Router)</span> | 서버
          컴포넌트 기반 렌더링, 메타데이터 활용 SEO 개선, 직관적인 라우팅 등
          프로젝트에 필요한 이점을 고려해 선택
        </p>
        <p>
          <span className="font-semibold ">React-Query</span> | 캐싱, refetch,
          에러 핸들링 기능을 활용하여 비동기 데이터 흐름을 간결하게 관리하기
          위해 도입
        </p>
        <p>
          <span className="font-semibold ">TailwindCSS</span> | 유틸리티 우선
          방식으로 반복적인 스타일 정의 없이 빠르고 일관된 레이아웃 작업을 위해
          채택
        </p>
        <p>
          <span className="font-semibold ">Zustand</span> | 전역 상태를 간단하고
          직관적인 방식으로 관리하기 위해 사용
        </p>
        <p>
          <span className="font-semibold ">Storybook</span> | UI 컴포넌트를
          독립적으로 문서화하기 위해 도입, 협업 중 컴포넌트 재사용성과 일관성
          향상을 경험
        </p>
        <p>
          <span className="font-semibold ">Axios</span> | 인터셉터 지원,
          직관적인 사용성 등으로 중복 없이 깔끔하게 API를 호출하기 위해 사용
        </p>
      </div>
    ),
  },
  {
    title: '트러블 슈팅',
    content: (
      <>
        <div className="flex flex-col gap-1">
          <div>
            <p className="font-semibold">문제 인식</p>
            랜딩 페이지에서 next/image 컴포넌트 사용 중 quality 옵션을
            적용했음에도 이미지 화질 저하 현상이 지속되어, 설정 방식 및 작동
            원리 분석
          </div>
          <div>
            <p className="font-semibold">해결 시도 1</p>
            sizes, deviceSizes를 명확히 지정하여 이미지 품질 개선했으나,
            고해상도 이미지로 인한 로딩 속도가 저하되는 새로운 문제 발생
          </div>
          <div>
            <p className="font-semibold">새로운 문제</p>
            이미지 포맷 AVIF, WebP 순으로 최적화 및 sharp 라이브러리 기반 설정을
            통해 성능, 브라우저 호환성 모두 확보
          </div>
          <div>
            <p className="font-semibold">해결 시도 2</p>
            시각적 품질 개선을 위해 애니메이션 적용, 배포 환경 Vercel로 전환하여
            next/image와의 호환성 확보, CDN 캐싱 효과와 함께 로딩 성능을
            종합적으로 개선
          </div>
          <div>
            <p className="font-semibold">결과</p>
            이미지 로딩 시간이 약 3초 → 1초 미만으로 개선되었고, Lighthouse 기준
            성능 점수도 상승
          </div>
          <div>
            <p className="font-semibold">교훈</p>
            이미지 최적화는 단순히 next/image 컴포넌트를 사용하는 수준이 아닌,
            렌더링 흐름, 브라우저 처리 방식, CDN 환경까지 함께 고려해야 하는
            종합적인 설계 작업임을 체감 조정으로 화질 + 성능 밸런스 맞춤
          </div>
        </div>
      </>
    ),
  },
];

export const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'Zustand',
  'React-Query',
];

export const certificateItems: CertificateItem[] = [
  {
    title: '정보처리기사',
    issuedBy: '한국산업인력공단',
    date: '2024.06',
  },
];
