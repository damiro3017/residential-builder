import { SectionContainer } from "../components/SectionContainer"
import { ProjectsData } from "../data/ProjectsData"

export const Gallery = () => {
  return (
    <>
      <SectionContainer>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8'>
          {ProjectsData.map((e) => {
            return <img
              key={e.id}
              src={e.image}
              className="h-64 object-cover"
              alt=""
            />
          })}
        </div>
      </SectionContainer>
    </>
  )
}
