import DocumentHead from "src/components/shared/document-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs"
import ProjectItem from "~/components/layout/projects/project-item";
import { apiProjects, mobileProjects, webProjects } from "~/constants/projects";

export default function Projects() {
  return (
    <>
      <DocumentHead
        title="Difa Sulthon | Home" 
        description="Projects Difa Sulthon"
      />
      <div className="flex md:flex-row flex-col justify-between md:px-56 px-8 md:pt-16 pt-4 md:pb-36 pb-8 dark:bg-backgroundDarkBlue bg-white">
        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="w-full justify-between dark:bg-backgroundDark">
            <TabsTrigger className="
              w-full 
              dark:data-[state=active]:bg-white 
              dark:data-[state=active]:text-black
              " 
              value="mobile">Mobile</TabsTrigger>
            <TabsTrigger className="
              w-full 
              dark:data-[state=active]:bg-white 
              dark:data-[state=active]:text-black
              " 
              value="web">Web</TabsTrigger>
            <TabsTrigger className="
              w-full 
              dark:data-[state=active]:bg-white 
              dark:data-[state=active]:text-black
              " 
              value="api">API Service</TabsTrigger>
          </TabsList>
          <TabsContent className="h-full pb-10" value="mobile">
            <div className="pt-5">
              <section className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
                {mobileProjects.map(item => {
                  return (
                    <ProjectItem 
                      title={item.title}
                      desc={item.desc}
                      image={item.image}
                      id={item.id}
                    />
                  )
                })}
              </section>
            </div>
          </TabsContent>
          <TabsContent value="web">
            <div className="pt-5">
              <section className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
                {webProjects.map(item => {
                  return (
                    <ProjectItem 
                      title={item.title}
                      desc={item.desc}
                      image={item.image}
                      id={item.id}
                    />
                  )
                })}
              </section>
            </div>
          </TabsContent>
          <TabsContent value="api">
            <div className="pt-5">
              <section className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5">
                {apiProjects.map(item => {
                  return (
                    <ProjectItem 
                      title={item.title}
                      desc={item.desc}
                      image={item.image}
                      id={item.id}
                    />
                  )
                })}
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}