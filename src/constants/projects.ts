import { Project } from "~/types/projects"


const mobileProjects: Project[] = [
  {
    id: 1,
    title: "Jenius",
    desc: "Jenius is a digital banking application that allows users to manage their finances, perform transfers, and access debit and credit card services through a secure and intuitive mobile experience.",
    image: "/images/porto_jenius.png"
  },
  {
    id: 2,
    title: "Jenius Daya",
    desc: "Jenius Daya is a digital banking application designed for retirees, providing everyday banking services through a simplified and accessible user experience tailored to senior users.",
    image: "/images/porto_jeniusdaya.png"
  },
  {
    id: 3,
    title: "MyOto",
    desc: "MyOTO is an employee shuttle management application that facilitates transportation between company offices and work sites. The platform supports both passengers and drivers, route tracking, and transportation management features.",
    image: "/images/porto_myoto.png"
  },
  {
    id: 4,
    title: "Buddyballs",
    desc: "BuddyBalls is a mobile application that connects football enthusiasts with nearby matches. Users can search games by date and location, book available slots, choose their playing position, and complete payments seamlessly within the app.",
    image: "/images/porto_buddyballs.png"
  },
  {
    id: 5,
    title: "Smartstays",
    desc: "A custom Android TV platform for hotels that combines entertainment services, hotel information, and facility booking features into a single in-room guest experience.",
    image: "/images/porto_smartstays.png"
  },
  {
    id: 6,
    title: "Bintang App",
    desc: "A digital asset management platform that centralizes magazine archives into a searchable mobile experience. The application enables users to discover, filter, and manage photos and media assets efficiently while maintaining structured content storage and metadata management.",
    image: "/images/porto_bintang.png"
  }
]

const webProjects: Project[] = [
  {
    id: 1,
    title: "CheckCafe",
    desc: "CheckCafe helps users discover work-friendly cafes through location-based search and filtering. The platform provides detailed information about each cafe, making it easier to find comfortable places for work, study, or meetings.",
    image: "/images/porto_checkcafe.png"
  },
  {
    id: 2,
    title: "CounterPress Store",
    desc: "Counter Press is an online football boot store that allows customers to discover, compare, and purchase products from various brands through an intuitive shopping experience.",
    image: "/images/porto_counterpress.png"
  },
]

const apiProjects: Project[] = [
  {
    id: 1,
    title: "CounterPress API",
    desc: "Counter Press is an online football boot store that allows customers to discover, compare, and purchase products from various brands through an intuitive shopping experience.",
    image: "/images/porto_counterpress.png"
  },
]

export {
  mobileProjects,
  webProjects,
  apiProjects
}