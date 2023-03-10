import { BsPaypal } from 'react-icons/bs'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { navLinks, socialLinks } from '../data'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOn, setMenuOn] = useState(false)
  const { pathname } = useLocation()
  return (
    <header className='fixed z-10 w-full shadow-lg bg-white'>
      {/* upper Header */}
      <div className='bg-gradient-to-r from-secondary-900 via-primary-900 to-secondary-900 px-4 py-2 hidden md:block'>
        <div className='text-sm text-white flex justify-between'>
          <a
            href='https://paypal.com'
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 items-center py-2 px-10 rounded-full bg-primary-900 text-gray-200 hover:text-white transition'
          >
            <span className='text-sm'>
              يمكنكم مساعدتنا مالياً من هنا لإبقاء Ovegrad في إستمرار
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
      <div
        className='hidden md:flex justify-between max-w-7xl mx-auto px-5 py-3 items-center'
        dir='ltr'
      >
        <Link to='/'>
          <h4 className='text-4xl font-bold'>Ovegrad</h4>
        </Link>

        <div className='lg:flex hidden gap-4 justify-center text-primary-900'>
          {navLinks.map((link) => (
            <Link
              to={link.route}
              className={`text-xl font-medium py-2 px-4 rounded-xl ${
                pathname === link.route ? 'bg-primary-900 text-white' : ''
              }`}
              key={link.id}
            >
              {link.name}
            </Link>
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
            <Link to='/' className='text-3xl font-bold text-primary-900'>
              Ovegrad
            </Link>
          </div>

          {/* Nav links */}
          <div
            className={`flex-grow items-center transition-all duration-500 ease-in-out flex h-[calc(100%-65px)] md:h-[calc(100%-105px)] flex-col fixed z-50 bottom-0 bg-primary-800 justify-center w-full lg:text-base lg:z-auto lg:h-auto lg:w-auto lg:static lg:flex lg:flex-row ${
              menuOn ? 'gap-10 text-2xl left-0' : 'gap-4 text-base left-[200vh]'
            }`}
          >
            <div className='flex flex-col justify-center gap-6 items-center'>
              {navLinks.map((link) => (
                <Link
                  to={link.route}
                  onClick={() => setMenuOn(false)}
                  key={link.id}
                  className='border-2 border-transparent hover:border-gray-200 px-5 rounded-md py-1 font-bold transition text-white'
                >
                  {link.name}
                </Link>
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
