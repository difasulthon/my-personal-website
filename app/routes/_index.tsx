import type { MetaFunction } from "@remix-run/node";

import { motion } from "framer-motion";
import { Theme, useTheme } from "remix-themes";

import HeroConnectionButton from "~/components/layout/home/hero-connection-button";
import HeroTextSection from "~/components/layout/home/hero-text-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Home" },
    { name: "description", content: "Difa Sulthon's personal website" },
  ];
};

export default function Index() { 
  const [theme] = useTheme()

  return (
    <>
      <div className="flex md:flex-row flex-col justify-between md:px-56 px-8 md:pt-24 pt-4 md:pb-36 pb-8 dark:bg-backgroundDarkBlue bg-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-lexendDeca py-6"
        >
          <HeroTextSection />
          <HeroConnectionButton />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/images/hero-difa.png"
            alt="difasulthon-photo"
            className="rounded-md md:h-96 md:w-96 h-80 w-80 grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.section>

        {/* For mobile layout */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <HeroTextSection isMobile />
        </motion.section>
      </div>
      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}
      <section className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-36 dark:bg-backgroundDark bg-white">
        <section className="flex flex-row gap-2 font-lexendDeca font-semibold md:text-3xl text-2xl">
          <p className="text-yellow-400 dark:text-yellow-500">Track</p>
          <p className="">Records</p>
        </section>
        <p className="font-lexendDeca font-normal md:text-sm text-xs dark:text-gray-500 text-gray-400 md:max-w-[40vw] max-w-[75vw] mt-2 text-justify">
          I’ve been building and shipping mobile applications with a focus on intuitive design, performance, and reliability. Over the years, I’ve contributed to projects of varying scale — from lightweight apps to complex systems — and collaborated with teams of all sizes, including cross-squad coordination in larger environments. Along the way, I’ve also deepened my knowledge through hands-on learning and structured training programs.
        </p>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          <div className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-col md:w-72 md:h-72 w-[75vw] h-56 items-center py-5 px-4">
            <img
              src="/images/work-active.png"
              alt="worker-construction"
              className="w-10 h-10"
            />
            <p className="font-lexendDeca font-semibold md:text-xl text-lg mt-8">+4 years experience</p>
            <p className="font-lexendDeca font-normal md:text-sm text-xs text-center mt-6 dark:text-gray-500 text-gray-400">Four years of hands-on experience working as a front-end and mobile app developer.</p>
          </div>
          <div className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-col md:w-72 md:h-72 w-[75vw] h-56 items-center py-5 px-4">
            <img
              src="/images/project-active.png"
              alt="worker-construction"
              className="md:w-10 md:h-10 w-12 h-12"
            />
            <p className="font-lexendDeca font-semibold md:text-xl text-lg mt-8">+7 completed projects</p>
            <p className="font-lexendDeca font-normal md:text-sm text-xs text-center mt-6 dark:text-gray-500 text-gray-400">I’ve completed over seven mobile app projects using React Native, each addressing unique business needs.</p>
          </div>
          <div className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-col md:w-72 md:h-72 w-[75vw] h-56 items-center py-5 px-4">
            <img
              src="/images/course-active.png"
              alt="worker-construction"
              className="md:w-10 md:h-10 w-12 h-12"
            />
            <p className="font-lexendDeca font-semibold md:text-xl text-lg mt-8">+3 completed courses</p>
            <p className="font-lexendDeca font-normal md:text-sm text-xs text-center mt-6 dark:text-gray-500 text-gray-400">I’ve completed several structured programming courses to strengthen my foundation in software engineering.</p>
          </div>
        </section>
      </section>
    </>
  );
}
