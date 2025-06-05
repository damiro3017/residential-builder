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

const infoLinks = ['Main', 'Gallery', 'Projects', 'Certifications', 'Contacts']

const contactItems = [
    { icon: LocationIcon, text: '1234 Sample Street Austin Texas 78704' },
    { icon: PhoneIcon, text: '512 - 333 - 2222' },
    { icon: MailIcon, text: 'sampleemail@gmail.com' }
]

const socialIcons = [
    { icon: FacebookIcon, label: 'Facebook' },
    { icon: TwitterIcon, label: 'Twitter' },
    { icon: LinkedinIcon, label: 'LinkedIn' },
    { icon: PinterestIcon, label: 'Pinterest' }
]

export const Footer = () => (
    <footer className="bg-brand-mineshaft text-brand-alabaster py-8">
        <div className="px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PageIcon className="size-20" />

            <div>
                <FooterTitle text="Information" />
                <ul className="mt-6 flex flex-col gap-4">
                    {infoLinks.map(link => (
                        <li key={link}>{link}</li>
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
                    {socialIcons.map(({ icon: Icon, label }) => (
                        <li key={label}>
                            <a href="#" aria-label={label}>
                                <Icon className="size-6" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <p className="text-center mt-8 text-sm">Damiro Gómez</p>
    </footer>
)
