import { useRef } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "remix-themes";

import { motion, useInView } from "framer-motion";

import HeroConnectionButton from "~/components/layout/home/hero-connection-button";
import HeroTextSection from "~/components/layout/home/hero-text-section";
import { TRACK_RECORDS } from "~/constants";

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
  
  const isIntroInView = useInView(introRef, { once: false, amount: 0.4 });
  const isTrackRecordsInView = useInView(trackRecordsRef, { once: false, amount: 0.4 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div ref={introRef} className="flex md:flex-row flex-col justify-between md:px-56 px-8 md:pt-24 pt-4 md:pb-36 pb-8 dark:bg-backgroundDarkBlue bg-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroInView ? 1 : 0 }}
          transition={{ duration: 3 }}
          className="font-lexendDeca py-6"
        >
          <HeroTextSection />
          <HeroConnectionButton />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroInView ? 1 : 0 }}
          transition={{ duration: 3 }}
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
          transition={{ duration: 3 }}
        >
          <HeroTextSection isMobile />
        </motion.section>
      </div>
      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}
      <section ref={trackRecordsRef} className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-36 dark:bg-backgroundDark bg-white">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate={isTrackRecordsInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-2 font-lexendDeca font-semibold md:text-3xl text-2xl"
        >
          <p className="text-yellow-400 dark:text-yellow-500">Track</p>
          <p className="">Records</p>
        </motion.section>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isTrackRecordsInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-lexendDeca font-normal md:text-sm text-xs dark:text-gray-500 text-gray-400 md:max-w-[40vw] max-w-[75vw] mt-2 text-justify"
        >
          I’ve been building and shipping mobile applications with a focus on intuitive design, performance, and reliability. Over the years, I’ve contributed to projects of varying scale — from lightweight apps to complex systems — and collaborated with teams of all sizes, including cross-squad coordination in larger environments. Along the way, I’ve also deepened my knowledge through hands-on learning and structured training programs.
        </motion.p>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          {TRACK_RECORDS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={isTrackRecordsInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
              className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-col md:w-72 md:h-72 w-[75vw] h-56 items-center py-5 px-4"
            >
              <img
              src={item.icon}
              alt="icon"
              className="md:w-10 md:h-10 w-12 h-12"
              />
              <p className="font-lexendDeca font-semibold md:text-xl text-lg mt-8">
                {item.title}
              </p>
              <p className="font-lexendDeca font-normal md:text-sm text-xs text-center mt-6 dark:text-gray-500 text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
}
