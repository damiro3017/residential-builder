import React from 'react'

export const DefaultText = ({ children, ...props }) => {
    return (
        <p {...props}
            className={`mt-2 font-light ${props.className}`}>
            {children}
        </p>
    )
}
