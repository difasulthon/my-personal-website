import { useRef } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "remix-themes";

import { motion, useInView } from "framer-motion";

import HeroConnectionButton from "~/components/layout/home/hero-connection-button";
import HeroTextSection from "~/components/layout/home/hero-text-section";
import TrackRecordItem from "~/components/layout/home/track-record-item";
import { EXPERIENCES, TRACK_RECORDS } from "~/constants";
import TrackRecordText from "~/components/layout/home/track-record-text";
import { fadeUp, slideInRight } from "~/config/motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Home" },
    { name: "description", content: "Difa Sulthon's personal website" },
  ];
};

export default function Index() { 
  const [theme] = useTheme()

  const introRef = useRef(null)
  const trackRecordsRef = useRef(null);
  const experienceRef = useRef(null)
  
  const isIntroInView = useInView(introRef, { once: false, amount: 0.4 });
  const isTrackRecordsInView = useInView(trackRecordsRef, { once: false, amount: 0.4 });
  const isExperienceInView = useInView(experienceRef, {once: false, amount: 0.4})

  return (
    <>
      <div ref={introRef} className="flex md:flex-row flex-col justify-between md:px-56 px-8 md:pt-24 pt-4 md:pb-36 pb-8 dark:bg-backgroundDarkBlue bg-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="font-lexendDeca py-6"
        >
          <HeroTextSection />
          <HeroConnectionButton />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroInView ? 1 : 0 }}
          transition={{ duration: 1 }}
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
          animate={{ opacity: isIntroInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTextSection isMobile />
        </motion.section>
      </div>
      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}
      <section ref={trackRecordsRef} className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-8 md:pb-24 dark:bg-backgroundDark bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isTrackRecordsInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 1 * 0.2 }}
        >
          <TrackRecordText />
        </motion.div>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          {TRACK_RECORDS.map((item, i) => (
            <TrackRecordItem key={i} index={i} icon={item.icon} desc={item.desc} title={item.title} trackRecordsRef={trackRecordsRef} />
          ))}
        </section>
      </section>
      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}
      <section ref={experienceRef} className="pt-4 md:pt-20 md:px-56 px-8 pb-36 dark:bg-backgroundDarkBlue bg-white">
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 0 * 0.2 }}
        >
          <div
            className="flex flex-row gap-2 font-lexendDeca font-semibold md:text-3xl text-2xl"
          >
            <p className="text-yellow-400 dark:text-yellow-500">My</p>
            <p className="">Experiences</p>
          </div>
            <p
              className="font-lexendDeca font-normal md:text-sm text-xs dark:text-gray-400 text-gray-600 md:max-w-[40vw] max-w-[75vw] mt-2 text-justify"
            >
              I bring hands-on experience from both full-time roles and freelance, delivering front end solutions across different projects and industries.
          </p>
        </motion.div>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          {EXPERIENCES.map((experience, i) => (
            <motion.div
              key={i}
              variants={slideInRight}
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className="group relative dark:bg-backgroundDark bg-gray-100 rounded-md flex flex-col md:w-72 md:h-64 w-[75vw] h-56 py-5 px-4 font-lexendDeca"
            >
              <div className="transition-opacity duration-300 group-hover:opacity-0 group-hover:cursor-pointer">
                <p className="font-normal md:text-base text-sm dark:text-gray-400 text-gray-500">
                  {experience.time}
                </p>
                <p className="font-semibold md:text-lg text-base mt-1 dark:text-yellow-400 text-yellow-400">
                  {experience.title}
                </p>
                <p className="font-medium md:text-sm text-sm">{experience.company}</p>
                <p className="font-medium md:text-sm text-sm mt-4 dark:text-gray-400 text-gray-500">{experience.desc}</p>
              </div>

              <div className="absolute items-center flex flex-col top-0 left-0 w-full h-full px-4 py-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer overflow-y-auto">
                <img
                  src={experience.icon}
                  alt="icon"
                  className="md:w-48 md:h-24 w-12 h-12 dark:bg-gray-200 bg-white rounded-md"
                />
                <p className="font-medium text-center md:text-sm text-sm mt-4 dark:text-gray-400 text-gray-500">{experience.detail}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
}
