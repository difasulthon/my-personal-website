import type { MetaFunction } from "@remix-run/node";

import { motion } from "framer-motion";

import HeroConnectionButton from "~/components/layout/home/hero-connection-button";
import HeroTextSection from "~/components/layout/home/hero-text-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Home" },
    { name: "description", content: "Difa Sulthon's personal website" },
  ];
};

export default function Index() { 

  return (
    <div className="flex md:flex-row flex-col justify-between min-h-screen md:px-56 px-8 md:pt-24 pt-4 pb-36 dark:bg-backgroundDarkBlue bg-white">
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
  );
}
