import { Experience } from "~/types/experience";

const experiences: Experience[] = [
    {
      id: 1,
      title: "Front End Developer",
      employeeType: 'Full Time',
      company: "PT Bank SMBC Indonesia Tbk",
      date: {
        start: 'Jan 2022',
        end: 'Present'
      },
      information: [
        "Developed and maintained features for Jenius Mobile App, Jenius Daya Mobile App, and Jenius Admin Web App.",
        "Ensured alignment with UI/UX design, business requirements, and technical discussions in every development cycle.",
        "Implemented unit testing with a minimum 95% code coverage, along with lint checks, flow type validations, and JSDoc documentation before each pull request.",
        "Contributed to major modules such as: Credit Card (onboarding, card management, installment plans, reward points), QRIS Payment, Bank Transfers, Foreign Currency Transfers, and data injection workflows via the internal admin web application.",
        "Acted as a buddy for new front-end developers, providing onboarding support and technical guidance.",
        "Assisted tech lead in conducting interviews for front-end candidates, including technical evaluations and cultural fit assessments."
      ],
      tech: [
        "Javascript", "Typescript", "Git", "React Native", "Redux", "React Apollo", "GraphQL", "Modular (micro front end)", "Jest", "NodeJS", "MongoDB", "Objective C"
      ], 
      tools: [
        "VS Code", "Postman", "Reactotron", "Jenkins", "Bitbucket", "Jira", "Figma", "Android Studio", "Xcode", "Swagger", "Sonarqube"
      ],
      location: "Jakarta, Indonesia (Hybrid)",
      url: 'https://www.smbci.com/'
    },
    {
      id: 2,
      title: "Software Engineer (Mobile)",
      employeeType: 'Contract - Outsource',
      company: "PT Xsis Mitra Utama",
      date: {
        start: 'Dec 2019',
        end: 'Dec 2021'
      },
      information: [
        "Assigned to a client-side placement at Kalbe Farma to develop and maintain several mobile applications, including OneKalbe Mobile and H2Active.",
        "Delivered features based on mockups, business requirements, and initial technical discussions, following a waterfall development methodology.",
        "Contributed to multiple sub-applications within OneKalbe Mobile, such as: GA Online (General Affairs services), Asset Monitoring, Training Attendance Management"
      ],
      tech: [
        "Javascript", "Git", "React Native", "Redux", "Axios", "SQL"
      ], 
      tools: [
        "VS Code", "Postman", "Swagger", "Sonarqube", "Microsoft SQL Server", "Android Studia", "Xcode", "Gitlab", "PMO Sheet"
      ],
      location: "Jakarta, Indonesia (Hybrid)",
      url: 'https://www.xsis.co.id/'
    },
  ];

export {
  experiences
}