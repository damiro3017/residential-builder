import React from 'react'
import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { OurProjectsGrid } from './OurProjectsGrid'
import { DefaultButton } from './DefaultButton'

export const OurProjects = () => {
    return (
        <SectionContainer className="flex flex-col">
            <DefaultTitle title="Our Projects" />
            <OurProjectsGrid />
            <DefaultButton text="All projects" className="mt-6 self-end" to="/projects" />
        </SectionContainer>
    )
}
