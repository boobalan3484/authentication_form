import React, { useState } from 'react';

const AgeSelectionForm = ({ register, setValue, watch, errors }) => {
    const [age, setAge] = useState(''); // Initialize age as a string
    const currentYear = new Date().getFullYear();

    // Minimum and maximum years for the date picker
    const minYear = currentYear - 18;
    const maxYear = currentYear - 3;

    // Watch the date input to dynamically update the age select
    const selectedDate = watch('dob');

    const calculateAge = (date) => {
        if (date) {
            const birthYear = new Date(date).getFullYear();
            const calculatedAge = currentYear - birthYear;
            setAge(calculatedAge.toString()); // Ensure age is a string
            setValue('age', calculatedAge.toString() || ''); // Set age as a string
        } else {
            setAge(''); // If no valid date, set age as an empty string
            setValue('age', '');
        }
    };

    return (
        <>
            <div className="col">
                <div className="talent-group">
                    <input
                        type="date"
                        id="birthDate"
                        name="dob"
                        className="w-75"
                        style={{ borderRadius: '5px 0px 0px 5px !important' }}
                        {...register('dob', {
                            required: 'Date of birth is required',
                            validate: {
                                validYear: (value) => {
                                    const birthYear = new Date(value).getFullYear();
                                    return (
                                        birthYear >= minYear &&
                                        birthYear <= maxYear
                                    ) || 'Age must be between 3 and 18 years';
                                },
                            },
                            onChange: (e) => calculateAge(e.target.value),
                        })}
                        min={`${minYear}-01-01`}
                        max={`${maxYear}-12-31`}
                        required
                    />
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={age} // Ensure age is a string here
                        {...register('age', {
                            required: 'Age is required.',
                        })}
                        autoComplete="off"
                        disabled
                        className="w-25"
                        style={{ borderRadius: '0px 5px 5px 0px !important', marginTop: '2px' }}
                        placeholder="Age"
                    />

                    <label htmlFor="age" className="position-absolute px-2" style={{ left: 'unset', right: '10%' }}></label>
                    <label htmlFor="birthDate">Date of Birth <i className="text-danger">*</i></label>
                </div>
                {errors.dob && <small className="text-danger m-0" style={{ fontSize: '12px' }}>{errors.dob.message}</small>}
            </div>
        </>
    );
};

export default AgeSelectionForm;
