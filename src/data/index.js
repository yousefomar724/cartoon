import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

export const navLinks = [
  { id: 1, name: 'الصفحة الرئيسية', route: '/' },
  { id: 2, name: 'برامجنا', route: '/programs' },
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
    name_en: 'The Cuphead Show',
    name_ar: 'مغامرات كاب هيد',
    img: '/imgs/hero.jpg',
    seasons: [
      {
        id: 1,
        name_en: 'season 1',
        name_ar: 'الموسم الاول',
        img: '/imgs/season1.jpg',
        episodes: [
          {
            id: 1,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABdQKI4-hzLKbksOtWV4XiZ-1-u2C9J79j-P9ZjhEFCRIdS6gZIZ2oIlcaTH2ofdMLXzQTY8nR-tfdKzc1n_M2R1WQGMCTKlkqMijTLVRvhF3kZtmVrDJp-SS.jpg',
            title: 'مهرجان الشرّ',
          },
          {
            id: 2,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABYqsZNj6kqfVqQwfNps0ykinq1rwjPVBdG9nvBcG2mU2vWxIvalcSA5wLAptZqR-1fbdZYjL7-5sTkhCgBXFXCIlVb7MRt9cjYu7zYHRSL-_SoXuwpDV7jyQ.jpg',
            title: 'قنينة الرضاعة',
          },
        ],
      },
      {
        id: 2,
        name_en: 'season 2',
        name_ar: 'الموسم الثاني',
        img: '/imgs/season2.jpg',
        episodes: [
          {
            id: 1,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABdQKI4-hzLKbksOtWV4XiZ-1-u2C9J79j-P9ZjhEFCRIdS6gZIZ2oIlcaTH2ofdMLXzQTY8nR-tfdKzc1n_M2R1WQGMCTKlkqMijTLVRvhF3kZtmVrDJp-SS.jpg',
            title: 'مهرجان الشرّ',
          },
          {
            id: 2,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABYqsZNj6kqfVqQwfNps0ykinq1rwjPVBdG9nvBcG2mU2vWxIvalcSA5wLAptZqR-1fbdZYjL7-5sTkhCgBXFXCIlVb7MRt9cjYu7zYHRSL-_SoXuwpDV7jyQ.jpg',
            title: 'قنينة الرضاعة',
          },
        ],
      },
      {
        id: 3,
        name_en: 'season 3',
        name_ar: 'الموسم الثالث',
        img: '/imgs/season3.jpg',
        episodes: [
          {
            id: 1,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABdQKI4-hzLKbksOtWV4XiZ-1-u2C9J79j-P9ZjhEFCRIdS6gZIZ2oIlcaTH2ofdMLXzQTY8nR-tfdKzc1n_M2R1WQGMCTKlkqMijTLVRvhF3kZtmVrDJp-SS.jpg',
            title: 'مهرجان الشرّ',
          },
          {
            id: 2,
            img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABYqsZNj6kqfVqQwfNps0ykinq1rwjPVBdG9nvBcG2mU2vWxIvalcSA5wLAptZqR-1fbdZYjL7-5sTkhCgBXFXCIlVb7MRt9cjYu7zYHRSL-_SoXuwpDV7jyQ.jpg',
            title: 'قنينة الرضاعة',
          },
        ],
      },
    ],
    heroBg:
      'https://flowind.net/wp-content/uploads/2022/08/AAAABdJ-07XHhzobIGMoOTWLRiOjHCxfaUfUxnO0-55f-LrXyIEwcmr3u620UqSIgccTV2W2G6j3FPTrpOljwwwcQPErL3ke5wV5I_LU-1.jpg',
    heroImg:
      'https://flowind.net/wp-content/uploads/2022/08/AAAABQPFOaQ508SYPY6zmLYONRQPcPWqzWiv1t-qwRHh60Fr0WRySn2cEUzpFzsWIfMLX4pApOATtJnPeXfvC73ugP-U03XNCKVtQ8vqtjKeLDIq-Uj3ECcmgak147PZ3eGdZjs4MVcxWltq6wUnqASHAQPZRV8-nuyMkIFtetfDS06LPyq57ZbN5A.png',
    heroDescription:
      'لنتابع المغامرات المؤسفة لـ"كاب هيد" المتهوّر وشقيقه سهل التأثّر "ماغ مان" في سلسلة الرسوم المتحرّكة هذه المستوحاة من لعبة الفيديو الشهيرة',
    bannerImg:
      'https://flowind.net/wp-content/uploads/elementor/thumbs/thecup-ptgjjr7cw3xjmjej2m5sh3w2erwazrm9wn2i26lkq8.png',
  },
  // {
  //   id: 2,
  //   name: 'ماذا لو...؟',
  //   img: 'https://flowind.net/wp-content/uploads/2022/08/What-If...-2021-200x300.jpg',
  //   season: 'موسم واحد',
  //   heroBg:
  //     'https://flowind.net/wp-content/uploads/2022/08/4N6zEMfZ57zNEQcM8gWeERFupMv-scaled.jpg',
  //   heroImg:
  //     'https://flowind.net/wp-content/uploads/2022/08/1307418-t-f6b429f5a66e-1536x635.webp',
  //   heroTitle: 'WHAT IF...?',
  //   heroDescription:
  //     'المسلسل يغير أحداث عالم مارفل السينمائي بإعادة تخيل الأحداث من الأفلام بطرق غير متوقعة',
  //   bannerImg:
  //     'https://flowind.net/wp-content/uploads/elementor/thumbs/wi-szicker-1-ptghrlpwg6418ml6odvfssoiv23gnfxs346hxbpve8.png',
  //   episodes: [
  //     {
  //       id: 1,
  //       title: 'ماذا لو... كانت كابتن كارتر أول واحدة في أفنجرز؟',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/1171685-h-468c668814e0-1536x864.webp',
  //     },
  //     {
  //       id: 2,
  //       title: 'ماذا لو... أصبح تتشالا هو ستار لورد؟',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/1171709-h-adce3366fc27-1536x864.webp',
  //     },
  //     {
  //       id: 3,
  //       title: 'ماذا لو... فقد العالم أقوى أبطاله؟',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/1171707-h-8fdf44cb8a01-1536x864.webp',
  //     },
  //     {
  //       id: 4,
  //       title: 'ماذا لو... فقد دكتور سترانج قلبه بدلاً من يديه؟',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/1171711-h-d549b838ea31-1536x864.webp',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: 'آركين',
  //   img: 'https://flowind.net/wp-content/uploads/2022/08/Arcane-2021-1-200x300.png',
  //   season: 'موسم واحد',
  //   heroBg:
  //     'https://flowind.net/wp-content/uploads/2022/08/AAAABUZWRssApmiwSfT2h2o0Dw8r0On_4T975DyjZwzIbDV_NNRQkkRXfPdrGyA91yYJpFLAXXo0W3cgPKk-s8sYUAWcSiRLdUxePV8a.jpg',
  //   heroImg:
  //     'https://flowind.net/wp-content/uploads/2022/08/dfff-1-1536x864.png',
  //   heroTitle: 'ARCANE',
  //   heroDescription:
  //     'وسط صراع مرير يفصل بين مدينتي "بيلتوفر" و"زون" المترابطتين، تُقاتل أختان على طرفي نقيض في حرب بين التقنيات السحرية والمعتقدات المتضاربة',
  //   bannerImg:
  //     'https://flowind.net/wp-content/uploads/elementor/thumbs/arcane-sticker-3-ptgfp32in03otitvt6a74lmzhddwfa3uiaaq9m7gog.png',
  //   episodes: [
  //     {
  //       id: 1,
  //       title: 'مرحبًا بكم في ساحة اللعب',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABboqUbFzIthWGiSJjoGOXxGy7jZPKFJlUAHuceiLEY7dqwNY9PIDzrcN2O8HqSqybFCSG7VAtUdAJU9wf36pbCvHms0dc5NK9Ru4pAiL4b7qdcZFOG2iXEv_.jpg',
  //     },
  //     {
  //       id: 2,
  //       title: 'بعض الألغاز يُفضّل أن تُترك دون حلّ',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABY9LebHXOUR4p4PCtt4U0DNKqxlTZVdfUOfkfC8VUcVK3na3shy_tlqMXlqZdFbw-WVrfdxLnejnQKBvea8-_QV6vJPGfBvBo_KCt8kQFN9XlVDyApd6mSai.jpg',
  //     },
  //     {
  //       id: 3,
  //       title: 'العنف الأساسي الضروري لأجل التغيير',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABU1PrCiA5qQM_wkEMtve1fJJOtwuiIcAWuSzpSOU-X8nCyaWmqJEp7JQRtBTU9xdIdqNOLhUi7IohlfVDsX8fjA70_DLLmqtCs0YvFxkYj8np6D2ubHdoJWg.jpg',
  //     },
  //     {
  //       id: 4,
  //       title: '! يوم تقدّم سعيد',
  //       img: 'https://flowind.net/wp-content/uploads/2022/08/AAAABdm-rgpTdVeZmz4m24wvIUTZTGqGI2SL7-MBDwkk_99AsxqpBSf1EYLg4Q8KaReOzBA-pDCtUstJjNhTac6K08_FXJMUCfcuWjzQlnvIcYvjUSUhogaXUkER.jpg',
  //     },
  //   ],
  // },
]
