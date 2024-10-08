'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'
import PasswordField from '../../components/form/PasswordField';

const Register = ({ toggleForm }) => {
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();

    const handleChange = (e) => {
        const { value } = e.target;
        if (!/^\d*$/.test(value)) {
            // Remove non-numeric characters
            e.target.value = value.replace(/\D/g, '');
        }
    };

    const onSubmit = async (data) => {
        console.log(data);
        toast.success('Details Registerd Successfully');
        reset()

        // setLoading(true);
        // const formData = new FormData();
        // formData.append("status", 'disable');
        // for (let key in data) {
        //     if (key !== 'asset') {
        //         formData.append(key, data[key]);
        //     }
        // }
        // if (data.asset && data.asset.length > 0) {
        //     formData.append('asset', data.asset[0]);
        // } else {
        //     toast.error('Asset is required');
        //     setLoading(false);
        //     return;
        // }
        // try {
        //     const response = await API.addAsset(formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        //     setLoading(false);
        //     toast.success(response.data.message || 'Form submitted successfully');
        //     reset();
        //     setPreview(null);
        // } catch (e) {
        //     const errorMsg = e.response?.data?.message || 'Server Connection Failed';
        //     toast.error(errorMsg);
        //     setLoading(false);
        // }
    };

    const password = watch('password');

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column justify-content-center align-items-center h-100 py-4' >
            <div className='d-flex flex-column align-items-center gap-4 px-md-3 px-lg-5 px-2 w-100 w-md-400' >
                <div>
                    <h4 className="clip-heading">
                        Register your details
                    </h4>
                </div>
                <div className="w-100">
                    <div className="input-group">
                        <input
                            type="text"
                            id="username"
                            name="userName"
                            {...register('userName', {
                                required: 'Username is required.',
                                minLength: {
                                    value: 4,
                                    message: 'Username must be at least 4 characters.',
                                },
                            })}
                            maxLength={25}
                            required
                        />
                        <label htmlFor="username">Name<i className='text-danger'>*</i></label>
                    </div>
                    {errors.userName && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.userName.message}</small>}
                </div>
                <div className="w-100">
                    <div className="input-group">
                        <input
                            type="tel"
                            id="mobileInput"
                            name='mobile'
                            maxLength={10}
                            {...register('mobile', {
                                required: 'Mobile number is required.',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Mobile number must be exactly 10 digits.'
                                }
                            })}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="mobileInput" className="">Mobile Number <i className='text-danger'>*</i></label>

                    </div>
                    {errors.mobile && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.mobile.message}</small>}
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
                        <label htmlFor="passwordInput" className="">Password <i className='text-danger'>*</i></label>
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
                                minLength: { value: 6, message: 'Password must be at least 6 values.' },
                                validate: (value) =>
                                    value === password || 'Passwords do not match.',
                            })}
                        />
                        <label htmlFor="confirmPasswordInput" className="">Confirm Password <i className='text-danger'>*</i></label>
                    </div>
                    {errors.confirmPassword && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.confirmPassword.message}</small>}
                </div>

                <label className="checkbox-container flex-wrap column-gap-1">
                    <input
                        type="checkbox"
                        required
                        {...register('terms', { required: true })}
                    />
                    <span className="checkmark"></span>
                    I agree with all the <a href='' className='link'> Terms and Conditions</a> & <a href='' className='link'> Privacy Policies</a>
                </label>

                <div className=''>
                    <button type="submit" className=" btn-send px-4 rounded mx-auto fw-bold text-uppercase">Sign up</button>
                </div>
                <small style={{ fontSize: '14px' }}> Already have an account? <a onClick={toggleForm} className='fw-semibold link '>Login Now!</a></small>
            </div>
        </form >
    )
}

export default Register