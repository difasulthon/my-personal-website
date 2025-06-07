import { Code2 } from 'lucide-react'
import { motion } from "framer-motion";

type Props = {
  color: string,
  name: string
}

export default function TechStackItem(props: Props) {
  const {color, name} = props

  return (
    <motion.div
      className="dark:bg-backgroundDarkBlue bg-gray-100 rounded-md flex flex-row md:w-60 md:h-14 w-44 h-9 items-center px-4 py-1 gap-4"
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className={`${color} rounded-sm p-1`}>
        <Code2 className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
      <p className="font-lexendDeca font-medium md:text-base text-sm dark:text-gray-300 text-gray-500">{name}</p>
    </motion.div>
  )
}