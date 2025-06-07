import React from 'react'

export const ContactUsInput = ({ placeholder, type, required = false, className = "", ...props }) => {
    return (
        <input
            {...props}
            className={`p-4 outline-none w-full h-full bg-gray-100 ${className}`}
            type={type}
            placeholder={placeholder}
            required={required}
        />
    )
}
