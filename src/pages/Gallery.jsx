import { DefaultTitle } from "../components/DefaultTitle"
import { SectionContainer } from "../components/SectionContainer"
import ProjectsData from "../data/ProjectsData"

export const Gallery = () => {
  return (
    <>
      <SectionContainer>
        <DefaultTitle title="Galería" subtitle="Hogares" />
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 mt-8'>
          {ProjectsData.map((e) => (
            <img
              key={e.id}
              src={e.banner}
              className="h-64 object-cover"
              alt=""
            />
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
