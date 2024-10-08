'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css';
import { useRouter } from 'next/navigation';
import Mobile from '@/components/forget-password/Mobile';
import VerifyOTP from '@/components/forget-password/VerifyOTP';
import NewPassword from '@/components/forget-password/NewPassword';
import Success from '@/components/forget-password/Success';

export default function ResetPassword() {
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm();
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1); // Step state to track which component to display
    const [mobileData, setMobileData] = useState('')

    const onSubmitMobile = async (data) => {
        console.log(data);
        setMobileData(data.mobile)
        toast.success('OTP sent to your mobile number');
        setCurrentStep(2); // Move to Verify OTP step
        reset();
    };

    const onSubmitOTP = async (data) => {
        console.log(data);
        console.log('OTP submitted:', data.otp.join(''));
        toast.success('OTP verified');
        setCurrentStep(3); // Move to New Password step
        reset();
    };

    const onSubmitPassword = async (data) => {
        console.log(data);
        toast.success('Password changed successfully');
        setCurrentStep(4); // Move to Success step
        reset();
    };
    const onSubmit = async (data) => {
        console.log(data);
        reset();

        setTimeout(() => {
            router.push('/authentication/login'); // Navigate to dashboard
        }, 5000);
    };

    // Variants for the sliding or fade animation
    const slideVariants = {
        hiddenLeft: {
            x: '-100vw',
            opacity: 0,
            transition: { duration: 0.6 },
        },
        hiddenRight: {
            x: '100vw',
            opacity: 0,
            transition: { duration: 0.6 },
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="loginImage"
                        variants={slideVariants}
                        initial="hiddenLeft"
                        animate="visible"
                        exit="hiddenLeft"
                        className="image-container d-none d-lg-flex"
                    >
                        <img
                            src='/image/login-dummy.png'
                            alt="Login Image"
                            className="img-fluid"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="login"
                        variants={slideVariants}
                        initial="hiddenRight"
                        animate="visible"
                        exit="hiddenRight"
                        className="form-container"
                    >
                        <form onSubmit={handleSubmit(currentStep === 1 ? onSubmitMobile : currentStep === 2 ? onSubmitOTP : currentStep === 3 ? onSubmitPassword : onSubmit)} className='d-flex flex-column justify-content-center align-items-center h-100 py-4 gap-3'>
                            {currentStep === 1 && <Mobile register={register} errors={errors} />}
                            {currentStep === 2 && <VerifyOTP register={register} errors={errors} mobile={mobileData} setValue={setValue} watch={watch} onSubmitMobile={onSubmitMobile}/>}
                            {currentStep === 3 && <NewPassword register={register} errors={errors} watch={watch} />}
                            {currentStep === 4 && <Success />}
                            {/*Navigation */}
                            {currentStep <= 4 && (
                                <button type="submit" className="btn-send px-4 rounded mx-auto fw-bold text-uppercase">
                                    {currentStep === 1 ? 'Continue' : currentStep === 2 ? 'Verify' : currentStep === 3 ? 'Submit' : 'Login'}
                                </button>
                            )}
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}
