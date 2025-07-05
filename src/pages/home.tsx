import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import {MailPlus} from 'lucide-react'

import { useTheme } from "../theme/provider";

import HeroConnectionButton from "../components/layout/home/hero-connection-button";
import HeroTextSection from "../components/layout/home/hero-text-section";
import TrackRecordItem from "../components/layout/home/track-record-item";
import TitleSection from "../components/shared/title-section";
import DocumentHead from "../components/shared/document-head";
import ExperienceItem from "../components/layout/home/experience-item";
import TechStackItem from "../components/layout/home/tech-stack-item";
import { Button } from "../components/ui/button";
import { EXPERIENCES, TRACK_RECORDS, TITLE_SECTION, TECH_STACK as LIST_TECH_STACK } from "../constants";
import { fadeUp, slideInRight, slideInLeft } from "../config/motion";

const {
  TRACK_RECORD,
  EXPERIENCE,
  TECH_STACK
} = TITLE_SECTION

export default function Index() { 
  const {theme} = useTheme()

  const introRef = useRef(null)
  const trackRecordsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null)
  const getInTouchRef = useRef(null)
  
  const isIntroInView = useInView(introRef, { once: false, amount: 0.4 });
  const isTrackRecordsInView = useInView(trackRecordsRef, { once: false, amount: 0.4 });
  const isExperienceInView = useInView(experienceRef, {once: false, amount: 0.4});
  const isSkillInView = useInView(skillRef, {once: false, amount: 0.4});
  const isGetInTouchView = useInView(getInTouchRef, {once: false, amount: 0.4});

  const email = 'mdifasulthon@gmail.com'
  const subject = 'Connected from Personal Website difasulthon.com'
  const body = "Hello Difa Sulthon, Let's collaborate!"

  return (
    <>
      <DocumentHead
        title="Difa Sulthon | Home" 
        description="Highlight of Difa Sulthon"
      />
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

      {theme === 'light' && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

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

      {theme === 'light' && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

      {/* My Experiences section  */}
      <section ref={experienceRef} className="pt-4 md:pt-20 md:px-56 px-8 md:pb-24 pb-8 dark:bg-backgroundDarkBlue bg-white">
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

      {theme === 'light' && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

      {/* Tech Stack Section */}
      <section ref={skillRef} className="flex flex-col md:px-56 px-8 md:pt-24 pt-4 pb-8 md:pb-24 dark:bg-backgroundDark bg-white">
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
          <TechStackItem key={i} color={item.color} name={item.name} index={i} />
         ))}
        </motion.div>
      </section>

      {theme === 'light' && <div className="border-b-2 border-b-gray-200 md:mr-56 md:ml-56 hidden md:block"></div>}

      {/* Get In Touch Section */}
      <section ref={getInTouchRef} className="pt-4 md:pt-20 md:px-56 px-8 md:pb-24 pb-8 dark:bg-backgroundDarkBlue bg-white">
        <div className="bg-gray-100 dark:bg-backgroundDark md:py-8 py-6 px-4 rounded-md">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isGetInTouchView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 + 0 * 0.2 }}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-row gap-3 font-lexendDeca font-semibold md:text-3xl text-2xl">
              <h3 className="dark:text-yellow-500 text-yellow-400">Get</h3>
              <h3 className="dark:text-white text-black">In Touch</h3>
            </div>
            <p className="font-lexendDeca text-center md:mt-5 mt-3 md:text-base text-xs">
              Open for discussions on front-end tech—mobile or web. <br /> 
              Available for collaboration and project opportunities.
            </p>
            <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="">
              <Button className="bg-yellow-500 md:mt-11 mt-8 dark:text-white text-white hover:dark:text-black hover:text-white md:text-base text-sm font-medium hover:dark:bg-white hover:bg-black">
                  <MailPlus /> Let's Collaborate
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
