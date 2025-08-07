import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1 text-gray-700 font-medium' 
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`
                    rounded-lg 
                    bg-gray-100 
                    text-gray-800 
                    outline-none 
                    focus:ring-2 
                    focus:ring-blue-500 
                    duration-200 
                    border 
                    border-transparent 
                    w-full 
                    ${className} 
                    ${type === 'file' ? 'py-3' : 'px-4 py-3'}
                    ${type === 'file' ? 'file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer' : ''}
                `}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input