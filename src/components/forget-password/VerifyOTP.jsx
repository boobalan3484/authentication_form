// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import 'react-toastify/dist/ReactToastify.css';
// import '@/styles/FormStyle.css';
// import Timer from '@/components/Timer'; // Adjust the import path as necessary


// const VerifyOTP = ({ register, errors, setValue, watch, mobile }) => {
//     const [otp, setOtp] = useState(['', '', '', '']);

//     // Watch for the whole OTP input
//     const otpWatch = watch('otp', otp);

//     // Set otp state based on the watched input
//     useEffect(() => {
//         setOtp(otpWatch);
//     }, [otpWatch]);

//     const handleOtpChange = (e, index) => {
//         const { value } = e.target;

//         // Handle deleting with backspace
//         if (e.key === 'Backspace' && value === '') {
//             if (index > 0) {
//                 document.getElementById(`otp-input-${index - 1}`).focus();
//             }
//             const newOtp = [...otp];
//             newOtp[index] = '';
//             setOtp(newOtp);
//             setValue('otp', newOtp); // Update the form value
//             return;
//         }

//         if (/^\d*$/.test(value) && value.length <= 1) {
//             const newOtp = [...otp];
//             newOtp[index] = value;
//             setOtp(newOtp);
//             setValue('otp', newOtp); // Update the form value
//             if (value && index < 3) {
//                 document.getElementById(`otp-input-${index + 1}`).focus();
//             }
//         }
//     };

//     const handleTimeUp = () => {
//         console.log('Timer has reached zero!');
//     };

//     const formatMobileNumber = `******${mobile.slice(-4)}`

//     return (
//         <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400'>
//             <div className=''>
//                 <div className='pt-3'>
//                     <p className="clip-heading text-capitalize fw-medium p-0 m-0" style={{ fontSize: '18px' }}>
//                         Enter Verification Code
//                     </p>
//                     <p className='p-0 m-0' style={{ fontSize: '14px' }}>
//                         We have sent you a confirmation code to your mobile number {formatMobileNumber}.
//                     </p>
//                     <p className='p-0 m-0 mt-2' style={{ fontSize: '14px' }}>
//                         Enter the four-digit code below to verify.
//                     </p>
//                 </div>
//             </div>

//             <div className='d-flex justify-content-start gap-2'>
//                 {otp.map((digit, index) => (
//                     <input
//                         key={index}
//                         id={`otp-input-${index}`}
//                         type="text"
//                         value={digit}
//                         onChange={(e) => handleOtpChange(e, index)}
//                         onKeyDown={(e) => handleOtpChange(e, index)}
//                         {...register(`otp.${index}`, { required: true })} // Registering each input
//                         maxLength="1"
//                         style={{ width: '40px', textAlign: 'center' }}
//                         className='rounded p-1 border border-2 shadow-sm otp-input-style'
//                         autoComplete='off'
//                     />
//                 ))}
//             </div>

//             <small style={{ fontSize: '14px' }}>Code will expire in <span className='text-info fw-semibold'> <Timer initialTime={120} format="mm:ss" onTimeUp={handleTimeUp} name="Session" /> </span></small>

//             <small style={{ fontSize: '14px' }}>Didn't receive an OTP? <Link href="/authentication/signup" className='link'>Resend OTP</Link></small>

//         </div>
//     );
// };

// export default VerifyOTP;



'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/FormStyle.css';
import Timer from '@/components/Timer'; // Adjust the import path as necessary

const VerifyOTP = ({ register, errors, setValue, watch, mobile, onSubmitMobile }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [canResend, setCanResend] = useState(false); // State to track resend link

    // Watch for the whole OTP input
    const otpWatch = watch('otp', otp);

    // Set otp state based on the watched input
    useEffect(() => {
        setOtp(otpWatch);
    }, [otpWatch]);

    const handleOtpChange = (e, index) => {
        const { value } = e.target;

        // Handle deleting with backspace
        if (e.key === 'Backspace' && value === '') {
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            setValue('otp', newOtp); // Update the form value
            return;
        }

        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setValue('otp', newOtp); // Update the form value
            if (value && index < 3) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleTimeUp = () => {
        console.log('Timer has reached zero!');
        setCanResend(true); // Enable the resend link when the timer ends
    };

    const formatMobileNumber = `******${mobile.slice(-4)}`;

    return (
        <div className='d-flex flex-column align-items-center gap-3 px-md-3 px-lg-5 px-2 w-100 w-md-400'>
            <div className=''>
                <div className='pt-3'>
                    <p className="clip-heading text-capitalize fw-medium p-0 m-0" style={{ fontSize: '18px' }}>
                        Enter Verification Code
                    </p>
                    <p className='p-0 m-0' style={{ fontSize: '14px' }}>
                        We have sent you a confirmation code to your mobile number {formatMobileNumber}.
                    </p>
                    <p className='p-0 m-0 mt-2' style={{ fontSize: '14px' }}>
                        Enter the four-digit code below to verify.
                    </p>
                </div>
            </div>

            <div className='d-flex justify-content-start gap-2'>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleOtpChange(e, index)}
                        {...register(`otp.${index}`, { required: true })} // Registering each input
                        maxLength="1"
                        style={{ width: '40px', textAlign: 'center' }}
                        className='rounded p-1 border border-2 shadow-sm otp-input-style'
                        autoComplete='off'
                    />
                ))}
            </div>

            <small style={{ fontSize: '14px' }}>
                Code will expire in <span className='text-info fw-semibold'><Timer initialTime={120} format="mm:ss" onTimeUp={handleTimeUp} name="Session" /></span>
            </small>

            <small style={{ fontSize: '14px' }}>
                Didn't receive an OTP? 
                <a onClick={onSubmitMobile} className={`link ${canResend ? '' : 'disabled'}`} aria-disabled={!canResend}>
                    {canResend ? 'Resend OTP' : 'Resend OTP'}
                </a>
            </small>
        </div>
    );
};

export default VerifyOTP;
