import React from 'react';
export const PROJECT_NAME = 'react-next-web'
export const WEBSITE_TITLE = 'D.w'
export const TITLE = '戴伟的个人网站 | web前端开发'
export const DESC = '每一行代码都有一个成为参天大树的梦想,作为一名前端工程师,在这里记录自己学习前端开发过程的经历,并和大家一起分享,也希望在学习和网站的开发中进步'
export const KEYWORDS = '戴伟的个人网站,个人作品,前端开发,个人博客,戴伟的网站,未曾遗忘的青春,web前端,技术分享,前端'
export const TITLE_ENTRY = 'ヽ(✿ﾟ▽ﾟ)ノ 欢迎回来'
export const TITLE_OUT = 'w(ﾟДﾟ)w 你走了 呜啊啊'
export const SVG_DEFAULT_COLOR = 'green'
export const CONSOLE_TEXT = '    R E A C T - W E B S I T E    '
export const CONSOLE_BGS = ['#a18cd1', '#fbc2eb']

export const SELF_SHEET_INFO = {
  id: 2179377798,
  name: '程序员必备，带上耳机代码就是全世界'
}

export const DEFAULT_BLOG_DETAIL = {
  detail: {
    id: '',
    name: '',
    readCount: '',
    editDate: '',
    createDate: '',
    content: '',
    tagLists: [{
      id: '',
      name: ''
    }]
  },
  next: {
    id: null,
    name: null
  },
  prev: {
    id: null,
    name: null
  }
}

export const MUSIC_SHEET_DEFAULT_LIMIT = 30
export const MUSIC_SHEET_TRANSITION_DURATION = MUSIC_SHEET_DEFAULT_LIMIT * 200 / 2

export const MUSIC_SEARCH_DEFAULT_LIMIT = 20

export const BLOG_LIST_DEFAULT_LIMIT = 12

export const INTER_LINK_DEFAULT_LIMIT = 12

export const BLOG_TAGS_ALL_INFO = {
  id: '',
  name: '全部'
}

// 排行榜信息
export const MUSIC_RANK_TYPE: any = {
  '0': '云音新歌榜',
  '1': '云音热歌榜',
  '2': '网易原创歌曲榜',
  '3': '云音乐飙升榜',
  '4': '云音乐电音榜',
  '5': 'UK排行榜周榜',
  '6': '美国Billboard周榜',
  '7': 'KTV嗨榜',
  '8': 'iTunes榜',
  '10': '日本Oricon周榜',
  '12': '韩国Mnet排行榜周榜',
  '17': '华语金曲榜',
  '22': '云音乐ACG音乐榜'
}

// copyright 配置
export const COPY_RIGHT_CONFIG: Array<{name: string; to: string}> = [
  // {
  //   name: 'd-utils',
  //   to: 'https://d-utils.daiwei.site'
  // }
  // , {
  //   name: '友情链接',
  //   to: '/interlink'
  // }
]

export const HOME_LINK_LISTS: Array<{
  href: string;
  title: React.ReactNode | any;
  self: boolean;
}> = [{
  href: '/blog',
  title: '文章',
  self: true
}, {
  href: 'https://github.com/ifmiss',
  title: () => (
    <React.Fragment>
      <svg className="octicon octicon-mark-github v-align-middle" height="16" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      {/* github */}
    </React.Fragment>
  ),
  self: false
}, {
  href: 'https://w1.daiwei.site/web_v3/',
  title: 'react v3',
  self: false
}, {
  href: 'https://v2.daiwei.site',
  title: 'vue v2',
  self: false
}, {
  href: 'https://www.omnidoor.org?res=daiwei',
  title: '🐸 omni door-cli',
  self: false
}, {
  href: 'https://daiwei.site/diff/',
  title: 'code-diff',
  self: false
},]


export const PAGE_LAYOUT_SEO = {
  home: {
    title: 'hello',
    desc: '123123',
    keywords: [
      '123',
      '212312'
    ].toString()
  },
  blogList: {
    title: 'hello',
    desc: '123123',
    keywords: [
      '123',
      '212312'
    ].toString()
  },
  friendChain: {
    title: 'hello',
    desc: '123123',
    keywords: [
      '123',
      '212312'
    ].toString()
  }
}
