import { Experience } from '~/types/experience'

type Props = {
  experience: Experience
}

export default function DateLocation({experience}: Props) {
  return (
    <div className="flex flex-row justify-center gap-9 px-4 py-2 rounded-md dark:bg-backgroundDark bg-gray-200 dark:text-white text-black">
      <div className="flex flex-col items-center text-center">
        <p className="md:text-xs text-[10px] dark:text-gray-400 text-gray-500">Start</p>
        <p className="md:text-sm text-xs font-semibold">{experience.date.start}</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="md:text-xs text-[10px] dark:text-gray-400 text-gray-500">End</p>
        <p className="md:text-sm text-xs font-semibold">{experience.date.end}</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="md:text-xs text-[10px] dark:text-gray-400 text-gray-500">Location</p>
        <p className="md:text-sm text-xs font-semibold">{experience.location}</p>
      </div>
    </div>
  )
}