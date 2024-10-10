import React from 'react'
const SelectField = ({ id, name, register, options, className, onChange, disabled, style }) => {
    return (
        <select
            id={id}
            name={name}
            {...register}
            onChange={onChange}
            defaultValue=''
            className={`${className} text-capitalize`}
            style={style}
            disabled={disabled}
            required
        >
            <option value="" disabled></option>
            {options.map((option, idx) => (
                <option key={idx} value={option} className='text-capitalize'>
                    {typeof option === 'string' ? option.replace(/^./, (str) => str.toUpperCase()).replace(/([A-Z])/g, ' $1').trim() : option}
                </option>
            ))}
        </select>
    )
}
export default SelectField