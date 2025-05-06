import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SiMedium } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Home" },
    { name: "description", content: "Difa Sulthon's personal website" },
  ];
};

export default function Index() {
  const nameTextStyle = `font-bold md:text-4xl text-xl dark:text-gray-300 text-black`
  const roleTextStyle = 'font-medium md:text-lg text-sm text-black dark:text-gray-300'
  const introductionTextStyle = `font-normal md:text-sm text-xs dark:text-gray-500 text-gray-400 text-justify md:max-w-[32vw] mt-3`
  // const typingAnimation = 'overflow-hidden whitespace-nowrap animate-typing'

  return (
    <div className="flex md:flex-row flex-col justify-between md:px-56 px-8 md:pt-24 pt-4 pb-36 dark:bg-backgroundDarkBlue bg-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-lexendDeca py-6"
        >
          <p className={`font-semibold text-xl text-yellow-400 dark:text-yellow-500 hidden md:block`}>
            Hello, welcome <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </p>
          <section className={`mt-10 hidden md:block`}>
            <p className={`${nameTextStyle}`}>I`m Muhammad Difa`</p>
            <p className={`${nameTextStyle}`}>Sulthon Diani</p>
            <p className={`${roleTextStyle}`}>(Front End Engineer)</p>
          </section>
          <p className={`${introductionTextStyle} hidden md:block`}>
            Currently living and working as a Front-End Engineer with a strong focus on mobile application development. I`m also a lifelong learner, always exploring new tools, patterns, and best practices in frontend development.
          </p>
          <section className="flex flex-row md:gap-3 gap-2 md:mt-10">
            <Link
              to='https://www.linkedin.com/in/difasulthon/'
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center md:gap-2 gap-1 py-1 px-1 md:py-2 md:px-2 rounded-md md:bg-gray-300 bg-[#0e76a8] md:hover:bg-[#0e76a8]"
            >
              <ImLinkedin className="md:w-6 md:h-6 w-4 h-4" color="white" />
              <p className="font-medium md:text-sm text-xs text-white">connect</p>
            </Link>
            <Link
              to='https://github.com/difasulthon'
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center md:gap-2 gap-1 py-1 px-1 md:py-2 md:px-2 rounded-md md:bg-gray-300 bg-black md:dark:hover:bg-white md:hover:bg-black dark:text-white text-white dark:hover:text-black hover:text-white"
            >
              <FaGithub className="w-6 h-6"
              />
              <p className="font-medium md:text-sm text-xs">follow</p>
            </Link>
            <Link
              to='https://medium.com/@mdifasulthon'
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center md:gap-2 gap-1 py-1 px-1 md:py-2 md:px-2 rounded-md md:bg-gray-300 bg-black md:dark:hover:bg-white md:hover:bg-black dark:text-white text-white dark:hover:text-black hover:text-white"
            >
              <SiMedium className="w-6 h-6" />
              <p className="font-medium md:text-sm text-xs">follow</p>
            </Link>
            <Link
              to='/files/New_Resume_Muhammad Difa Sulthon Diani.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center md:gap-2 gap-1 py-1 px-1 md:py-2 md:px-2 rounded-md md:bg-gray-300 bg-[#0e76a8] md:hover:bg-[#0e76a8]"
            >
              <IoMdCloudDownload className="md:w-6 md:h-6 w-4 h-4" color="white" />
              <p className="font-medium md:text-sm text-xs text-white">CV</p>
            </Link>
          </section>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/images/hero-difa.png"
            alt="difasulthon-photo"
            className="rounded-md md:h-96 md:w-96 h-64 w-64 grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.section>

        {/* For mobile layout */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="font-semibold text-lg text-yellow-400 mt-4 dark:text-yellow-500 md:hidden">
              Hello, welcome <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </p>
          <section className="md:mt-10 mt-6 md:hidden">
            <p className={`${nameTextStyle}`}>I`m Muhammad Difa`</p>
            <p className={`${nameTextStyle}`}>Sulthon Diani</p>
            <p className={`${roleTextStyle}`}>(Front End Engineer)</p>
          </section>
          <p className={`${introductionTextStyle} md:hidden`}>
            Currently living and working as a Front-End Engineer with a strong focus on mobile application development. I`m also a lifelong learner, always exploring new tools, patterns, and best practices in frontend development.
          </p>
        </motion.section>
    </div>
  );
}
