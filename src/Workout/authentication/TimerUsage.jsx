import React from 'react';
import Timer from './Timer'; // Adjust the import path as necessary

const App = () => {
    const handleTimeUp = () => {
        console.log('Timer has reached zero!');
    };

    return (
        <div>
            <h1>Timer Example</h1>
            {/* Timer in mm:ss format */}
            <Timer initialTime={120} format="mm:ss" onTimeUp={handleTimeUp} name="Session" />

            {/* Timer in seconds format */}
            <Timer initialTime={90} format="sec" onTimeUp={handleTimeUp} name="Countdown" />
        </div>
    );
};

export default App;
