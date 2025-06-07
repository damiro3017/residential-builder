import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { DefaultButton } from './DefaultButton'
import Project01 from "../assets/images/projects_01a.webp"
import ProjectsData from '../data/ProjectsData'
import { DefaultText } from './DefaultText'

export const Hero = () => {
    return (
        <>
            <SectionContainer className="grid grid-cols-7 pt-0 gap-8">
                <div className='col-span-3'>
                    <h1 className='text-7xl text-gray-400 font-light uppercase'>{ProjectsData[0].title}</h1>
                    <DefaultText>
                        {ProjectsData[0].description}
                    </DefaultText>
                </div>
                <div className='relative col-span-4'>
                    <img
                        className='w-full object-cover'
                        src={Project01}
                        alt=""
                    />
                    <DefaultButton className="absolute left-0 bottom-0" text="Ver Proyecto" to="/projects/1" />
                </div>
            </SectionContainer>
        </>
    )
}
