'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'

const Mobile = ({ slideVariants, register, errors }) => {
    // const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
    const handleChange = (e) => {
        const { value } = e.target;
        if (!/^\d*$/.test(value)) {
            // Remove non-numeric characters
            e.target.value = value.replace(/\D/g, '');
        }
    };
    return (
        // <AnimatePresence mode="wait">
        //     <motion.div
        //         key="mobile"
        //         variants={slideVariants}
        //         initial="hiddenRight"
        //         animate="visible"
        //         exit="hiddenRight"
        //         className="form-container-mobile"
        //     >
        <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400' >
            <div className=''>
                <h4 className="clip-heading w-100 text-center fw-semibold" style={{ fontSize: '24px', letterSpacing: '.4px' }}>
                    Reset your password
                </h4>
                <div className='border-2 border-top pt-3' >
                    <p className="clip-heading text-capitalize fw-medium p-0 m-0" style={{ fontSize: '18px' }}>
                        Enter your Mobile number
                    </p>
                    <p className='p-0 m-0' style={{ fontSize: '14px' }}>
                        We will send you a confirmation code to reset your password.
                    </p>
                </div>
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
                                value: (/^[0-9]{10}$/),
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
        </div>
        //     </motion.div>
        // </AnimatePresence>
    )
}

export default Mobile