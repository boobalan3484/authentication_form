import React from 'react';
import '@/styles/Backdrop.css';

const Waves = () => {
    return (
        <div className="header px-0 pb-3 mb-4">
            {/* Content before waves */}
            <div className='w-100 position-relative pt-2 p-4'>
                <div className='d-flex justify-content-between'>
                    <img src="/image/mpeoples-logo.png" alt="logo" className='mpeople-logo pb-4' />
                    <img src="/image/First_Look-new.png" alt="logo" style={{height:'60px'}} className=' d-flex d-md-none' />
                </div>
                <div className='position-absolute z-1 w-100 d-none d-md-flex justify-content-center start-0 mt-1 ' style={{ top: '76%' }}>
                    <img src="/image/First_Look-new.png" alt="logo" className='firstlook2-logo' />
                </div>
            </div>
            {/* Waves Container */}
            <div className='position-absolute w-100' style={{ bottom: '0px' }}>
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
                        />
                    </defs>
                    <g className="parallax">
                        {/* <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /> */}
                        <use xlinkHref="#gentle-wave" x="48" y="14" fill="#ffffffa5" />
                        {/* <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /> */}
                        <use xlinkHref="#gentle-wave" x="48" y="15" fill="#ffffffa5" />
                        {/* <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /> */}
                        <use xlinkHref="#gentle-wave" x="48" y="16" fill="#ffffffa5" />
                        {/* <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffffa5" /> */}
                        <use xlinkHref="#gentle-wave" x="48" y="18" fill="#ffffffa5" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Waves;