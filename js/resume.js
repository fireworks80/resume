new Vue({
  el: '#js-app',
  data: {
    contact: [
      {
        title: 'email',
        url: 'fireworks80@naver.com'
      },
      {
        title: 'github',
        url: 'https://github.com/fireworks80'
      }
    ],
    skills: [
      'html5.svg',
      'css3.svg',
      'sass.svg',
      'js.svg',
      'jquery.svg',
      'vue.png'
    ],
    careers: [
      {
        date: '2015.4 - ',
        company: '펜타클',
        work: '웹퍼블리싱, 인터렉티브 웹개발, 프론트엔드',
        projects: [
          {
            title: '폭스바겐 아테온 마이크로 사이트 퍼블리싱, UI 인터렉션',
            url: 'https://arteon.vwkr.co.kr/studio',
            source: 'https://github.com/fireworks80/arteon'
          },
          {
            title: 'lg U+ 이벤트 퍼블리싱, animation, front-end 개발',
            url: 'http://fireworks80.dothome.co.kr/uplus/drawing/',
            source:
              'https://github.com/fireworks80/fireworks80.github.io/tree/master/personal/portfolio/Uplus-drawing'
          },
          {
            title: 'vue cli prototype 제작 - side project',
            url: '',
            source:
              'https://github.com/fireworks80/study-vue/tree/master/use-vue-head-og'
          },
          {
            title: 'vue component 페이지 인터렉션 - side project',
            url: '',
            source: 'https://github.com/fireworks80/artist-animation-vue-clone'
          },
          {
            title: 'playstation 구매페이지 clone - side project',
            url: '',
            source: 'https://github.com/fireworks80/playstation-vue-cli'
          },
          {
            title: '뉴스레터 생성기 - side project',
            url: '',
            source: 'https://github.com/fireworks80/newsletter'
          },
          {
            title: '이벤트 페이지, 마이크로 사이트 제작',
            url: '',
            source: ''
          }
        ]
      },
      {
        date: '2014.3 - 2014.7',
        company: '머큐리코퍼레이션',
        work: '웹퍼블리싱',
        projects: [
          {
            title: '자사 쇼핑몰 웹표준화'
          }
        ]
      },
      {
        date: '2013.9 - 2014.3',
        company: '디지털베이 시스템',
        work: '웹퍼블리싱',
        projects: [
          {
            title: 'LG CNS 내부 솔루션 퍼블리싱'
          }
        ]
      },
      {
        date: '2013.2 - 2013.9',
        company: 'oncx',
        work: 'php 웹 개발',
        projects: [
          {
            title: '자사 사이트 유지 보수 및 컨텐츠 개발'
          }
        ]
      }
    ],
    portfolios: [
      {
        id: 1,
        title: 'splash party 2015',
        img: 'splash-2015.jpg',
        description:
          '‘Splash the modern art’ 컨셉 아래 컨슈머들이 네스카페 돌체구스토에 대한 러브마크를 형성할 수 있는‘컨슈머 파티’를 열기로 결정했습니다. 고객들과 인터렉티브한 브랜드 경험을 통해 그들의 오감을 자극하고자 하였습니다.'
      },
      {
        id: 2,
        title: '센소다인 온라인 프로모션',
        img: 'gsk.jpg',
        description:
          "에나멜과 잇몸으로 감싸고 있어야 하는 상아세관이 외부자극에 노출되면, 자극은 치아신경으로 전달되어 찌릿 찌릿 고통을 느끼게 됩니다. 이런 고통을 느끼는걸 시린이 증상이라 하는데 노출된 상아세관의 공백을 센소다인 제품의 질산칼륨이 치아신경에 보호막을 형성하여 외부 자극을 차단해 빠른 시린이 개선이 가능하도록 하는데요. 6월 부터 날이 더워짐에 따라 차가운 음식을 접하는 모든 사람을 대상으로 센소다인이 시린이 증상을 빠르게 완화할 수 있다는 메시지를 효과적으로 전달하기 위해 '시린이의 달' 캠페인을 진행했습니다."
      },
      {
        id: 3,
        title: 'splash party 2016',
        img: 'splash-2016.jpg',
        description:
          '2015년에 이어 2회째 진행되는 네스카페 돌체구스토의 컨슈머 파티 안내 및 홍보를 위한 캠페인 사이트 제작 파티 프로그램, 라인업 등의 정보 전달과 함께 온라인/모바일 채널을 통해 파티 참여자 모집을 위한 이벤트 프로모션 진행'
      },
      {
        id: 4,
        title: 'kinder joy micro site',
        img: 'kinder-micro-site.jpg',
        description:
          '2015년에 한국에 정식으로 런칭 하면서, 새로운 소식을 많은 고객들에게 접할 수 있도록 공식 웹&모바일 사이트를 제작하였습니다. 웹사이트에서는 킨더조이만의 철학인 성장하는 아이들이게 사이트에서 창의성과 행복한 순간을 한 눈에 볼 수 있도록 구성 하였습니다.'
      },
      {
        id: 5,
        title: 'kinder joy christmas event',
        img: 'kinder-christmas-event.jpg',
        description:
          "1년 중 가장 큰 시즌 중에 하나인 크리스마스를 메인 테마로 잡고 '크리스마스 트리 만들기' 및 '검색 즉석당첨' 이벤트를 기획 하였습니다."
      },
      {
        id: 6,
        title: '돌체구스토 인텐소 이벤트',
        img: 'dolce-gusto-intenso.jpg',
        description:
          '네스카페 돌체구스토의 새로운 캡슐을 런칭하면서, 소비자들에게 런칭 소식과 함께 "아메리카노 전문가" 브랜드 이미지를 인식시키고자 하였습니다.'
      },
      {
        id: 7,
        title: '네스카페 이태원 마이크로 사이트',
        img: 'nescafe-itaewon.jpg',
        description:
          '이태원의 네스카페를 리뉴얼하여 타깃 소비자에게 익숙한 디지털 요소를 활용한 디지털 플레이그라운드를 제작하였습니다.'
      },
      {
        id: 8,
        title: '안녕, 스텔리아 캠페인',
        img: 'nescafe-stellia.jpg',
        description:
          "네스카페 돌체구스토에서 프리미엄 라인으로 새롭게 런칭한 NEW 머신 '스텔리아' 런칭을 기념으로, 크레마 위로 떨어지는 커피 방울에 영감을 받아 디자인 된 유니크한 머신 스텔리아를 알리고, 일상생활에서 쓰이는 가전제품인 커피머신을 통해 고객들의 라이프스타일을 업그레이드해 줄 수 있는 라이프스타일 큐레이터로서의 역할을 수행할 수 있는 캠페인을 진행하고자 하였습니다."
      },
      {
        id: 9,
        title: '캡슐투도어 사이트 리뉴얼',
        img: 'capsule-to-door.jpg',
        description:
          '지난 2015년 캡슐투도어 사이트는 웹어워드 코리아 시상식에서 서비스프로모션 분야 대상을 수상했습니다. 이미 캡슐 정기 구매 사이트로서 그 가치를 충분히 인정 받았지만, 커피를 사랑하는 사람들의 이야기와 라이프스타일을 사이트에 담아 내고자 user friendly way로의 개편을 준비하게 되었습니다.'
      },
      {
        id: 10,
        title: '페레로 로쉐 발렌타인 데이 이벤트',
        img: 'ferrero-romantic.jpg',
        description:
          '발렌타인 데이에 초콜릿 외에도 선물하는 제품군이 점차 다양해짐에 따라 이 시즌동안 제품을 디지털 상에서 확산하고 특별한 발렌타인 선물로써 페레로 로쉐의 의미를 강화할 필요가 있었음'
      },
      {
        id: 11,
        title: '킨더 초코볼 크리스피 런칭 캠페인',
        img: 'kinder-crispy.jpg',
        description:
          '‘킨더’의 새로운 제품 출시 내용을 브랜드 파워를 통해 쉽게 고객에게 커뮤니케이션 할 수 있지만, ‘초코볼 크리스피’라는 제품만을 인지시켜야 하는 메시지가 다양하게 존재 신제품이기 때문에, 최대한 많은 사람들이 먹어 볼 수 있도록 해야 하는데 구매 및 배송 부분에서 디지털 내 한계 존재.'
      },
      {
        id: 12,
        title: '킨더초콜릿 미니 런칭 기념 체험단 & 인증샷 이벤트',
        img: 'kinder-mini.jpg',
        description:
          "기존 제품인 킨더초콜릿의 경우 한 번에 먹이기에는 양이 많다는 엄마들의 의견에 따라 한 입 사이즈로 나누어 먹을 수 있는 신제품 MINI 출시 한 입의 사이즈와 가족 패키지 분야는 한국에서 가장 큰 초콜릿 마켓이기 때문에 '나눔'이라는 컨셉과 함께 아이들끼리 재미있고 신나는 환경에서 필요한 제품으로 인지 및 강조하고자 했다."
      },
      {
        id: 13,
        title: '2017 Face of Kinder 캠페인',
        img: 'face-of-kinder.jpg',
        description:
          "지난 수년간 많은 나라에서 성공적으로 런칭한 Face of kinder 프로모션을 최초로 한국에 런칭했다. 한국 아이들은 과도한 압박에 지쳐 장래희망으로 건물주나 공무원과 같은 안정적인 직장을 원한다. 인지도에 비해 Sales 연결이 저조한 시장상황을 고려하여 고객들에게 제품과의 접점을 끌어올려야 할 시점으로 판단하였다. 그리하여 아이라면 누구나 갖고 있을 '꿈'이라는 컨셉을 통해 엄마와 아이가 함께 참여를 유도했다."
      },
      {
        id: 14,
        title: 'LG유플러스 갤럭시노트9 S펜 프로모션',
        img: 's-pen.jpg',
        description:
          '8월까지 LG유플러스에서 갤럭시노트9을 개통한 고객만을 대상으로 갤럭시노트9과 S펜의 기능을 직접 체험해보고 일상과 관련된 9가지의 주제를 제시, S펜을 활용해 간단한 그림과 펜아트로 그려보는 이벤트를 진행.'
      },
      {
        id: 15,
        title: 'LG유플러스 갤럭시노트9 매장방문 프로모션',
        img: 'visit-store.jpg',
        description:
          '삼성 갤럭시노트9 출시를 기념하여, 갤럭시 노트9과 S펜의 체험 및 구매 전환을 목적으로 유플러스 매장방문을 유도하기 위한 프로모션 매장 방문 시, 유플러스의 다양한 서비스와 혜택을 제공'
      },
      {
        id: 16,
        title: '스튜디오 아테온',
        img: 'studio-arteon.jpg',
        description:
          '폭스바겐의 새로운 플래그쉽 모델아테온의 런칭 캠페인으로 아테온의 아름다움을 강조할 수 있도록 국내 아티스트와 콜라보레이션을 통한 외관의 아름다움을 부각한 영상 및 고객 체험 사이트 개발'
      }
    ]
  },
  methods: {
    createImg(name) {
      return './images/' + name;
    }
  }
});
