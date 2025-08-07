import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='inline-block mb-1 pl-1 text-gray-700 font-medium'>{label}</label>}
            <select // **CRITICAL FIX: Changed from <search> to <select>**
                {...props}
                id={id}
                ref={ref}
                className={`px-4 py-3 rounded-lg bg-gray-100 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 duration-200 border border-transparent w-full cursor-pointer ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)