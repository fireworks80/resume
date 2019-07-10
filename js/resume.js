new Vue({
  el: '#js-app',
  data: {
    contact: {
      email: 'fireworks80@naver.com',
      tel: '01071186655',
      github: 'fireworks80.github.com'
    },
    skills: [
      { kind: 'html', point: 90 },
      { kind: 'css', point: 90 },
      { kind: 'scss', point: 90 },
      { kind: 'js', point: 70 },
      { kind: 'vue', point: 60 },
      { kind: 'photoshop', point: 60 }
    ],
    careers: [
      {
        date: '2013.2 - 2013.9',
        company: 'oncx',
        work: 'php 웹 개발',
        desc: 'oncx 컨텐츠 개발, '
      },
      {
        date: '2013.9 - 2014.3',
        company: '디지털베이 시스템',
        work: '웹퍼블리싱'
      },
      {
        date: '2014.9 - 2014.7',
        company: '머큐리코퍼레이션',
        work: '웹퍼블리싱'
      },
      {
        date: '2015.4 - ',
        company: '펜타클',
        work: '웹퍼블리싱, 인터렉티브 웹개발, 프론트엔드'
      }
    ]
  }
});
