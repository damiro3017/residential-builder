import { SectionContainer } from './SectionContainer'
import { DefaultButton } from './DefaultButton'
import ProjectsData from '../data/ProjectsData'
import { DefaultText } from './DefaultText'

export const Hero = () => {
    const latestProject = ProjectsData[ProjectsData.length - 1]

    if (!latestProject) return null

    return (
        <SectionContainer className="grid grid-cols-1 text-center md:text-left md:grid-cols-7 
         pt-0 gap-8 mt-8 md:mt-0">
            <div className="md:col-span-3">
                <h1 className="text-7xl text-gray-400 font-light uppercase">
                    {latestProject.title}
                </h1>
                <DefaultText>
                    {latestProject.description}
                </DefaultText>
            </div>
            <div className="relative md:col-span-4">
                <img
                    className="w-full h-full object-cover"
                    src={latestProject.banner}
                    alt={`Banner de ${latestProject.title}`}
                />
                <DefaultButton
                    className="absolute left-0 bottom-0"
                    text="Ver Proyecto"
                    to={`/projects/${latestProject.id ?? 1}`}
                />
            </div>
        </SectionContainer>
    )
}