import React from 'react'
import { SectionContainer } from './SectionContainer'
import { PageIcon } from "../assets/icons/PageIcon"
import { HeaderLink } from './HeaderLink'

const navbarLinks = [
    { text: "Main" },
    { text: "Gallery" },
    { text: "Projects" },
    { text: "Certifications" },
    { text: "Contacts" },
]


export const Header = () => {
    return (
        <header className='flex items-center justify-between py-4 px-4 mx-auto max-w-7xl'>
            <PageIcon className="size-10" />

            {/* Incorporar react-router-dom */}
            <ul className='flex items-center gap-6'>
                {navbarLinks.map((e, index) => (
                    <HeaderLink key={index} text={e.text} />
                ))}
            </ul>
        </header >
    )
}
