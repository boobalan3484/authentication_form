import React from 'react'
const SelectField = ({ id, name, register, options, onChange }) => {
    return (
        <select
            id={id}
            name={name}
            {...register}
            onChange={onChange}
            className='text-capitalize'
            defaultValue=''
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