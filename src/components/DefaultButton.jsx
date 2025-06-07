import { ArrowIcon } from '../assets/icons/ArrowIcon'
import { Link } from 'react-router-dom'

export const DefaultButton = ({ text, to, ...props }) => {
    return (
        <Link
            to={to}
            {...props}
            className={`flex items-center gap-4 bg-brand-mineshaft text-white py-5 
                 px-10 group tracking-widest text-sm w-fit
                hover:bg-brand-mineshaft/90 transition-all duration-300 uppercase ${props.className}`}>
            {text}
            <ArrowIcon className="size-6 group-hover:translate-x-2 transition-all duration-300" />
        </Link>
    )
}
