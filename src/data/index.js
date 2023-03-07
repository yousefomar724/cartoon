import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

export const navLinks = [
  { id: 1, name: 'الصفحة الرئيسية', route: '/' },
  { id: 2, name: 'برامجنا', route: '/programs' },
  { id: 3, name: 'أفلام', route: '/movies' },
  { id: 4, name: 'حول الفريق', route: '/about' },
  { id: 5, name: 'راسلنا', route: '/contact' },
]
export const socialLinks = [
  {
    id: 1,
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: BsFacebook,
  },
  { id: 2, title: 'Youtube', url: 'https://www.youtube.com', icon: BsYoutube },
  {
    id: 3,
    title: 'Instagram',
    url: 'https://www.instagram.com',
    icon: BsInstagram,
  },
]
export const programs = [
  {
    id: 1,
    name: 'وقت المغامرة',
    img: 'https://flowind.net/wp-content/uploads/2022/09/at-pos-200x300.png',
    season: 'موسم واحد',
    heroBg:
      'https://flowind.net/wp-content/uploads/2022/09/Adventure-Time-New-Size-Feature.jpg',
    heroImg: 'https://flowind.net/wp-content/uploads/2022/09/jjj.png',
    heroTitle: 'Adventure time',
    heroDescription:
      'صبي يبلغ من العمر 12 عامًا وصديقه المقرب ، كلب حكيم يبلغ من العمر 28 عامًا يتمتع بقوى سحرية ، يخوضان سلسلة من المغامرات السريالية مع بعضهما البعض في مستقبل بعيد',
    bannerImg:
      'https://flowind.net/wp-content/uploads/2022/09/AT-S1-BANNER-1536x864.png',
    episodes: [
      {
        id: 1,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E1_slumberpartypanic.webp',
        title: 'الحفلة المخيفة',
      },
      {
        id: 2,
        img: 'https://flowind.net/wp-content/uploads/2022/09/unnamed-file.webp',
        title: 'مشاكل في الفضاء الوعر',
      },
      {
        id: 3,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E3_prisonersoflove-1536x864.webp',
        title: 'سجينات الحب',
      },
      {
        id: 4,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E4_treetrunks.webp',
        title: 'تري ترانكس',
      },
      {
        id: 5,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E05_The_Enchiridion.webp',
        title: '! دليل الأبطال',
      },
      {
        id: 6,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E6_thejiggler.webp',
        title: 'الهزهاز',
      },
      {
        id: 7,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E7_ricardiotheheartguy.webp',
        title: 'ريكارديو القلب العاشق',
      },
      {
        id: 8,
        img: 'https://flowind.net/wp-content/uploads/2022/09/Titlecard_S1E8_businesstime.webp',
        title: 'زمن الأعمال',
      },
    ],
  },
  {
    id: 2,
    name: 'ماذا لو...؟',
    img: 'https://flowind.net/wp-content/uploads/2022/08/What-If...-2021-200x300.jpg',
    season: 'موسم واحد',
    heroBg:
      'https://flowind.net/wp-content/uploads/2022/08/4N6zEMfZ57zNEQcM8gWeERFupMv-scaled.jpg',
    heroImg:
      'https://flowind.net/wp-content/uploads/2022/08/1307418-t-f6b429f5a66e-1536x635.webp',
    heroTitle: 'WHAT IF...?',
    heroDescription:
      'المسلسل يغير أحداث عالم مارفل السينمائي بإعادة تخيل الأحداث من الأفلام بطرق غير متوقعة',
    bannerImg:
      'https://flowind.net/wp-content/uploads/elementor/thumbs/wi-szicker-1-ptghrlpwg6418ml6odvfssoiv23gnfxs346hxbpve8.png',
    episodes: [
      {
        id: 1,
        title: 'ماذا لو... كانت كابتن كارتر أول واحدة في أفنجرز؟',
        img: 'https://flowind.net/wp-content/uploads/2022/08/1171685-h-468c668814e0-1536x864.webp',
      },
      {
        id: 2,
        title: 'ماذا لو... أصبح تتشالا هو ستار لورد؟',
        img: 'https://flowind.net/wp-content/uploads/2022/08/1171709-h-adce3366fc27-1536x864.webp',
      },
      {
        id: 3,
        title: 'ماذا لو... فقد العالم أقوى أبطاله؟',
        img: 'https://flowind.net/wp-content/uploads/2022/08/1171707-h-8fdf44cb8a01-1536x864.webp',
      },
      {
        id: 4,
        title: 'ماذا لو... فقد دكتور سترانج قلبه بدلاً من يديه؟',
        img: 'https://flowind.net/wp-content/uploads/2022/08/1171711-h-d549b838ea31-1536x864.webp',
      },
    ],
  },
  {
    id: 3,
    name: 'آركين',
    img: 'https://flowind.net/wp-content/uploads/2022/08/Arcane-2021-1-200x300.png',
    season: 'موسم واحد',
    heroBg:
      'https://flowind.net/wp-content/uploads/2022/08/AAAABUZWRssApmiwSfT2h2o0Dw8r0On_4T975DyjZwzIbDV_NNRQkkRXfPdrGyA91yYJpFLAXXo0W3cgPKk-s8sYUAWcSiRLdUxePV8a.jpg',
    heroImg:
      'https://flowind.net/wp-content/uploads/2022/08/dfff-1-1536x864.png',
    heroTitle: 'ARCANE',
    heroDescription:
      'وسط صراع مرير يفصل بين مدينتي "بيلتوفر" و"زون" المترابطتين، تُقاتل أختان على طرفي نقيض في حرب بين التقنيات السحرية والمعتقدات المتضاربة',
    bannerImg:
      'https://flowind.net/wp-content/uploads/elementor/thumbs/arcane-sticker-3-ptgfp32in03otitvt6a74lmzhddwfa3uiaaq9m7gog.png',
    episodes: [
      {
        id: 1,
        title: 'مرحبًا بكم في ساحة اللعب',
        img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABboqUbFzIthWGiSJjoGOXxGy7jZPKFJlUAHuceiLEY7dqwNY9PIDzrcN2O8HqSqybFCSG7VAtUdAJU9wf36pbCvHms0dc5NK9Ru4pAiL4b7qdcZFOG2iXEv_.jpg',
      },
      {
        id: 2,
        title: 'بعض الألغاز يُفضّل أن تُترك دون حلّ',
        img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABY9LebHXOUR4p4PCtt4U0DNKqxlTZVdfUOfkfC8VUcVK3na3shy_tlqMXlqZdFbw-WVrfdxLnejnQKBvea8-_QV6vJPGfBvBo_KCt8kQFN9XlVDyApd6mSai.jpg',
      },
      {
        id: 3,
        title: 'العنف الأساسي الضروري لأجل التغيير',
        img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABU1PrCiA5qQM_wkEMtve1fJJOtwuiIcAWuSzpSOU-X8nCyaWmqJEp7JQRtBTU9xdIdqNOLhUi7IohlfVDsX8fjA70_DLLmqtCs0YvFxkYj8np6D2ubHdoJWg.jpg',
      },
      {
        id: 4,
        title: '! يوم تقدّم سعيد',
        img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABdm-rgpTdVeZmz4m24wvIUTZTGqGI2SL7-MBDwkk_99AsxqpBSf1EYLg4Q8KaReOzBA-pDCtUstJjNhTac6K08_FXJMUCfcuWjzQlnvIcYvjUSUhogaXUkER.jpg',
      },
    ],
  },
]
