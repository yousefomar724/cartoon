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
