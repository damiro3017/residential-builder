import React, { Children } from 'react'

export const DefaultTitle = ({ title, subtitle }) => {
    return (
        <>
            <h2 className='text-6xl text-gray-400 font-light capitalize'>{title}</h2>
            <h3 className='text-6xl text-brand-mineshaft font-bold capitalize'>{subtitle}</h3>
        </>
    )
}
