const data = {
  Profile: {
    name: '구교석',
    sentence: '',
    introduce: '',
    contact: {
      phone: '010-1755-1683',
      email: 'josephgs.koo@gmail.com',
    },
    more: {
      github: '',
    },
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
  Project: [
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
