'use client'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'
import PasswordField from '../form/PasswordField';

const NewPassword = ({register, watch, errors, setValue, }) => {
    
    const password = watch('password');

    return (
        <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400' >
            <div className=''>
                <div className=' pt-3' >
                    <p className="clip-heading text-capitalize fw-medium p-0 m-0" style={{ fontSize: '18px' }}>
                        Reset Password
                    </p>
                    <p className='p-0 m-0' style={{ fontSize: '14px' }}>
                        Enter your new password below, make sure it's a strong combination.
                    </p>
                </div>
            </div>
            <div className="w-100">
                <div className="input-group ">
                    <PasswordField
                        id="passwordInput"
                        name="password"
                        register={register('password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 values.',
                            },
                        })}
                    />
                    <label htmlFor="passwordInput" className="">New Password <i className='text-danger'>*</i></label>
                </div>
                {errors.password && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.password.message}</small>}
            </div>
            <div className="w-100">
                <div className="input-group">
                    <PasswordField
                        id="confirmPasswordInput"
                        name="confirmPassword"
                        register={register('confirmPassword', {
                            required: 'Please confirm your password.',
                            minLength: { value: 6, message: 'Password must be atleast 6 values.' },
                            validate: (value) =>
                                value === password || 'Passwords do not match.',
                        })}
                    />
                    <label htmlFor="confirmPasswordInput" className="">Confirm New Password <i className='text-danger'>*</i></label>
                </div>
                {errors.confirmPassword && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.confirmPassword.message}</small>}
            </div>

        </div>
    )
}

export default NewPassword