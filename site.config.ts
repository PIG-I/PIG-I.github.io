import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://pig-i.info',
  lang: 'zh-CN',
  title: 'Torches',
  author: {
    name: 'Torches',
    avatar: '/portrait.jpg',
    status:
    {
      emoji: '🤨',
      message: '要考研，好累啊'
    }
  },
  mode: 'auto',
  lastUpdated: true,
  description: '保持热爱',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    {
      name: 'QQ  1021123047',
      link: 'https://user.qzone.qq.com/1021123047?ADUIN=1021123047&ADSESSION=1689045166&ADTAG=CLIENT.QQ.5989_MyTip.0&ADPUBNO=27321&source=namecardhoverstar',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/PIG-I',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/629270230',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'PIG-I20230210@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: false,
  },
  sponsor: {
    enable: false,
    title: '我直到我很强，但是你更强👍'
    // methods: [
    //   {
    //     name: '支付宝',
    //     url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
    //     color: '#00A3EE',
    //     icon: 'i-ri-alipay-line',
    //   },
    //   {
    //     name: 'QQ 支付',
    //     url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
    //     color: '#12B7F5',
    //     icon: 'i-ri-qq-line',
    //   },
    //   {
    //     name: '微信支付',
    //     url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
    //     color: '#2DC100',
    //     icon: 'i-ri-wechat-pay-line',
    //   },
    // ],
  },
})
