import { useLocation } from 'react-router-dom'
import {Sun, Moon} from 'lucide-react'

import { useTheme } from '../../theme/provider';
import { MENU } from '../../constants';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const {theme, setTheme} = useTheme()
  const textStyle = 'dark:text-white text-black font-normal hover:bg-gray-300 dark:hover:text-black dark:hover:bg-gray-300'
  const menuActiveStyle = 'dark:bg-white bg-black dark:text-black text-white font-medium'

  return (
    <div className='flex flex-row justify-between md:px-52 px-4 py-5 sticky top-0 z-50 dark:bg-backgroundDark bg-gray-100'>
      <section className='flex flex-row gap-1'>
      {theme === 'dark' ? <img
        src="/images/logo-dark.png"
        alt="difasulthon-logo"
        className="rounded-md w-6 h-6"
        /> : <img
              src="/images/logo-light.png"
              alt="difasulthon-logo"
              className="rounded-md w-6 h-6"
              />
      }
      <a href="/" className={`font-medium font-limeLight dark:text-white text-black`}>DifaSulthon</a>
      </section>
      <section className='md:flex flex-row gap-6 hidden'>
        {MENU.map((menu) => (
          <a 
            key={menu.id} 
            href={menu.href} 
            className={`
              ${currentPath === menu.href ? `${menuActiveStyle}` : `${textStyle}`} 
              px-2 rounded-sm
              `}
            >{menu.title}
          </a>
        ))}
      </section>
      <section className='flex flex-row gap-2'>
        {theme === 'dark' ? 
          <Moon className='hover:cursor-pointer md:w-6 md:h-6 w-5 h-5' color='white' onClick={() => setTheme('light')} /> : 
          <Sun className='hover:cursor-pointer' color='black' onClick={() => setTheme('dark')} />
        }
      </section>
    </div>
  )
}