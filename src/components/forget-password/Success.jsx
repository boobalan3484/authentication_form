'use client'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'
import Timer from '../Timer';
import { useRouter } from 'next/navigation';

const Success = () => {

    const router = useRouter();

    const handleTimeUp = () => {
        router.push('/authentication/login');
    };

    return (
        <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400' >
            <div className='text-center' >
                <div className='fs-1 text-center pb-2 '>
                    <iframe src="/lottie-animations/successAnimation.svg" frameBorder="0"></iframe>
                </div>
                <p className="fw-medium p-0 m-0 text-center" style={{ fontSize: '18px' }}>
                    Password has been changed successfully
                </p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                {/* <p className='p-0 m-0 border-2 border-bottom pb-2 mb-2' style={{ fontSize: '14px' }}>
                    You have just reset your password
                </p> */}
                <small>
                    Redirect to Login Page in
                    <span className='text-info fw-semibold'> <Timer initialTime={10} format="sec" onTimeUp={handleTimeUp} name="Countdown" /> </span>
                </small>
                <small className='text-center' style={{ fontSize: '14px' }}> or </small>
                <small> Click below to login</small>
            </div>
        </div>
    )
}

export default Success