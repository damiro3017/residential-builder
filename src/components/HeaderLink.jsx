import React from 'react'

export const HeaderLink = ({ text }) => {
    return (
        <div className='uppercase px-4 py-1.5 border border-transparent text-sm font-light
        hover:border-t-brand-mineshaft hover:border-b-brand-mineshaft cursor-pointer transition
        duration-300'>
            {text}
        </div>
    )
}
