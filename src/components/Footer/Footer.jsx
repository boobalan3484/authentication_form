import React from 'react'
import '@/styles/FooterStyle.css'
import Social from './Social'
import { MdMail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import FooterAccordion from './FooterAccordion';


const reach_out = [
    {
        platform: 'mail',
        icon: <MdMail />,
        value: 'mpeoplesofficial@gmail.com',
        link: 'mailto:mpeoplesofficial@gmail.com'
    },
    {
        platform: 'mobile1',
        icon: <FaMobileScreen />,
        value: '+91 9487812715',
        link: 'https://wa.me/+919487812715'
    },
]
const social = [
    {
        platform: 'LinkedIn',
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/company/104539927/admin/dashboard/',
        color: '#0a66c2',
    },
    {
        platform: 'Instagram',
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/mpeoples_official/',
        color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
    },
    {
        platform: 'X Corp.',
        icon: <FaXTwitter />,
        link: 'https://x.com/Mpeoples_',
        color: '#000',
    },
    {
        platform: 'YouTube',
        icon: <AiOutlineYoutube />,
        link: 'https://www.youtube.com/channel/UCWp_wGb83WWdY12ShZeNk2w',
        color: '#FF0000',
    },
    {
        platform: 'Facebook',
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/profile.php?id=61561349522345',
        color: '#0866ff',
    },
];


const Footer = () => {
    return (
        <footer className='w-100 bottom-0 position-relative  mt-2 p-4  text-light footer-container' style={{ fontFamily: 'arial' }}>
            <div className='d-none d-lg-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <img src="/image/mpeoples-logo.png" alt="logo" className=' pb-4' style={{ height: '80px', width: 'fit-content' }} />
                    <p className='fs-6 fw-semibold' style={{ letterSpacing: '.6px', color: '#5f429c' }}> We're always happy to help!</p>
                </div>

                <div>
                    <p className='fw-bold p-0 m-0 mb-1 border-2 border-bottom'>
                        Reach out
                    </p>
                    <ul className='list-unstyled reachout-list'>
                        {reach_out.map((item, idx) => (
                            <li className='d-flex gap-2 align-items-center' key={idx}>
                                {item.icon}
                                <a className='' href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className='fw-bold p-0 m-0 mb-1 border-2 border-bottom '>
                        {/* Find us */}
                        Location
                    </p>
                    <div className='d-flex gap-2'>
                        <FaLocationDot className='mt-1' />
                        <p className='p-0 m-0'>
                            1/248, Raja Ganapathy Complex,
                            <br />
                            2nd Floor, Opposite BSNL Office,
                            <br />
                            Meyyaanur Main Road,
                            Salem - 636004.
                        </p>
                    </div>
                </div>

                <div>
                    <p className='fw-bold p-0 m-0 mb-1 border-2 border-bottom'>
                        Follow us
                    </p>
                    <ul className='d-flex list-unstyled gap-2 social-list my-2'>
                        {social.map((item, idx) => (
                            <li key={idx} className="social-icon-item" style={{ '--social-color': item.color }}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-link"
                                    title={item.platform}
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='d-flex d-lg-none flex-column '>
                <div className='d-flex align-items-center justify-content-between'>
                    <img src="/image/mpeoples-logo.png" alt="logo" className=' pb-4' style={{ height: '80px', width: 'fit-content' }} />
                    <p className='fs-6 fw-semibold hide-para' style={{ letterSpacing: '.6px', color: '#5f429c' }}> We're always happy to help!</p>
                </div>
                <FooterAccordion
                    social={social}
                    reach_out={reach_out}
                />
            </div>
            <div className='d-flex justify-content-between align-items-center w-100 d-lg-none border-2 border-bottom'>

                <p className='m-0 px-2 py-2 rs-panel-title'>
                    Follow us
                </p>
                <ul className='d-flex list-unstyled gap-2 social-list py-2 m-0'>
                    {social.map((item, idx) => (
                        <li key={idx} className="social-icon-item" style={{ '--social-color': item.color }}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                title={item.platform}
                            >
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </footer>
    )
}

export default Footer