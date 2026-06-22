import { Project } from "~/types/projects";

export default function ProjectItem(props: Project)  {
  return (
    <div
      className="md:w-80 w-[75vw] p-3 flex flex-col items-center dark:bg-backgroundDark bg-gray-100 rounded-md"
    >
      <img
        src={props.image}
        alt="bintang-app"
        className="md:h-56 md:w-72 h-80 w-80 mx-auto rounded-sm"
      />
      <p className="font-semibold md:text-base text-sm dark:text-gray-300 text-gray-700 text-justify md:max-w-[32vw] max-w-[75vw] mt-3">{props.title}</p>
      <p className="font-medium text-justify md:text-sm text-sm mt-2 dark:text-gray-400 text-gray-500">{props.desc}</p>
    </div>
  )
}