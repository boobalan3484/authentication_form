import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '@/styles/FormStyle.css'

const PasswordField = ({ id, name, register }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <input
                type={showPassword ? 'text' : 'password'}
                {...register}
                id={id}
                required
                className="position-relative"
                autoComplete='off'
            />
            <span className="text-secondary position-absolute end-0 bottom-0 password-eye" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
        </>
    );
};

export default PasswordField;
