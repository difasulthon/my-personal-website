import { motion } from "framer-motion";

import DateLocation from "../components/layout/experience/date-location";
import TitleSection from "../components/shared/title-section";
import type {Props as TitleSectionProps} from "../components/shared/title-section"
import { experiences } from "../constants/experience";
import DocumentHead from "src/components/shared/document-head";

export default function Experiences() {
  const experiencesTitle: TitleSectionProps['title'] = {
    firstLine: 'Professional',
    secondLine: 'Experiences'
  }

  return (
    <>
      <DocumentHead
        title="Difa Sulthon | Experiences" 
        description="Professional experiences of Difa Sulthon"
      />
      <div className="relative flex flex-col justify-between md:px-56 px-8 md:pt-12 pt-4 md:pb-36 pb-8 dark:bg-backgroundDarkBlue bg-white font-lexendDeca">
        <TitleSection title={experiencesTitle} />
        <div className="mt-10">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:top-24 top-16 bottom-2 w-0.5 bg-gray-300 z-0 mt-11" />
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`w-full flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'} ${
                  index > 0 ? 'md:mt-20 mt-10' : 'mt-0'
                } relative`}
              >
                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-10 md:pl-0 pl-6' : 'md:pl-10 pl-6'}`}>
                  {/* Dot */}
                  <div className="absolute -left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full z-20" />
                  <DateLocation experience={item} />
                  <div className="rounded-md px-4 py-1 mt-5 dark:bg-backgroundDark bg-gray-200 dark:text-white text-black shadow-md">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:cursor-pointer"
                      >
                        <h3 className="font-semibold mt-6 md:text-xl text-lg">{item.company}</h3>
                        <div className="flex flex-row items-center gap-2 mb-3">
                          <h4 className="dark:font-medium md:text-lg text-base font-semibold dark:text-yellow-400 text-yellow-500">{item.title}</h4>
                          <p className="md:text-sm text-xs text-gray-500">({item.employeeType})</p>
                        </div>
                    </a>
                    <ul className="list-disc ml-5 md:text-sm text-xs">
                      {item.information.map((info, idx: number) => (
                        <li key={idx} className="mb-2">{info}</li>
                      ))}
                    </ul>
                    {/* Tech Section */}
                    <h6 className="font-semibold dark:text-white text-black md:text-lg text-base">Tech</h6>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {item.tech.map((item, index: number) => (
                        <li key={index} className="dark:bg-backgroundDarkBlue bg-white rounded-sm md:p-2 p-1">
                          <p className="md:text-sm text-xs font-semibold">{item}</p>
                        </li>
                      ))}
                    </ul>
                    {/* Tools Section */}
                    <h6 className="font-semibold dark:text-white text-black mt-3 md:text-lg text-base">Tools</h6>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {item.tools.map((item, index: number) => (
                        <li key={index} className="dark:bg-backgroundDarkBlue bg-white rounded-sm md:p-2 p-1">
                          <p className="md:text-sm text-xs font-semibold">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
          )})}
        </div>
      </div>
    </>
  )
}