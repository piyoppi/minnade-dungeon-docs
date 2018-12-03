module.exports = {
  head: [
  ],
  title: 'みんなでつくるダンジョン：ヘルプ',
  description: '二次元マッププラットフォーム「みんなでつくるダンジョン」の使い方',
  port:'8765',
  base: '/minnade-dungeon-docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      '/',
      '/guide/texture/',
      '/guide/animation/',
      '/guide/item/',
      '/guide/map/',
      '/guide/connector/',
      '/guide/avatar/',
    ]
  }
}
