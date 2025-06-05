import React from 'react'
import { ArrowIcon } from '../assets/icons/ArrowIcon'

export const DefaultButton = ({ text, ...props }) => {
    return (
        <button
            {...props}
            className={`flex items-center gap-4 bg-brand-mineshaft text-white py-5 
                 px-10 group tracking-widest text-sm
            hover:bg-brand-mineshaft/90 transition-all duration-300 uppercase ${props.className}`}>
            {text}
            <ArrowIcon className="size-6 group-hover:translate-x-2 transition-all duration-300" />
        </button>
    )
}
