const MENU = [
  {
    id: 1,
    title: 'Home',
    href: '/'
  },
  {
    id: 2,
    title: 'Experiences',
    href: '/experiences'
  },
  {
    id: 3,
    title: 'Projects',
    href: '/projects'
  },
  {
    id: 4,
    title: 'About',
    href: '/about'
  },
]

const TRACK_RECORDS = [
  {
    icon: "/images/work-active.png",
    title: "+4 years experience",
    desc: "Four years of hands-on experience working as a front-end and mobile app developer.",
  },
  {
    icon: "/images/project-active.png",
    title: "+7 completed projects",
    desc: "I’ve completed over seven mobile app projects using React Native, each addressing unique business needs.",
  },
  {
    icon: "/images/course-active.png",
    title: "+3 completed courses",
    desc: "I’ve completed several structured programming courses to strengthen my foundation in software engineering.",
  },
]

const EXPERIENCES = [
  {
    time: "Jan 2022 - now",
    title: "Front End Developer",
    company: "Jenius - PT SMBC Indonesia",
    desc: "Jenius is a digital banking platform by Bank SMBC Indonesia, designed to simplify financial management through smart and user-friendly features.",
    icon: "/images/jenius-logo.png",
    detail: "Involve in Jenius App (Credit Card and Transaction), Jenius Admin Dashboard, and Jenius Daya App (Transaction) using Javascript, Typescript and React Native"
  },
  {
    time: "Dec 2019 - Dec 2021",
    title: "Software Engineer - Mobile",
    company: "PT Xsis Mitra Utama",
    desc: "Xsis is an IT consulting firm specializing in software development and talent outsourcing for enterprise clients.",
    icon: "/images/xsis-logo.jpeg",
    detail: "Placement on PT Kalbe Farma and involve in Onekalbe Mobile Development, specifically on GA Online, Event Attendence, and Asset Monitoring using Javascript and React Native"
  },
  {
    time: "Jan 2019 - Apr 2019",
    title: "Internship (Network Field Engineer)",
    company: "PT Datacomm Diangraha",
    desc: "Datacom is an IT solutions company providing system integration and infrastructure services for various industries.",
    icon: "/images/datacomm-logo.png",
    detail: "Contribute to enhance bandwidth project in several cities in Java"
  },
]

const TITLE_SECTION = {
  TRACK_RECORD: {
    title: {
      firstLine: 'Track',
      secondLine: 'Records'
    },
    subtitle: 'I’ve been building and shipping mobile applications with a focus on intuitive design, performance, and reliability. Over the years, I’ve contributed to projects of varying scale — from lightweight apps to complex systems — and collaborated with teams of all sizes, including cross-squad coordination in larger environments. Along the way, I’ve also deepened my knowledge through hands-on learning and structured training programs.'
  },
  EXPERIENCE: {
    title: {
      firstLine: 'My',
      secondLine: 'Experiences'
    },
    subtitle: 'I have gained hands-on experience through roles ranging from internship and contract work to full-time employment, contributing front-end solutions across diverse projects and industries.'
  },
  TECH_STACK: {
    title: {
      firstLine: 'Tech',
      secondLine: 'Stack'
    },
    subtitle: 'Tools and technologies I’ve used and learned throughout my development journey.'
  }
}

const TECH_STACK = [
  {
    color: 'bg-yellow-500',
    name: 'Javascript'
  },
  {
    color: 'bg-blue-700',
    name: 'Typescript'
  },
  {
    color: 'bg-blue-400',
    name: 'React'
  },
  {
    color: 'bg-blue-800',
    name: 'React Native'
  },
  {
    color: 'bg-black',
    name: 'NextJS'
  },
  {
    color: 'bg-blue-500',
    name: 'Tailwind CSS'
  },
  {
    color: 'bg-green-700',
    name: 'NodeJS'
  },
  {
    color: 'bg-blue-600',
    name: 'SQL'
  },
  {
    color: 'bg-pink-500',
    name: 'GraphQL'
  },
  {
    color: 'bg-orange-500',
    name: 'Git'
  },
  {
    color: 'bg-orange-600',
    name: 'HonoJS'
  },
  {
    color: 'bg-black',
    name: 'Prisma'
  }
]

export {
  MENU, TRACK_RECORDS, EXPERIENCES, TITLE_SECTION, TECH_STACK
}