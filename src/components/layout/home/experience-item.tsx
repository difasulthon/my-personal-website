import React from 'react'
import { motion, useInView } from "framer-motion";

import { slideInRight } from '../../../config/motion';

type Props = {
  index: number,
  experienceRef: React.MutableRefObject<null>,
  time: string,
  title: string,
  company: string,
  desc: string,
  icon: string,
  detail: string
}

export default function ExperienceItem(props: Props) {
  const {index, experienceRef, time, title, company, desc, icon, detail} = props

  const isExperienceInView = useInView(experienceRef, {once: false, amount: 0.4})

  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      animate={isExperienceInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
      className="group relative dark:bg-backgroundDark bg-gray-100 rounded-md flex flex-col md:w-72 md:h-64 w-[75vw] h-56 py-5 px-4 font-lexendDeca"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0 group-hover:cursor-pointer">
        <p className="font-normal md:text-base text-sm dark:text-gray-400 text-gray-500">
          {time}
        </p>
        <p className="font-semibold md:text-lg text-base mt-1 dark:text-yellow-400 text-yellow-400">
          {title}
        </p>
        <p className="font-medium md:text-sm text-sm">{company}</p>
        <p className="font-medium md:text-sm text-sm mt-4 dark:text-gray-400 text-gray-500">{desc}</p>
      </div>

      <div className="absolute items-center flex flex-col top-0 left-0 w-full h-full px-4 py-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer overflow-y-auto">
        <img
          src={icon}
          alt="icon"
          className="md:w-48 md:h-24 w-12 h-12 dark:bg-gray-200 bg-white rounded-md"
        />
        <p className="font-medium text-center md:text-sm text-sm mt-4 dark:text-gray-400 text-gray-500">{detail}</p>
      </div>
    </motion.div>
  )
}