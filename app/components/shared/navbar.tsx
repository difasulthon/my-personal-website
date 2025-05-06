import { Link, useLocation } from '@remix-run/react'
import {Sun, Moon} from 'lucide-react'
import { useState } from 'react';
import { Theme, useTheme } from 'remix-themes';

import { MENU } from '~/constants';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [theme, setTheme] = useTheme()
  const textStyle = 'dark:text-white text-black font-normal hover:bg-gray-300 dark:hover:text-black dark:hover:bg-gray-300'
  const menuActiveStyle = 'dark:bg-white bg-black dark:text-black text-white font-medium'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='flex flex-row justify-between md:px-52 px-4 py-5 sticky top-0 z-50 dark:bg-backgroundDark bg-gray-100'>
      <section className='flex flex-row gap-1'>
      {theme === Theme.DARK ? <img
        src="/images/logo-dark.png"
        alt="difasulthon-logo"
        className="rounded-md w-6 h-6"
        /> : <img
            src="/images/logo-light.png"
            alt="difasulthon-logo"
            className="rounded-md w-6 h-6"
            />
      }
      <Link to="/" className={`font-medium font-limeLight dark:text-white text-black`}>DifaSulthon</Link>
      </section>
      <section className='md:flex flex-row gap-6 hidden'>
        {MENU.map((menu) => (
          <Link 
            key={menu.id} 
            to={menu.href} 
            className={`
              ${currentPath === menu.href ? `${menuActiveStyle}` : `${textStyle}`} 
              px-2 rounded-sm
              `}
            >{menu.title}
          </Link>
        ))}
      </section>
      <section className='flex flex-row gap-2'>
        {theme === Theme.DARK ? 
          <Moon className='hover:cursor-pointer md:w-6 md:h-6 w-5 h-5' color='white' onClick={() => setTheme(Theme.LIGHT)} /> : 
          <Sun className='hover:cursor-pointer' color='black' onClick={() => setTheme(Theme.DARK)} />
        }
      </section>
      {isMobileMenuOpen ? <section className='fixed bottom-0 left-0 w-full p-4 flex flex-row gap-6 shadow-lg dark:bg-backgroundDark bg-gray-100 md:hidden z-50'>
        {MENU.map((menu) => (
          <Link 
            key={menu.id} 
            to={menu.href} 
            className={`
              ${currentPath === menu.href ? `${menuActiveStyle}` : `${textStyle}`} 
              px-2 rounded-sm
              `}
            onClick={() => setIsMobileMenuOpen(false)}
            >{menu.title}
          </Link>
        ))}
      </section> : null}
    </div>
  )
}