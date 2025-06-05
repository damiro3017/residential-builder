import React from 'react'
import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import About01 from "../assets/images/about_01.png"
import About02 from "../assets/images/about_02.png"
import About03 from "../assets/images/about_03.png"
import { DefaultButton } from './DefaultButton'
import { DefaultText } from './DefaultText'

export const About = () => {
    return (
        <div>
            <SectionContainer className="flex gap-16 px-16 bg-brand-alabaster">
                <div className='flex-1 flex items-center gap-6'>
                    <div className='flex flex-col gap-6'>
                        <img src={About01} alt="" className="w-full h-auto" />
                        <img src={About02} alt="" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src={About03} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className='flex-1'>
                    <DefaultTitle title="About" />
                    <DefaultText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </DefaultText>
                    <DefaultButton
                        className="mt-12"
                        text="Read More"
                    />
                </div>
            </SectionContainer>
        </div>
    )
}
