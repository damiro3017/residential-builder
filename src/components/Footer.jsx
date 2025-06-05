import React from 'react'
import { FooterTitle } from './FooterTitle'
import { PageIcon } from '../assets/icons/PageIcon'
import { PhoneIcon } from '../assets/icons/PhoneIcon'
import { LocationIcon } from '../assets/icons/LocationIcon'
import { MailIcon } from '../assets/icons/MailIcon'
import { FacebookIcon } from '../assets/icons/FacebookIcon'
import { TwitterIcon } from '../assets/icons/TwitterIcon'
import { LinkedinIcon } from '../assets/icons/LinkedinIcon'
import { PinterestIcon } from '../assets/icons/PinterestIcon'
import { Link } from 'react-router-dom'

const infoLinks = [
    { title: "Main", path: "/", },
    { title: "Gallery", path: "/gallery", },
    { title: "Projects", path: "/projects", },
    { title: "Certifications", path: "/certifications", },
    { title: "Contacts", path: "/contacts", }
]

const contactItems = [
    { icon: LocationIcon, text: '1234 Sample Street Austin Texas 78704' },
    { icon: PhoneIcon, text: '512 - 333 - 2222' },
    { icon: MailIcon, text: 'sampleemail@gmail.com' }
]

const socialIcons = [
    { icon: FacebookIcon, label: 'Facebook', path: "https://www.facebook.com", },
    { icon: TwitterIcon, label: 'Twitter', path: "https://www.twitter.com", },
    { icon: LinkedinIcon, label: 'LinkedIn', path: "https://www.linkedin.com", },
    { icon: PinterestIcon, label: 'Pinterest', path: "https://www.pinterest.com", }
]

export const Footer = () => (
    <footer className="bg-brand-mineshaft text-brand-alabaster py-8">
        <div className="px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/">
                <PageIcon className="size-20" />
            </Link>

            <div>
                <FooterTitle text="Information" />
                <ul className="mt-6 flex flex-col gap-4">
                    {infoLinks.map((e, index) => (
                        <Link key={index} to={e.path}>{e.title}</Link>
                    ))}
                </ul>
            </div>

            <div>
                <FooterTitle text="Contacts" />
                <address className="not-italic mt-6 flex flex-col gap-4">
                    {contactItems.map(({ icon: Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <Icon className="size-6" />
                            {text}
                        </div>
                    ))}
                </address>
            </div>

            <div>
                <FooterTitle text="Social Media" />
                <ul className="mt-6 flex items-center gap-4">
                    {socialIcons.map(({ icon: Icon, path }, index) => (
                        <Link key={index} to={path}>
                            <Icon className="size-6" />
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
        <p className="text-center mt-8 text-sm">Damiro Gómez</p>
    </footer>
)
