'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "@/config/axiosConfig";
import '@/styles/TalentFormStyle.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectField from '@/components/form/SelectField';
import AgeSelectionForm from '@/components/form/DateField';
import Success from './Success';

const RegisterForm = () => {
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
  const [showOtherFields, setShowOtherFields] = useState(false);
  const [show, setShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Step state to track which component to display

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setShow(true); // Show modal when checked
    } else {
      setShow(false); // Hide modal when unchecked
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) {
      e.target.value = value.replace(/\D/g, '');
    }
  };

  const onSubmit = async (data) => {
    const { category, ...rest } = data;
    const mergeData1 = `${data.firstName} | ${data.fatherName}`
    const mergeData2 = `${data.lastName} | ${data.motherName}`
    const mergeData3 = `${data.dob} | ${data.age}`
    const mergeData4 = `${data.message} | ${data.terms} | ${data.otherPerformance} | ${data.otherPerformanceDesc}`

    const customData = {
      ...rest,
      type: 'talent',
      firstName: mergeData1,
      lastName: mergeData2,
      dob: mergeData3,
      message: mergeData4,
      courseInterest: category
    };
    delete customData.fatherName
    delete customData.motherName
    delete customData.age
    delete customData.otherPerformance
    delete customData.otherPerformanceDesc
    delete customData.terms

    const formData = new FormData();
    for (let key in customData) {
      formData.append(key, customData[key]);
    }
    try {
      const response = await axios.post("/contact", formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      toast.success('Details Registerd Successfully');
      reset();
      setCurrentStep(2);
    }
    catch (e) {
      if (e.response?.data?.message) {
        toast.error(e.response?.data?.message)
      } else {
        toast.error('Server Connection Failed')
      }
    }
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === 'other') {
      setShowOtherFields(true);
    } else {
      setShowOtherFields(false);
    }
  };

  const option_gender = ['male', 'female']
  const option_category = ["dance", "art", "instrumentPlay", "sing", "act", "drama", "standupPerformance", "other"];

  return (
    <div className='d-flex flex-column justify-content-center col position-relative'>
      <div className="col pb-1 ">
        <h4 className='text-center mt-3 main-title fw-bold text-uppercase form-title' style={{ letterSpacing: '4px' }}> Talent Show - December 2024</h4>
        <form onSubmit={handleSubmit(onSubmit)} className='py-3 w-80 w-60 w-50 mx-auto p-3 shadow-sm rounded form-container-bg '>
          {currentStep === 1 &&
            (
              <>
                <div className='row row-cols-1 row-cols-md-2 row-gap-3 row-gap-lg-2'>
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
                      <label htmlFor="firstname">First Name <i className='text-danger'>*</i></label>
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
                      <label htmlFor="lastname">Last Name <i className='text-danger'>*</i></label>
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
                      <label htmlFor="email">Email Address <i className='text-danger'>*</i></label>
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
                      <label htmlFor="gender">Gender <i className='text-danger'>*</i></label>
                    </div>
                    {errors.gender && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.gender.message}</small>}
                  </div>
                  <AgeSelectionForm
                    register={register}
                    setValue={setValue}
                    watch={watch}
                    errors={errors}
                  />
                  <div className='col'>
                    <div className="col">
                      <div className="talent-group">
                        <input
                          type="text"
                          id="fathername"
                          name="fatherName"
                          {...register('fatherName', {
                            required: 'Father name is required.',
                            minLength: {
                              value: 4,
                              message: 'Father name must be at least 4 characters.',
                            },
                          })}
                          maxLength={25}
                          autoComplete='off'
                          required
                        />
                        <label htmlFor="fathername">Father Name <i className='text-danger'>*</i></label>
                      </div>
                      {errors.fatherName && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.fatherName.message}</small>}
                    </div>

                    <div className="col mt-3 mt-lg-3">
                      <div className="talent-group">
                        <input
                          type="text"
                          id="mothername"
                          name="motherName"
                          {...register('motherName', {
                            required: 'Mother name is required.',
                            minLength: {
                              value: 4,
                              message: 'Mother name must be at least 4 characters.',
                            },
                          })}
                          maxLength={25}
                          autoComplete='off'
                          required
                        />
                        <label htmlFor="mothername">Mother Name <i className='text-danger'>*</i></label>
                      </div>
                      {errors.motherName && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.motherName.message}</small>}
                    </div>
                  </div>
                  <div className="col">
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
                      <label htmlFor="address">Address <i className='text-danger'>*</i></label>
                    </div>
                    {errors.address && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.address.message}</small>}
                  </div>
                </div>
                <div className='row row-cols-1 row-cols-md-2 row-gap-3 row-gap-lg-1 mt-2 mt-lg-1'>
                  <div className="col">
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
                      <label htmlFor="category">Category <i className='text-danger'>*</i></label>
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
                          <label htmlFor="performance">Performance Name <i className='text-danger'>*</i></label>
                        </div>
                        {errors.otherPerformance && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.otherPerformance.message}</small>}
                      </div>
                      <div className="col-12 w-100">
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
                          <label htmlFor="performanceDesc">More about Performance <i className='text-danger'>*</i></label>
                        </div>
                        {errors.otherPerformanceDesc && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.otherPerformanceDesc.message}</small>}
                      </div>
                    </>
                  )}
                </div>
                <div className='row gap-2 mt-3 mt-lg-2'>
                  <div className="col-12">
                    <div className="talent-text-group">
                      <textarea
                        id="message"
                        name="message"
                        {...register('message', {
                          required: 'Message is required.',
                          minLength: {
                            value: 20,
                            message: 'Message must be at least 20 characters.',
                          },
                        })}
                        maxLength={100}
                        required
                      />
                      <label htmlFor="message">Tell about yourself <i className='text-danger'>*</i></label>
                    </div>
                    {errors.message && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.message.message}</small>}
                  </div>
                  {/* <hr /> */}
                  <div className='checkbox2-container justify-content-start flex column-gap-1'>
                    <input
                      id='terms'
                      type="checkbox"
                      required
                      {...register('terms', { required: true })}
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkmark2"></span>
                    <label htmlFor='terms'>I agree with all the <a onClick={handleShow} className='default-link'> Terms and Conditions.</a></label>
                  </div>
                  <>
                    <Modal show={show} onHide={handleClose}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Terms and Conditions</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ul className='list-group list-group-numbered list-group-flush'>
                          <li className='list-group-item'>
                            Individuals wishing to participate must be below the age of 18.
                          </li>
                          <li className='list-group-item'>
                            Each individual may enroll in only a single event.
                          </li>
                          <li className='list-group-item'>
                            Only candidates who have registered are eligible; no substitutes will be accepted.
                          </li>
                          <li className='list-group-item'>
                            Winners will receive prizes that are non-transferable and cannot be exchanged for monetary value.
                          </li>
                          <li className='list-group-item'>
                            By registering, participants and their guardians acknowledge and accept these terms.
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Okay
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                  <div className='text-center mt-4 mt-lg-2'>
                    <button className='btn-send rounded fw-bold text-uppercase'>
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          {currentStep === 2 && <Success />}
        </form>
        <div className='position-absolute start-0 d-none d-lg-block z-0' style={{ top: '20%' }}>
          <iframe
            src="https://lottie.host/embed/39f2bfe1-29f0-42a3-8af8-241dd05bfb55/7Z9SjqVg8h.json"
            title="Duo Guitar Playing"
            className="lottie-iframe"
          ></iframe>
        </div>
        <div className='position-absolute start-0 d-none d-lg-block z-0' style={{ bottom: '20%' }}>
          <iframe
            src="https://lottie.host/embed/e9390a48-ae5c-47e7-8931-eef3828586a1/om5Ho2E4MG.json"
            title="Painting"
            className="lottie-iframe"
          ></iframe>
        </div>
        <div className='position-absolute end-0 d-none d-lg-block z-0' style={{ bottom: '40%' }}>
          <iframe
            src="https://lottie.host/embed/b6cf1671-7fe6-46e7-9c98-1eef1c36aa3c/Oxb32YcwRO.json"
            title="Solo Singing"
            className="lottie-iframe"
          ></iframe>
        </div>
        <div className='position-absolute end-0 d-none d-lg-block z-0' style={{ bottom: '10%' }}>
          <iframe
            src="https://lottie.host/embed/07429f32-f6e1-4419-bf09-3dcafeb1c1b2/mddtBqCaET.json"
            title="Thinking"
            className="lottie-iframe"
          ></iframe>
        </div>

        <div className='position-absolute end-0 d-none d-lg-block z-0' style={{ top: '0%' }}>
          <iframe
            src="/lottie-animations/dance.svg"
            title="Dancig"
            className="lottie-iframe"
          ></iframe>
        </div>
      </div>
    </div >
  );
};

export default RegisterForm