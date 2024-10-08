'use client'
import React, { useState, useEffect } from 'react';
import Login from '@/components/authentication/Login'
import Register from '@/Workout/authentication/Register'
import '@/styles/FormStyle.css'
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthPage() {
    const [isLoginForm, setIsLoginForm] = useState(true); // Default is the login form

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    // Variants for the sliding or fade animation
    const slideVariants = {
        hiddenLeft: {
            x: '-100vw', // Slide out to the left
            opacity: 0,
            transition: { duration: 0.6 },
        },
        hiddenRight: {
            x: '100vw', // Slide out to the right
            opacity: 0,
            transition: { duration: 0.6 },
        },
        visible: {
            x: 0, // Slide in
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
            <section className='d-flex align-items-center' style={{ height: '100vh' }}>
                <div className='container rounded shadow-lg p-3'>
                    <div className="row p-2 ">
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <AnimatePresence mode="wait">
                                {isLoginForm ? (
                                    <motion.div
                                        key="login"
                                        variants={slideVariants}
                                        initial="hiddenLeft"
                                        animate="visible"
                                        exit="hiddenLeft"
                                        className="form-container "
                                    >
                                        <Login toggleForm={toggleForm} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="registerImage"
                                        variants={slideVariants}
                                        initial="hiddenLeft"
                                        animate="visible"
                                        exit="hiddenLeft"
                                        className="image-container d-none d-lg-flex"
                                    >
                                        <img
                                            src="/image/register-dummy.png"
                                            alt="Register Image"
                                            className="img-fluid"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Second Column for the Image */}
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <AnimatePresence mode="wait">
                                {isLoginForm ? (
                                    <motion.div
                                        key="loginImage"
                                        variants={slideVariants}
                                        initial="hiddenRight"
                                        animate="visible"
                                        exit="hiddenRight"
                                        className="image-container d-none d-lg-flex"
                                    >
                                        <img
                                            src='/image/login-dummy.png'
                                            alt="Login Image"
                                            className="img-fluid"
                                        />
                                    </motion.div>
                                ) : (

                                    <motion.div
                                        key="register"
                                        variants={slideVariants}
                                        initial="hiddenRight"
                                        animate="visible"
                                        exit="hiddenRight"
                                        className="form-container"
                                    >
                                        <Register toggleForm={toggleForm} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
    );
};