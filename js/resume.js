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
        date: '2014.9 - 2014.7',
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
    ]
  },
  methods: {
    createImg(skill) {
      return './images/' + skill;
    }
  }
});
