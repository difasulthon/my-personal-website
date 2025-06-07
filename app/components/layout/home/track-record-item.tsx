import React from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from '~/config/motion';

type Props = {
  icon: string,
  title: string,
  desc: string,
  index: number,
  trackRecordsRef: React.MutableRefObject<null>
}

export default function TrackRecordItem(props: Props) {
   const {icon, title, desc, index, trackRecordsRef} = props

   const isTrackRecordsInView = useInView(trackRecordsRef, { once: false, amount: 0.4 });

  return (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate={isTrackRecordsInView ? "visible" : "hidden"}
    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
    className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-col md:w-72 md:h-72 w-[75vw] h-56 items-center py-5 px-4"
  >
    <img
      src={icon}
      alt="icon"
      className="md:w-10 md:h-10 w-12 h-12"
    />
    <p className="font-lexendDeca font-semibold md:text-xl text-lg mt-8">
      {title}
    </p>
    <p className="font-lexendDeca font-normal md:text-sm text-xs text-center mt-6 dark:text-gray-500 text-gray-400">
      {desc}
    </p>
  </motion.div>
  )
}