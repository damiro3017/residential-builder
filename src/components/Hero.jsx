import React from 'react'
import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { DefaultButton } from './DefaultButton'
import HeroBanner from "../assets/images/banner_hero.png"

export const Hero = () => {
    return (
        <>
            {/* Realizar un carrusel de imágenes presentando cada proyecto */}
            <SectionContainer className="flex items-center pt-0 gap-32">
                <div className='flex-1'>
                    <h1 className='text-7xl text-gray-400 font-light uppercase'>Project</h1>
                    <DefaultTitle subtitle="Lorem" />
                    <p></p>
                </div>
                <div className='relative'>
                    <img
                        className='xl:max-w-3xl'
                        src={HeroBanner}
                        alt=""
                    />
                    <DefaultButton className="absolute left-0 bottom-0" text="View Project" to="/projects/1" />
                </div>
            </SectionContainer>
        </>
    )
}
