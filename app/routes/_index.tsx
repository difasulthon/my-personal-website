import { useRef } from "react";

import type { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "remix-themes";

import { motion, useInView } from "framer-motion";

import HeroConnectionButton from "~/components/layout/home/hero-connection-button";
import HeroTextSection from "~/components/layout/home/hero-text-section";
import TrackRecordItem from "~/components/layout/home/track-record-item";
import TitleSection from "~/components/layout/home/title-section";
import { EXPERIENCES, TRACK_RECORDS, TITLE_SECTION, TECH_STACK as LIST_TECH_STACK } from "~/constants";
import { fadeUp, slideInRight, slideInLeft } from "~/config/motion";
import ExperienceItem from "~/components/layout/home/experience-item";
import TechStackItem from "~/components/layout/home/tech-stack-item";

const {
  TRACK_RECORD,
  EXPERIENCE,
  TECH_STACK
} = TITLE_SECTION

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
  const experienceRef = useRef(null);
  const skillRef = useRef(null)
  
  const isIntroInView = useInView(introRef, { once: false, amount: 0.4 });
  const isTrackRecordsInView = useInView(trackRecordsRef, { once: false, amount: 0.4 });
  const isExperienceInView = useInView(experienceRef, {once: false, amount: 0.4});
  const isSkillInView = useInView(skillRef, {once: false, amount: 0.4});

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

      {/* Track Records Section */}
      <section ref={trackRecordsRef} className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-8 md:pb-24 dark:bg-backgroundDark bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isTrackRecordsInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 1 * 0.2 }}
        >
          <TitleSection title={TRACK_RECORD.title} subtitle={TRACK_RECORD.subtitle} />
        </motion.div>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          {TRACK_RECORDS.map((item, i) => (
            <TrackRecordItem key={i} index={i} icon={item.icon} desc={item.desc} title={item.title} trackRecordsRef={trackRecordsRef} />
          ))}
        </section>
      </section>

      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

      {/* My Experiences section  */}
      <section ref={experienceRef} className="pt-4 md:pt-20 md:px-56 px-8 md:pb-24 dark:bg-backgroundDarkBlue bg-white">
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 0 * 0.2 }}
        >
          <TitleSection title={EXPERIENCE.title} subtitle={EXPERIENCE.subtitle} />
        </motion.div>
        <section className="flex md:flex-row flex-col md:gap-12 gap-8 md:mt-12 mt-8">
          {EXPERIENCES.map((experience, i) => (
            <ExperienceItem 
              key={i} 
              index={i} 
              time={experience.time} 
              title={experience.title} 
              company={experience.company} 
              icon={experience.icon}
              desc={experience.desc}
              detail={experience.detail}
              experienceRef={experienceRef}
            />
          ))}
        </section>
      </section>

      {theme === Theme.LIGHT && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

      {/* Tech Stack Section */}
      <section ref={skillRef} className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-36 dark:bg-backgroundDark bg-white">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={isSkillInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 0 * 0.2 }}
        >
          <TitleSection title={TECH_STACK.title} subtitle={TECH_STACK.subtitle} />
        </motion.div>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={isSkillInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 + 0 * 0.2 }}
          className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 md:mt-8 mt-4"
        >
         {LIST_TECH_STACK.map((item, i) => (
          <TechStackItem key={i} color={item.color} name={item.name} />
         ))}
        </motion.div>
      </section>
    </>
  );
}
