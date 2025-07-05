import { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { FaToolbox } from "react-icons/fa6";
import { RiClapperboardFill } from "react-icons/ri";
import { FaPerson } from "react-icons/fa6";

import { MENU } from '../../constants'

function MenuIcon({title}: {title: string}) {
  switch(title) {
    case 'Home':
      return <GoHomeFill />
    case 'Experiences':
      return <FaToolbox />
    case 'Projects':
      return <RiClapperboardFill />
    case 'About':
      return <FaPerson />
  }
}

const BottomMenu = memo(() => {
  const location = useLocation();
  const currentPath = location.pathname;

  const textStyle = 'dark:text-white text-black font-normal hover:bg-gray-300 dark:hover:text-black dark:hover:bg-gray-300'
  const menuActiveStyle = 'dark:bg-white bg-black dark:text-black text-white font-medium'

  return (
    <section className='fixed bottom-0 left-0 w-full py-4 px-12 flex flex-row justify-between dark:bg-backgroundDark bg-gray-100 md:hidden z-50'>
      {MENU.map((menu) => (
        <a
          key={menu.id} 
          href={menu.href} 
          className={`
              ${currentPath === menu.href ? `${menuActiveStyle}` : `${textStyle}`} 
              px-2 py-2 rounded-sm
            `}
          >
            <MenuIcon title={menu.title} />
        </a>
      ))}
    </section>
  )
})

export default BottomMenu