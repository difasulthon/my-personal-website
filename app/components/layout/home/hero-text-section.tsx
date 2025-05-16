
interface Props {
  isMobile?: boolean
}

export default function HeroTextSection({isMobile = false}: Props) {
  const nameTextStyle = `font-bold md:text-4xl text-xl dark:text-gray-300 text-black`
  const roleTextStyle = 'font-medium md:text-lg text-sm text-black dark:text-gray-300'
  const introductionTextStyle = `font-normal md:text-sm text-xs dark:text-gray-300 text-gray-700 text-justify md:max-w-[32vw] max-w-[75vw] mt-3`

  if (isMobile) {
    return (
      <>
        <p className="font-semibold text-lg text-yellow-400 mt-4 dark:text-yellow-500 md:hidden">
          Hello, welcome <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </p>
        <section className="md:mt-10 mt-6 md:hidden">
          <p className={`${nameTextStyle}`}>I`m Muhammad Difa`</p>
          <p className={`${nameTextStyle}`}>Sulthon Diani</p>
          <p className={`${roleTextStyle}`}>(Front End Engineer)</p>
        </section>
        <p className={`${introductionTextStyle} md:hidden`}>
          Currently living and working as a Front-End Engineer with a strong focus on mobile application development. I`m also a lifelong learner, always exploring new tools, patterns, and best practices in frontend development.
        </p>
      </>
    )
  }

  return (
    <>
      <p className={`font-semibold text-xl text-yellow-400 dark:text-yellow-500 hidden md:block`}>
        Hello, welcome <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
      </p>
      <section className={`mt-10 hidden md:block`}>
        <p className={`${nameTextStyle}`}>I`m Muhammad Difa`</p>
        <p className={`${nameTextStyle}`}>Sulthon Diani</p>
        <p className={`${roleTextStyle}`}>(Front End Engineer)</p>
      </section>
      <p className={`${introductionTextStyle} hidden md:block`}>
        Currently living and working as a Front-End Engineer with a strong focus on mobile application development. I`m also a lifelong learner, always exploring new tools, patterns, and best practices in frontend development.
      </p>
    </>
  )
}