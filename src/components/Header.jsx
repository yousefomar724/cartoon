import { BsPaypal } from 'react-icons/bs'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { navLinks, socialLinks } from '../data'
import { useState } from 'react'

const Header = () => {
  const [menuOn, setMenuOn] = useState(false)
  return (
    <header className='fixed z-10 w-full shadow-lg'>
      {/* upper Header */}
      <div className='bg-gradient-to-r from-primary-900 to-secondary-900 px-4 py-1 hidden md:block'>
        <div className='text-sm text-white flex justify-between'>
          <a
            href='mailto:info@bitqan.com'
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 items-center py-2 px-10 rounded-full bg-[#172e82] text-white'
          >
            <span className='text-sm'>
              يمكنكم مساعدتنا مالياً من هنا لإبقاء فلويند في إستمرار
            </span>
            <BsPaypal />
          </a>

          <div className='flex items-center gap-4'>
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className='text-2xl text-white'
                title={link.title}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Header */}
      <div className='hidden md:flex justify-between px-5 py-3 items-center'>
        <h4 className='text-2xl font-bold'>Cartoon</h4>

        <div className='lg:flex hidden justify-center text-primary-900 divide-x-2 divide-x-reverse'>
          {navLinks.map((link) => (
            <a
              href={link.route}
              className='px-3 text-lg font-medium'
              key={link.id}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Menu open/close icon */}
        <div className='lg:hidden inline text-5xl cursor-pointer text-primary-900'>
          {menuOn ? (
            <BiX onClick={() => setMenuOn(false)} />
          ) : (
            <BiMenuAltRight onClick={() => setMenuOn(true)} />
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className='bg-white px-4 py-2 md:py-0'>
        <div className='flex lg:hidden items-center max-w-7xl mx-auto text-white'>
          {/* Logo */}
          <div className='flex flex-1 md:hidden'>
            <h4 className='text-2xl font-bold'>Cartoon</h4>
          </div>

          {/* Nav links */}
          <div
            className={`flex-grow items-center transition-all duration-500 ease-in-out flex h-[calc(100%-65px)] md:h-[calc(100%-105px)] flex-col fixed z-50 bottom-0 bg-primary-700 justify-center w-full lg:text-base lg:z-auto lg:h-auto lg:w-auto lg:static lg:flex lg:flex-row ${
              menuOn ? 'gap-10 text-2xl left-0' : 'gap-4 text-base left-[200vh]'
            }`}
          >
            <div className='flex flex-col justify-center gap-6 items-center'>
              {navLinks.map((link) => (
                <a
                  href={link.route}
                  onClick={() => setMenuOn(false)}
                  key={link.id}
                  className='border-2 border-transparent hover:border-gray-200 px-5 rounded-md py-1 font-bold transition text-white'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Menu open/close icon */}
          <div className='md:hidden inline text-5xl cursor-pointer text-primary-900'>
            {menuOn ? (
              <BiX onClick={() => setMenuOn(false)} />
            ) : (
              <BiMenuAltRight onClick={() => setMenuOn(true)} />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
