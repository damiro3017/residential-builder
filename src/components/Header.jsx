import { PageIcon } from "../assets/icons/PageIcon"
import { HeaderLink } from './HeaderLink'
import { Link } from 'react-router-dom'

const linksNavbar = [
    { texto: "Inicio", ruta: "/" },
    { texto: "Galería", ruta: "/gallery" },
    { texto: "Proyectos", ruta: "/projects" },
    { texto: "Contactos", ruta: "/contacts" },
]

export const Header = () => {
    return (
        <header className="flex flex-col lg:flex-row items-center justify-between py-4 px-4 
        mx-auto max-w-7xl">
            <Link to="/">
                <PageIcon className="size-10" />
            </Link>
            <ul className="flex items-center justify-center flex-wrap gap-4 mt-4 lg:mt-0">
                {linksNavbar.map((enlace, indice) => (
                    <HeaderLink key={indice} text={enlace.texto} to={enlace.ruta} />
                ))}
            </ul>
        </header>
    )
}
