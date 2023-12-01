const data = {
  Profile: {
    name: '구교석',
    sentence: '효율을 중요하게 생각하는 개발자',
    introduce: `효율적인 코드를 중요시하는 개발자입니다.\n중복되는 코드나 유사한 로직을 발견하면, 커스텀 훅이나 컴포넌트로 개발하여 코드의 일관성과 효율성을 높이는 것을 중요하게 생각합니다. 팀프로젝트 시에 서로 필요한 곳마다 만들어 사용하던 모달 컴포넌트를 공용 모달로 통합하고 관련 로직을 커스텀 훅으로 개발하여 다른 팀원들의 개발 편의성을 높이는데 기여한 바가 있습니다. 코드의 재사용과 통일을 통해 프로젝트의 개발 속도를 향상시키고 유지보수를 용이하게 만드는데 많은 관심을 가지고 있습니다.\n문제 해결 능력과 도전정신을 가진 개발자입니다.\n어려운 상황에서도 포기하지 않고 근본 원인을 찾아내고 해결책을 개발하는데 집중합니다. 이로써 프로젝트에서 발생하는 어려움을 극복하고 지속적인 성과를 달성하며, 이런 과정에서 더 큰 동기부여를 얻습니다. 문제 해결을 위해 새로운 기술과 패턴을 습득하고, 대안을 모색하는 것을 즐기며, 항상 성장하고자 합니다.\n빠른 학습능력과 폭넓은 커뮤니케이션 능력을 가진 개발자입니다.\n빠른 학습 능력과 폭넓은 커뮤니케이션 능력은 팀 프로젝트에서 중요한 역할을 합니다. 프로젝트 진행 중 프론트엔드와 백엔드 팀 간의 기술적 충돌이나 의견 충돌이 발생했을 때, 문제해결에 필요한 백엔드 기본지식을 빠르게 습득하고 양측의 의견 차이를 좁히는데 기여한 경험이 있습니다. 이러한 능력은 팀 간의 원활한 협업과 프로젝트의 성공을 지원합니다.`,
    contact: [
      { type: 'Phone', content: '010-7155-1683' },
      { type: 'Email', content: 'josephgs.koo@gmail.com' },
    ],
    more: [
      { type: 'Github', content: 'https://github.com/josephgs-koo' },
      { type: 'Notion', content: 'https://peppered-mammal-55a.notion.site/e1dac4c446264e44a21889dc9ab5455f' },
      { type: 'Portfolio', content: '010-7155-1683' },
    ],
  },
  Skills: [
    { category: 'Language', detail: ['javascript', 'typescript', 'python', 'HTML/CSS'] },
    {
      category: 'Frontend',
      detail: [
        'React',
        'Next.js',
        'Redux',
        'Recoil',
        'React-Quary',
        'React-hook-form',
        'Styled-component',
        'emotion',
        'Tailwind CSS',
      ],
    },
    { category: 'Backend', detail: ['Flask', 'MongoDB', 'Express', 'AWS(S3)'] },
    { category: 'Others', detail: ['Git', 'Github', 'Figma'] },
  ],
  Projects: [
    {
      projectName: '3D-Portfolio',
      title: '',
      sub: '',
      roll: [''],
      skills: [''],
      period: ['', ''],
      from: '',
      urls: { deploy: '', github: '' },
      WID: [
        {
          title: '',
          detail: ['', ''],
        },
      ],
    },
    {
      projectName: 'DevShare',
      title: 'DevShare',
      sub: 'NextJS 스터디 프로젝트 : 이력서 등록 및 공유 사이트 (2인)',
      roll: ['팀장', '백엔드', '프론트엔드'],
      skills: ['Next.js', 'React-Query', 'Recoil', 'React-Hook-Form', 'Tailwindcss', 'AWS(S3)', 'MongoDB', 'Vercel'],
      period: ['2023.06', '2023.10'],
      from: '수수방관 스터디',
      urls: { deploy: 'https://devshare-delta.vercel.app/', github: 'https://github.com/Subang-Study/devshare' },
      WID: [
        {
          title: 'Next.js 13의 App Router이용',
          detail: [
            'Parallel Routes와 Intercepting Routes를 이용한 로그인 모달 구현',
            'Route Handler로 백엔드 Api 구현 및 요청 경로 재검증',
            '클라이언트상에서 라우팅 캐시로 인해 이력서 삭제 후 재작성 시 변경된 데이터 반영이 안되던 오류 수정',
          ],
        },
        {
          title: 'React-Query를 이용한 서버 상태 관리',
          detail: ['useInfiniteQuery를 이용한 이력서 리스트 무한 스크롤 구현'],
        },
        {
          title: 'Recoil을 이용한 클라이언트 상태 관리',
          detail: [
            'Tailwind CSS로 다크모드기능 및 다크모드 상태 관리 구현',
            'Api응답에 따른 에러 처리를 위한 토스트 팝업 및 상태 관리 구현',
          ],
        },
        {
          title: 'React-Hook-Form도입으로 form관련 데이터변동에 따른 재렌더링 최소화',
        },
        { title: 'AWS S3의 presigned url을 이용한 이미지 업로드 구현' },
        { title: 'Vercel을 이용한 배포' },
      ],
    },
    {
      projectName: 'ChatSS',
      title: 'ChatSS',
      sub: 'WebRTC 기반 실시간 1대1 체스게임과 채팅 (개인)',
      roll: ['백엔드', '프론트엔드'],
      skills: ['React', 'Typescript', 'Recoil', 'Emotion', 'Node.js', 'Express', 'Socket.io', 'WebRTC'],
      period: ['2023.04', '2023.05'],
      from: '개인 프로젝트',
      urls: { github: 'https://github.com/josephgs-koo/chatss' },
      WID: [
        {
          title: 'WebRTC를 이용한 사용자간 1:1 데이터 통신 구현',
          detail: [
            'Express와 SocketIO를 이용한 WebRTC signal server 구성',
            'WebRTC통신과 관련 context를 구성해 통신관련 로직 분리',
          ],
        },
        {
          title: 'Recoil을 이용한 게임 데이터 및 상태 관리',
          detail: ['recoil family를 이용해 게임관련 데이터 부분구독및 수정 구현'],
        },
      ],
    },
    {
      projectName: 'MOHAE',
      title: 'MOHAE : 취향 공유 서비스',
      sub: '코드스테이츠 파이널 프로젝트 (6인 / 4주)',
      roll: ['프론트엔드'],
      skills: ['React', 'Typescript', 'Styled-Component', 'Axios', 'AWS(S3)'],
      period: ['2023.03', '2023.04'],
      from: '코드스테이츠',
      urls: {
        deploy: 'http://mohea.s3-website-ap-southeast-2.amazonaws.com/',
        github: 'https://github.com/codestates-seb/seb42_main_006',
      },
      WID: [
        {
          title: '메인 게시글 작성 / 보기 / 수정 / 삭제 기능 구현',
          detail: [
            '개발 초기 남용되었던 useState코드를 입력 관련 상태 하나로 통일해서 관리하는 방식으로 리팩토링',
            '플레이리스트의 사용자 편의성을 위해 드래그앤 드롭기능으로 리스트 순서를 바꿀 수 있게 UI구현',
          ],
        },
        {
          title: '로그인, 회원가입 기능 구현 및 JWT 토큰 관리',
          detail: ['Axios interceptor를 이용한 JWT토큰 재발급 기능 구현'],
        },
        {
          title: '게시글과 모집글 페이지의 무한 스크롤 구현, 플레이리스트 DnD기능 구현',
        },
        {
          title: '에러처리나 Api요청에 따른 응답 처리를 위한 공통 모달 컴포넌트 구성',
          detail: [
            'Context Api를 이용한 공통모달 관련 상태관리',
            'useMemo를 이용해 Context Api로 인한 재렌더링 오류 수정',
          ],
        },
        {
          title: 'AWS S3와 Github Action을 통한 배포자동화',
        },
      ],
    },
    {
      projectName: 'Kiosk',
      title: '사용자 맞춤형 키오스크',
      sub: '얼굴인식을 통한 자동높이조절과 원격주문 기능이 포함된 키오스크 개발 (3인 / 1년)',
      roll: ['팀장', '백엔드', '프론트엔드'],
      skills: ['HTML/CSS', 'Javascript', 'Python', 'Flask', 'OpenCV', 'Socket.io', 'GCP', 'Firebase'],
      period: ['2021.09', '2022.09'],
      from: '남서울대학교',
      urls: {},
      WID: [
        {
          title: 'OpenCV를 이용한 얼굴인식 구현',
        },
        {
          title: '모터 조작 시스템 설계 및 회로 구성',
        },
        {
          title: '얼굴인식과 모터조작 시스템을 이용한 자동 높이 조절기능 구현',
          detail: ['프로세서 성능의 한계로 오작동 되는 현상을 수정하기 위해  시스템 구조 수정 및 재설계'],
        },
        {
          title: '주문 시스템 프론트엔드 개발',
        },
        {
          title: 'GCP, Firebase를 이용해 Flask로 백엔드 개발 및 배포',
        },
      ],
    },
  ],
  Education: [
    {
      from: '수수방관 스터디',
      detail: '부트캠프를 수료하고 취업까지 꾸준히 공부하고 기술들을 연마하기 위한 스터디',
      period: ['2023.05', '2023.10'],
      WIL: [
        '매일 아침 스터디를 통해 학습내용 공유 및 긴장감 유지',
        'Next.js 강좌 수강',
        'Next.js를 이용한 프로젝트를 통해 프레임워크 지식 확장',
      ],
    },
    {
      from: '코드 스테이츠 (Code States)',
      detail: '프론트엔드 개발 과정 수료',
      period: ['2022.10', '2023.04'],
      WIL: [
        'React를 이용한 SPA 웹앱 제작 과정 학습',
        '20주 동안 매일 알고리즘 문제 풀이',
        '20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험',
        '협업 프로젝트 2회 진행',
      ],
    },
    {
      from: '남서울대학교',
      detail: '지능정보통신공학과 전공',
      period: ['2016.02', '2023.02'],
      WIL: ['사용자 맞춤형 KIOSK 개발로 2022 졸업작품 전시회 최우수상 수상', '성적 장학금 3회'],
    },
  ],
}

export default data
