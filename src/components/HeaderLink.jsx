import { NavLink } from 'react-router-dom'

export const HeaderLink = ({ text, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `uppercase px-4 py-1.5 border-t border-b text-sm font-light
                hover:border-t-brand-mineshaft hover:border-b-brand-mineshaft cursor-pointer transition
                duration-300 ${isActive ? "border-b-brand-mineshaft border-t-brand-mineshaft" : "border-transparent"
                }`
            }
        >
            {text}
        </NavLink>
    )
}

