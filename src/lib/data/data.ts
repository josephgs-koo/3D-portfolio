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
      title: '',
      explain: '',
      period: ['', ''],
      deploy: '',
      github: '',
      WID: [
        {
          title: '',
          detail: ['', ''],
        },
      ],
    },
  ],
  Study: [
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
