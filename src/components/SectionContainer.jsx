import React from 'react'

export const SectionContainer = ({ children, ...props }) => {
    return (
        <section {...props} className={`${props.className} max-w-7xl py-16 px-4 mx-auto `}>
            {children}
        </section>
    )
}
