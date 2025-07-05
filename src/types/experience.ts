export type Experience = {
  id: number,
  title: string,
  employeeType: string,
  company: string,
  date: {
    start: string,
    end: string
  },
  information: Array<string>,
  tech: Array<string>, 
  tools: Array<string>,
  location: string,
  url: string
}