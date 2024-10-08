"use client";
import React, { useState } from 'react'
import '@/styles/registerStyle.css';
import { useForm } from 'react-hook-form'
import '@/styles/TalentFormStyle.css';
import SelectField from '@/components/form/SelectField';
import { useRouter } from 'next/navigation';


function page() {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
    const [showOtherFields, setShowOtherFields] = useState(false);

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
        setTimeout(() => {
            router.push('/dashboard'); // Navigate to dashboard
        }, 2000);
    };

    const handleCategoryChange = (e) => {
        // Show additional fields when 'Other' is selected
        if (e.target.value === 'other') {
            setShowOtherFields(true);
        } else {
            setShowOtherFields(false);
        }
    };

    const option_gender = ['male', 'female']
    const option_category = ["dance", "art", "instrumentPlay", "sing", "act", "drama", "standupPerformance", "other"];

    return (
        <div className="container-fluid">
            <div className="row form-container">
                <div className="col-12 col-md-8 mx-auto text-center heading">
                    <h1 className='my-3 talent-heading'>Prove You are Talent to This World</h1>
                    <p className='heading-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, at corporis autem doloremque nostrum esse, quam quisquam accusantium pariatur et veritatis aspernatur adipisci eum exercitationem illo ipsum quo placeat! Repellat?</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                        
                </div>
            </div>
            <div className="row  form-bg-img">
                <div className="col-12 col-md-8 mx-auto my-5 form-parent">
                    <form onSubmit={handleSubmit(onSubmit)} className='py-3'>
                        {/* Section 1 */}
                        <p className='p-0 mb-2 fw-semibold'> Applicant Info </p>
                        <div className='row row-cols-md-2 row-cols-1 row-gap-2'>
                            <div className="col">
                                <div className="talent-group">
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstName"
                                        {...register('firstName', {
                                            required: 'First name is required.',
                                            minLength: {
                                                value: 4,
                                                message: 'First name must be at least 4 characters.',
                                            },
                                        })}
                                        maxLength={25}
                                        autoComplete='off'
                                        required
                                    />
                                    <label htmlFor="firstname">First Name<i className='text-danger'>*</i></label>
                                </div>
                                {errors.firstName && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.firstName.message}</small>}
                            </div>
                            <div className="col">
                                <div className="talent-group">
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastName"
                                        {...register('lastName', {
                                            required: 'Last name is required.',
                                            minLength: {
                                                value: 1,
                                                message: 'Last name must be at least 4 characters.',
                                            },
                                        })}
                                        maxLength={15}
                                        autoComplete='off'
                                        required
                                    />
                                    <label htmlFor="lastname">Last Name<i className='text-danger'>*</i></label>
                                </div>
                                {errors.lastName && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.lastName.message}</small>}
                            </div>

                            <div className="col">
                                <div className="talent-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        {...register('email', {
                                            required: 'Email is required.',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Enter valid email address.'
                                            },
                                        })}
                                        maxLength={35}
                                        autoComplete='off'
                                        required
                                    />
                                    <label htmlFor="email">Email Address<i className='text-danger'>*</i></label>
                                </div>
                                {errors.email && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.email.message}</small>}
                            </div>
                            <div className="col">
                                <div className="talent-group">
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
                            <div className="col">
                                <div className="talent-group">
                                    <SelectField
                                        id="gender"
                                        name="gender"
                                        register={register('gender', {
                                            required: 'Gender is required.',
                                        })}
                                        options={option_gender}
                                    />
                                    <label htmlFor="gender">Gender<i className='text-danger'>*</i></label>
                                </div>
                                {errors.gender && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.gender.message}</small>}
                            </div>

                            <div className="col">
                                <div className="talent-group">
                                    <SelectField
                                        id="age"
                                        name="age"
                                        register={register('age', {
                                            required: 'age is required.',
                                        })}
                                        options={Array.from({ length: 16 }, (_, i) => i + 3).reverse()}
                                    />

                                    <label htmlFor="age">Age<i className='text-danger'>*</i></label>
                                </div>
                                {errors.age && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.age.message}</small>}
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <div className="talent-text-group">
                                <textarea
                                    id="address"
                                    name="address"
                                    {...register('address', {
                                        required: 'Address is required.',
                                        minLength: {
                                            value: 10,
                                            message: 'Address must be at least 10 characters.',
                                        },
                                    })}
                                    maxLength={100}
                                    autoComplete='off'
                                    required
                                />
                                <label htmlFor="address">Address<i className='text-danger'>*</i></label>
                            </div>
                            {errors.address && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.address.message}</small>}
                        </div>

                        <p className='p-0 mb-2 fw-semibold'> Category Details </p>
                        <div className='row row-gap-2'>
                            <div className="col-6">
                                <div className="talent-group">
                                    <SelectField
                                        id="category"
                                        name="category"
                                        register={register('category', {
                                            required: 'Category is required.',
                                        })}
                                        onChange={handleCategoryChange}
                                        options={option_category}
                                    />
                                    <label htmlFor="category">Category<i className='text-danger'>*</i></label>
                                </div>
                                {errors.category && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.category.message}</small>}
                            </div>

                            {showOtherFields && (
                                <>
                                    <div className="col">
                                        <div className="talent-group">
                                            <input
                                                type="text"
                                                id="performance"
                                                name="otherPerformance"
                                                {...register('otherPerformance', {
                                                    required: 'Performance is required.',
                                                    minLength: {
                                                        value: 4,
                                                        message: 'Performance must be at least 4 characters.',
                                                    },
                                                })}
                                                maxLength={14}
                                                required
                                            />
                                            <label htmlFor="performance">Performance Name<i className='text-danger'>*</i></label>
                                        </div>
                                        {errors.otherPerformance && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.otherPerformance.message}</small>}
                                    </div>
                                    <div className="col-12">
                                        <div className="talent-group">
                                            <input
                                                type="text"
                                                id="performanceDesc"
                                                name="otherPerformanceDesc"
                                                {...register('otherPerformanceDesc', {
                                                    required: 'More About Performance is required.',
                                                    minLength: {
                                                        value: 10,
                                                        message: 'More About Performance must be atleast 10 characters.',
                                                    },
                                                })}
                                                maxLength={50}
                                                required
                                            />
                                            <label htmlFor="performanceDesc">More about Performance<i className='text-danger'>*</i></label>
                                        </div>
                                        {errors.otherPerformanceDesc && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.otherPerformanceDesc.message}</small>}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Section 3 */}
                        <div className='row gap-2'>
                            <div className="col-12 mt-2">
                                <div className="talent-text-group">
                                    <textarea
                                        id="about"
                                        name="about"
                                        {...register('about', {
                                            required: 'About is required.',
                                            minLength: {
                                                value: 20,
                                                message: 'About must be at least 20 characters.',
                                            },
                                        })}
                                        maxLength={100}
                                        required
                                    />
                                    <label htmlFor="about">Tell about yourself<i className='text-danger'>*</i></label>
                                </div>
                                {errors.about && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.about.message}</small>}
                            </div>
                            <hr />
                            <div className='checkbox2-container flex column-gap-1'>
                                <input
                                    id='terms'
                                    type="checkbox"
                                    required
                                    {...register('terms', { required: true })}
                                />
                                <span className="checkmark2"></span>
                                <label htmlFor='terms'>I agree with all the <a href='' className='default-link'> Terms and Conditions</a> & <a href='' className='default-link'> Privacy Policies</a></label>
                            </div>
                            <div className='mt-2'>
                                <button type='submit' className='btn talent-submit-btn'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page