import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp, format, name }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Reset the timer if the initial time changes
        setTimeLeft(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (onTimeUp) {
                onTimeUp();
            }
            return; // Stop if the timer reaches zero
        }

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        // Clean up the interval on component unmount or when timeLeft changes
        return () => clearInterval(timerId);
    }, [timeLeft, onTimeUp]);

    const formatTime = () => {
        if (format === 'mm:ss') {
            const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
            const seconds = String(timeLeft % 60).padStart(2, '0');
            return `${minutes}:${seconds}`;
        } else if (format === 'sec') {
            return `${timeLeft} sec`;
        }
        return '';
    };
    return (formatTime());
};

export default Timer;
