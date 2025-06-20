import { Link } from "@remix-run/react"
import { FaGithub } from "react-icons/fa6"
import { ImLinkedin } from "react-icons/im"
import { SiMedium } from "react-icons/si"
import { Theme, useTheme } from "remix-themes"

import { MENU } from "~/constants"

function Footer() {
  const [theme] = useTheme()

  return (
    <>
      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}
      <div className="flex flex-col md:px-56 px-8 pt-6 md:pb-4 pb-20 dark:bg-backgroundDark bg-white">
        <div className="flex md:flex-row flex-col md:justify-between">
          <div className="flex flex-col md:block items-center gap-2">
            <div className="flex flex-row gap-3 font-semibold md:text-3xl text-2xl">
              <span className="text-yellow-400 dark:text-yellow-500">Difa</span>
              <span>Sulthon</span>
            </div>
            <p className="md:text-normal text-sm dark:text-gray-400 text-gray-500 text-center">Showcasing my development portfolio and professional background</p>
          </div>
          <div className="flex flex-col md:items-end items-center mt-6 md:mt-0">
            <section className="mb-6">
              {MENU.map((menu) => (
                <Link 
                  key={menu.id} 
                  to={menu.href} 
                  className="dark:text-white text-black md:text-sm text-sm px-2 rounded-sm"
                  >{menu.title}
                </Link>
              ))}
            </section>
            <section className="flex flex-row gap-6 mb-11">
              <Link
                to='https://www.linkedin.com/in/difasulthon/'
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md dark:bg-backgroundDark bg-white"
              >
                <ImLinkedin className="w-6 h-6 dark:text-white text-black" />
              </Link>
              <Link
                to='https://github.com/difasulthon'
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md dark:bg-backgroundDark bg-white"
              >
                <FaGithub className="w-6 h-6 dark:text-white text-black" />
              </Link>
              <Link
                to='https://medium.com/@mdifasulthon'
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center rounded-md dark:bg-backgroundDark bg-white"
              >
                <SiMedium className="w-6 h-6 dark:text-white text-black" />
              </Link>
            </section>
          </div>
        </div>
        <p className="md:text-sm text-xs dark:text-white text-black text-center md:text-left">© 2025 Difa Sulthon. All Right Reserverd</p>
      </div>
    </>
  )
}

export default Footer