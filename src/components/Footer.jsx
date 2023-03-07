import { socialLinks } from '../data'

const Footer = () => {
  return (
    <div className='flex md:justify-between flex-wrap gap-6 md:gap-0 justify-center items-center max-w-6xl mx-auto border-t border-gray-300 p-6'>
      <div className='flex gap-4 text-white'>
        <a
          href=''
          target='_blank'
          rel='noreferrer'
          className='text-sm underline'
        >
          سياسة الخصوصية
        </a>
        <a
          href=''
          target='_blank'
          rel='noreferrer'
          className='text-sm underline'
        >
          شروط الاستخدام
        </a>
      </div>
      <p className='text-base md:text-lg font-medium order-3 md:order-2 text-white'>
        جميع الحقوق محفوظة لكارتون
      </p>
      <div className='flex items-center justify-center gap-6 order-2 md:order-3'>
        {socialLinks.map((link) => (
          <a href={link.url} target='_blank' rel='noreferrer' key={link.id}>
            <link.icon className='text-3xl text-gray-300 hover:text-white' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
