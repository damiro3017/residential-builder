import { DefaultTitle } from "../components/DefaultTitle"
import { ProjectsCard } from "../components/ProjectsCard"
import { SectionContainer } from "../components/SectionContainer"
import { ProjectsData } from "../data/ProjectsData"

export const Projects = () => {
  return (
    <SectionContainer>
      <DefaultTitle title="Our" subtitle="Projects" />
      <div className="flex flex-col gap-8 mt-16">
        {ProjectsData.map((e) => (
          <ProjectsCard
            key={e.id}
            image={e.image}
            title={e.title}
            description={e.description}
            path={`/projects/${e.id}`} />
        ))}
      </div>
    </SectionContainer>
  )
}