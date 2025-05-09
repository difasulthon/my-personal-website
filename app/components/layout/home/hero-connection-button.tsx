import { Link } from "@remix-run/react";
import { SiMedium } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

export default function HeroConnectionButton() {
  return (
    <section className="flex flex-row md:gap-3 gap-3 md:mt-10">
      <Link
        to='https://www.linkedin.com/in/difasulthon/'
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 py-2 px-2 rounded-md md:bg-gray-300 bg-[#0e76a8] md:hover:bg-[#0e76a8]"
      >
        <ImLinkedin className="md:w-6 md:h-6 w-4 h-4" color="white" />
        <p className="font-medium text-sm text-white">connect</p>
      </Link>
      <Link
        to='https://github.com/difasulthon'
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 py-2 px-2 rounded-md md:bg-gray-300 bg-black md:dark:hover:bg-white md:hover:bg-black dark:text-white text-white dark:hover:text-black hover:text-white"
      >
        <FaGithub className="md:w-6 md:h-6 w-4 h-4"/>
        <p className="font-medium text-sm">follow</p>
      </Link>
      <Link
        to='https://medium.com/@mdifasulthon'
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 py-2 px-2 rounded-md md:bg-gray-300 bg-black md:dark:hover:bg-white md:hover:bg-black dark:text-white text-white dark:hover:text-black hover:text-white"
      >
        <SiMedium className="md:w-6 md:h-6 w-4 h-4" />
        <p className="font-medium text-sm">follow</p>
      </Link>
      <Link
        to='/files/New_Resume_Muhammad Difa Sulthon Diani.pdf'
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 py-2 px-2 rounded-md md:bg-gray-300 bg-[#0e76a8] md:hover:bg-[#0e76a8]"
      >
        <IoMdCloudDownload className="md:w-6 md:h-6 w-4 h-4" color="white" />
        <p className="font-medium text-sm text-white">CV</p>
      </Link>
    </section>
  )
}