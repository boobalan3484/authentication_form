'use client'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css'
import Timer from '@/components/Timer';
import { useRouter } from 'next/navigation';

const Success = () => {

    const router = useRouter();

    const handleTimeUp = () => {
        // router.push('/authentication/login');
    };

    return (
        // <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400' >
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '66vh' }}>
            <div className='text-center' >
                <div className='fs-1 text-center pb-2 '>
                    <iframe src="/lottie-animations/successAnimation.svg" frameBorder="0"></iframe>
                </div>
                <p className="fw-bold p-0 m-0 text-center clip-heading main-title" style={{ fontSize: '22px', letterSpacing: '3px' }}>
                    Congratulation!
                </p>
                <p className="fw-medium p-0 m-0 text-center" style={{ fontSize: '18px' }}>
                    You've successfully completed the registration process
                </p>
            </div>
            <div className='d-flex flex-column align-items-center my-3'>
                {/* <p className='p-0 m-0 border-2 border-bottom pb-2 mb-2' style={{ fontSize: '14px' }}>
                    You have just reset your password
                </p> */}
                <small>
                    {/* Redirect to Login Page in */}
                    Our <span className='text-primary fw-semibold'>  First Look </span> Team will contact you soon.
                    {/* <span className='text-info fw-semibold'> <Timer initialTime={10} format="sec" onTimeUp={handleTimeUp} name="Countdown" /> </span> */}
                </small>
                {/* <small> Thanks for your response.</small> */}
            </div>
        </div>

        // </div>
    )
}

export default Success