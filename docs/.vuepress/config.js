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
      { text: 'ドキュメント', link: '/guide/' },
      { text: 'チュートリアル', link: '/tutorial/' },
    ],
    sidebar: {
      '/guide/': [
        '/guide/',
        'map/',
        'item/',
        'texture/',
        'animation/',
        'tiled/',
        'connector/',
        'avatar/',
        'sound/',
        'item-collection/',
        'plugin/',
        'counter/',
        'how-to-smartphone/',
        'registeration-textures/',
        'thanks/'
      ],
      '/tutorial/': [
        '/tutorial/',
        'signup/',
        'parts/',
        'upload-image/',
        'animation/',
        'play/',
        'parts-settings/',
        'plugin/',
        'connector/',
        'publish/',
      ]
    }
  }
}
