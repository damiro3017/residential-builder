import { Link } from 'react-router-dom'
import { FooterTitle } from './FooterTitle'
import { PageIcon } from '../assets/icons/PageIcon'
import { PhoneIcon } from '../assets/icons/PhoneIcon'
import { LocationIcon } from '../assets/icons/LocationIcon'
import { MailIcon } from '../assets/icons/MailIcon'
import { FacebookIcon } from '../assets/icons/FacebookIcon'
import { TwitterIcon } from '../assets/icons/TwitterIcon'
import { LinkedinIcon } from '../assets/icons/LinkedinIcon'
import { PinterestIcon } from '../assets/icons/PinterestIcon'

const infoLinks = [
    { title: "Inicio", path: "/" },
    { title: "Galería", path: "/gallery" },
    { title: "Proyectos", path: "/projects" },
    { title: "Contactos", path: "/contacts" }
]

const contactItems = [
    { icon: LocationIcon, text: 'Av. Las Acacias 456, Austin, TX 78701' },
    { icon: PhoneIcon, text: '+1 (512) 555-0198' },
    { icon: MailIcon, text: 'contacto@casasfamiliares.com' }
]

const socialIcons = [
    { icon: FacebookIcon, label: 'Facebook', path: "https://www.facebook.com" },
    { icon: TwitterIcon, label: 'Twitter', path: "https://www.twitter.com" },
    { icon: LinkedinIcon, label: 'LinkedIn', path: "https://www.linkedin.com" },
    { icon: PinterestIcon, label: 'Pinterest', path: "https://www.pinterest.com" }
]

export const Footer = () => (
    <footer className="bg-brand-mineshaft text-brand-alabaster py-8">
        <div className="px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/">
                <PageIcon className="size-20" />
            </Link>
            <div>
                <FooterTitle text="Información" />
                <ul className="mt-6 flex flex-col gap-4">
                    {infoLinks.map(({ title, path }, index) => (
                        <Link key={index} to={path}>{title}</Link>
                    ))}
                </ul>
            </div>
            <div>
                <FooterTitle text="Contactos" />
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
                <FooterTitle text="Redes Sociales" />
                <ul className="mt-6 flex items-center gap-4">
                    {socialIcons.map(({ icon: Icon, path }, index) => (
                        <a
                            key={index}
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={socialIcons[index].label}
                        >
                            <Icon className="size-6" />
                        </a>
                    ))}
                </ul>
            </div>
        </div>
        <p className="text-center mt-8 text-sm">Damiro Gómez</p>
    </footer>
)
