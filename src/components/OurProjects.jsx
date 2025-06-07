import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { OurProjectsGrid } from './OurProjectsGrid'
import { DefaultButton } from './DefaultButton'

export const OurProjects = () => {
    return (
        <SectionContainer className="flex flex-col">
            <DefaultTitle title="Nuestros Proyectos" />
            <OurProjectsGrid />
            <DefaultButton text="Todos los proyectos" className="mt-6 md:self-end" to="/projects" />
        </SectionContainer>
    )
}
