import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-6 py-3 rounded-lg font-semibold cursor-pointer ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
