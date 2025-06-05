import React from 'react'

export const ContactUsInput = ({ placeholder, type, required = false, ...props }) => {
    return (
        <input
            {...props}
            className={`p-4 outline-none w-full h-full bg-gray-100 capitalize ${props.className}`}
            type={type} name="" id=""
            placeholder={placeholder}
            required={required}
        />
    )
}
