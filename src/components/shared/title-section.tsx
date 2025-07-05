export type Props = {
  title: {
    firstLine: string,
    secondLine: string
  },
  subtitle?: string
}

export default function TitleSection(props: Props) {
  return (
    <>
      <div
        className="flex flex-row gap-2 font-lexendDeca font-semibold md:text-3xl text-2xl"
      >
        <p className="text-yellow-400 dark:text-yellow-500">{props.title.firstLine}</p>
        <p className="">{props.title.secondLine}</p>
      </div>
      <p
        className="font-lexendDeca font-normal md:text-sm text-xs dark:text-gray-400 text-gray-600 md:max-w-[40vw] max-w-[75vw] mt-2 text-justify"
      >
        {props.subtitle && props.subtitle}
      </p>
    </>
  )
}