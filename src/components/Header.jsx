import React from 'react'
import { PageIcon } from "../assets/icons/PageIcon"
import { HeaderLink } from './HeaderLink'
import { Link } from 'react-router-dom'

const navbarLinks = [
    { text: "Main", path: "/", },
    { text: "Gallery", path: "/gallery", },
    { text: "Projects", path: "/projects", },
    { text: "Certifications", path: "/certifications", },
    { text: "Contacts", path: "/contacts", },
]


export const Header = () => {
    return (
        <header className='flex items-center justify-between py-4 px-4 mx-auto max-w-7xl'>
            <Link to="/" >
                <PageIcon className="size-10" />
            </Link>

            <ul className='flex items-center gap-6'>
                {navbarLinks.map((e, index) => (
                    <HeaderLink key={index} text={e.text} to={e.path} />
                ))}
            </ul>
        </header >
    )
}
