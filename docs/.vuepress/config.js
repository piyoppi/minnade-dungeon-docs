module.exports = {
  head: [
    ['meta', { name: 'og:url', content: 'https://garakuta-toolbox.com/minnade-dungeon-docs' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'みんなでつくるダンジョン：ヘルプ' }],
    ['meta', { name: 'og:description', content: 'マップをつくってつなげてたんけんできる「みんなでつくるダンジョン」の使い方を解説しています' }],
    ['meta', { name: 'og:image', content: 'https://garakuta-toolbox.com/minnade-dungeon-docs/images/ogimage.png' }]
  ],
  title: 'みんなでつくるダンジョン',
  description: '二次元マッププラットフォーム「みんなでつくるダンジョン」の使い方',
  port:'8765',
  base: '/minnade-dungeon-docs/',
  themeConfig: {
    nav: [
      { text: 'トップへ', link: '/' },
    ],
    sidebar: [
      '/',
      '/guide/tutorial/',
      '/guide/texture/',
      '/guide/animation/',
      '/guide/item/',
      '/guide/map/',
      '/guide/connector/',
      '/guide/avatar/',
      '/guide/sound/',
      '/guide/plugin/',
      '/guide/counter/',
      '/guide/sample-map/',
      '/guide/how-to-smartphone/',
    ]
  }
}
